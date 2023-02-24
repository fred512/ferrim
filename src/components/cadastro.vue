<template>
  <div class="jogador">
    <Avatares @novoAvatar="novoAvatar" @cancela="cancela" v-if="mostraAvatares" />
    <div class="formulario" v-else>
      <b-form class="form-jogador">
        <b-row>
          <b-col>
            <b-form-group>
              <b-form-input id="user-name" type="text" v-model="jogador.nome" required placeholder="Informe o Nome do Jogador..." />
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group>
              <a class="btn-avatar" @click="mostraAvatares=!mostraAvatares">
                <div v-if="jogador.avatar.length==0">
                  <i class="fa fa-user-circle-o fa-3x"></i>
                  <span>
                     Escolha um Avatar...
                  </span>
                </div>
                <div v-if="jogador.avatar.length!==0">
                  <img :src="jogador.avatar" alt=""/> 
                  <span>
                     Boa escolha de Avavar !!!
                  </span>
                </div>
              </a>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="botoes">
          <b-button variant="info" @click="save">Salvar</b-button>
          <b-button variant="warning" @click="reset">Cancelar</b-button>
        </b-row>
      </b-form>
      <listaJogadores :seleciona='false' ref="Avat" :jogadores="[...jogadores]" 
        @carrega="loadJogadores()" 
        @selectJogador="carregaJogador($event)"/>
    </div>
  </div>
</template>

<script>
import Avatares from '@/components/Avatares'
import listaJogadores from '@/components/listaJogadores'
export default {
  name: 'Cadastro',
  components: { Avatares, listaJogadores },
  data: function() {
    return {
      jogadores: [],
      mostraAvatares: false,
      jogador: { 'nome': '', 'avatar': '','selecionado':false },
    }
  },
  methods: {
    novoAvatar(e) {
      this.jogador.avatar = e
      this.cancela()
    },
    cancela() {
      this.mostraAvatares = false;
    },
    save() {
      if (this.jogador.avatar.length==0){
        alert("Selecione um Avatar")
        return
      }
      var nome=this.jogador.nome
      var repetido=this.jogadores.filter(function(reg){
        return reg.nome.toUpperCase()==nome.toUpperCase()
      })
      if (repetido.length){
        alert ("Jogador já incluido !")
        return
      }
      this.jogadores.push({ 'nome': this.jogador.nome, 'avatar': this.jogador.avatar,'selecionado':false })
      localStorage.setItem("jogadores", JSON.stringify(this.jogadores))
      document.querySelector('a.btn-avatar>div>span').innerText="Escolha um Avatar..."
      this.reset()
    },
    reset() {
      this.jogador = { 'nome': '', 'avatar': '','selecionado':false }
    },
    loadJogador(user) {
      this.jogador = { ...user }
    },
    loadJogadores() {
      this.jogadores = []
      var jogadores = localStorage.getItem("jogadores")
      if (jogadores != null) this.jogadores = JSON.parse(jogadores)
    },
    carregaJogador(e){
      this.jogador.nome=e.nome
      this.jogador.avatar=e.avatar
    },
    alterandoTitulo() {
      return this.$store.state.titulo="Selecione/Altere/Inclua Jogadores"
    }  
  },
  mounted() {
    this.loadJogadores()
  },
  created(){
    this.alterandoTitulo()
  }

}
</script>

<style>
.form-group input {
  background-color: #ccc;
}
.form-group {
    margin-bottom: 0.5rem;
    color:#ccc;
}
.jogador {
  margin-top: 15px;
  width: 90%;
}

.botoes button {
  height: 40px;
}

.botoes {
  display: flex;
  justify-content: space-evenly;
  width: 109%;
  box-sizing: border-box;
}


.jogador button {
  height: auto !important;
}

.botoes>button {
  height: 30px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.botoes button {
  width: 25vw;
  margin: 4px;
}

.btn-avatar i {
  margin-right: 15px;
}

.btn-avatar img {
  width: 40px;
  height: 40px;
  margin-right: 15px;
}

.btn-avatar {
  width: 98%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color:#ccc !important;
}
</style>