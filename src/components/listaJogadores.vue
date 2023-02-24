<template>
  <div>
    <div class="pronto" v-if="seleciona">
      <div 
          @click="fimSelecao()">
        <i class="fa fa-check-square-o"></i> 
        <span>  Pronto </span>
      </div>
    </div>
    <b-card class="lista">
      <div v-for="(jogador,i) in jogadores" :key="jogador.nome" class="cartao">
        <!-- <b-img :src="african1" fluid /> -->
        <b-img :src="jogador.avatar" fluid />
        <span>{{jogador.nome}}</span>
        <div class="cardbtn">
          <i class="fa fa-2x" :class="jogador.selecionado ? 'fa-check-square-o' : 'fa-square-o'"
              @click="select(i)"></i>
          <i class="fa fa-trash fa-2x" v-if="!seleciona" @click="remove(i)"></i>
        </div>
      </div>
    </b-card>
  </div>
      

</template>

<script>
export default {
  data: function(){
    return {
    }
  },
  props:{jogadores:Array,
         seleciona:Boolean},
  methods:{
    remove(i) {
      this.jogadores.splice(i, 1)
      localStorage.setItem("jogadores", JSON.stringify(this.jogadores))
      this.$emit('carrega',this.jogador)
    },
    select(i) {
      if (!this.seleciona) {
        this.$emit('selectJogador',this.jogadores[i])
      } else {
        this.jogadores[i].selecionado=!this.jogadores[i].selecionado
      }
    },
    fimSelecao(){
      var jogadores=this.jogadores.filter(jogador=>{
        return jogador.selecionado
      })
      if (jogadores.length<3){
        alert('É necessário selecionar pelo menos 3 jogadores ! ')
        return
      }
      this.$emit('jogadoresSelecionados',jogadores)
    }
      
  }
}
</script>

<style>
  .pronto{
    display: flex;
    justify-content: center;
    align-items: center;
    border:1px solid #69f0ae;
    margin-top: 10px;
    background-color: #69f0ae;
    color:#004d40;
    border-radius: 5px;
  }
  .lista {
    margin-top: 15px;
    background-color: #004d40;
    max-height: 200px;
    overflow: auto;
  }
  .cartao i {
    margin-left: 20px;
  }
  .cartao > img {
    width: 40px;
    height: 40px;
  }
  .cardbtn>button {
    margin-left: 5px;
  }
  .cardbtn>button>i {
    width:10px;
    height: 10px;
    margin-right: 5px;
  }
  .cartao span{
    /* width:50%; */
  }
  .cardbtn {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex:1;
    align-items: center;
  }

  .card-body {
    padding: 0 !important;
  }

  .cartao {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 3px auto;
    border: 1px solid #666;
    border-radius: 8px;
    padding: 5px;
    color:#69f0ae;
  }

  @media (min-height: 480px) {
    .lista {
      max-height: 200px;
    }
  }
  @media (min-height: 568px) {
    .lista {
      max-height: 290px;
    }
  }
  @media (min-height: 640px) {
    .lista {
      max-height: 335px;
    }
  }
  @media (min-height: 700px) {
    .lista {
      max-height: 400px;
    }
  }
  @media (min-height: 800px) {
    .lista {
      max-height: 475px;
    }
  }
  @media (min-height: 854px) {
    .lista {
      max-height: 630px;
    }
  }
  @media (min-height: 1280px) {
    .lista {
      max-height: 930px;
    }
  }

</style>
