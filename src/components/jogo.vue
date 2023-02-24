<template>
  <div class="jogo">
    <div class="select" v-if="!temJogo">
      <span>
        Selecione os jogadores para o Jogo
      </span>
      <listaJogadores :seleciona='true' :jogadores="[...jogadores]" @jogadoresSelecionados="montaCards($event)" />
    </div>
    <div class="painel" v-if="temJogo">
      <div class="cab">
        <div >
          <router-link to="/">
            <i class="fa fa-angle-left fa-2x"></i>
          </router-link>
        </div>
        <div>
          Rodada :
          <div v-show="jogo[0].rodadaAtual<7">
            <div class="imagem">
              <img :src="srcRodada[jogo[0].rodadaAtual-1]">
              <img :src="srcRodada[jogo[0].rodadaAtual-1]" v-show="jogo[0].rodadaAtual%2==0">
            </div>
          </div>
          <div v-if="jogo[0].rodadaAtual==7">
            &nbsp;&nbsp;
            <i class="fa fa-flag-checkered fa-2x"></i>
          </div>
        </div>
        <div class="fimrodada">
          <b-button variant="info" @click="fimRodada">
            Fim da Rodada
          </b-button>

        </div>
      </div>
      <div class="cards" v-for="(jogadorCard,i) in jogo" :key="i">
          <cards 
              :jogadorCartao="jogadorCard" 
              :jogador="i" 
              :figuras="srcRodada" 
              :class="{'ganhador':jogadorCard.ganhou}" />
        
      </div>
    </div>
  </div>
</template>

<script>
import triangulo from '../assets/triangulo.png'
import quadrado from '../assets/quadrado.png'
import quina from '../assets/quina.png'
import cards from '../components/cards'
import listaJogadores from '@/components/listaJogadores'

export default {
  name: 'Jogo',
  components: { listaJogadores, cards },
  data: function() {
    return {
      ganhou:'',
      jogadores: [],
      temJogo: false,
      srcRodada: [triangulo, triangulo, quadrado, quadrado, quina, quina],
    }
  },
  methods: {
    fimRodada() {
      var breakCheck1=false;
      for (var x = 0; x < this.jogo.length; x++) {
        for (var i = 0; i < this.jogo[0].rodadaAtual&&this.jogo[0].rodadaAtual<7&&!breakCheck1; i++) {
          if (this.jogo[x].rodadas[i] == 0) {
            alert("Pontuação do jogador " + this.jogo[x].nome + " não foi informada !")
            breakCheck1=true
            break
          }
        }
      }
      if (this.jogo[0].rodadaAtual==7){
        var gan=0,jog=''
        for (i = 0; i < this.jogo.length&&!breakCheck1; i++) {
          this.jogo[i].ganhou=false
          if (this.jogo[i].rodadas[7]>gan) {
            gan=this.jogo[i].rodadas[7]
            jog=i
          }
        }
        this.jogo[jog].ganhou=true
      }
      if (!breakCheck1&&this.jogo[0].rodadaAtual<7) {
        for (i=0;i<this.jogo.length;i++){
          this.jogo[i].rodadaAtual++
        }
        this.$store.commit('daCartas')
      }
      this.jogo.sort(function(obj1, obj2) {
        // Ascending: first age less than the previous
        return obj1.rodadas[7] - obj2.rodadas[7];
      });
      this.jogo.reverse()
      localStorage.setItem('jogo',JSON.stringify(this.jogo))
    },
    montaCards(j) {
      for (var i = 0; i < j.length; i++) {
        var jogadores={
          'Jid': i,
          'nome': j[i].nome,
          'avatar': j[i].avatar,
          'rodadas': [0, 0, 0, 0, 0, 0, 0, 0],
          'vidas': 10,
          'carteador': '',
          'showCard': false,
          'rodadaAtual':1,
          'ganhou':false
        }
        if (i==0) jogadores.carteador=1
        this.$store.commit('incluiJogadores',jogadores)
      }
      this.temJogo = true
    },
    iniciaJogo() {
      var jogoGravado = localStorage.getItem('jogo')
      if (jogoGravado) {
        var r = confirm("Tem um jogo gravado ! Carrega ?");
        if (r){
          this.temJogo = true
          this.$store.state.jogo = JSON.parse(jogoGravado)
        } else{
          jogoGravado=null
        }
      } 
      if (!jogoGravado)  {
        this.jogadores = []
        var jogadores = localStorage.getItem("jogadores")
        if (jogadores != null) this.jogadores = JSON.parse(jogadores)
      }
    },
    alterarTitulo() {
      return this.$store.state.titulo="Jogo"
    }  
  },
  computed:{
    jogo(){
      return this.$store.state.jogo
    },
    getRodadaAtual(){
      return this.$store.state.jogo.rodadaAtual
    }

  },
  mounted() {
    this.iniciaJogo()
    this.alterarTitulo()
  },
  destroyed: function () {
    this.$store.state.jogo=[]
  }
}
</script>

<style>
.cab {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #69f0ae;
  margin-top: 10px;
  color: #69f0ae;
  padding: 10px;
}
.cab div:nth-child(2) {
  width: 50%;
  display: flex;
  align-items: center;
  padding-left: 10px;
}
.cab div:nth-child(3) {
  width: 45%;
  text-align: right;
}
.cab div:nth-child(1) i{
  color:#69f0ae !important;
}
.cab div:nth-child(1) {
  display: flex;
  align-items: center;
  width: 5%;
}
.cab img {
  width: 20px;
  margin-left: 10px;
}
.fimrodada > button:last-child{
  margin-left: 5px;
}

.select {
  margin-top: 20px;
  color: #69f0ae;
  font-size: 1.2rem;
}

.painel {
  max-height: 380px;
  overflow: auto;
}

@media (min-height: 485px) {
  .painel {
    max-height: 450px;
  }
}

@media (min-height: 569px) {
  .painel {
    max-height: 495px;
  }
}

@media (min-height: 640px) {
  .painel {
    max-height: 520px;
  }
}

@media (min-height: 700px) {
  .painel {
    max-height: 600px;
  }
}

@media (min-height: 800px) {
  .painel {
    max-height: 675px;
  }
}

@media (min-height: 960px) {
  .painel {
    max-height: 730px;
  }
}
@media (min-height: 1280px) {
  .painel {
    max-height: 930px;
  }
}
.ganhador{
  background-color:yellow;
  color:green;
	-webkit-animation: flash linear 2s infinite;
	animation: flash linear 2s infinite;
  animation: rubberBand linear 2s infinite;
  position: relative;
}
@keyframes rubberBand {
  0% {transform: scale(1);}
  20% {transform: scaleX(1) scaleY(0.85);}
  40% {transform: scaleX(1) scaleY(1.1);}
  50% {transform: scaleX(1) scaleY(1.3);}
  60% {transform: scaleX(1) scaleY(1.1);}
  80% {transform: scaleX(1) scaleY(0.85);}
  100% {transform: scale(1);}
}
@-webkit-keyframes flash {
	0% { opacity: 1; } 
	50% { opacity: .1; } 
	100% { opacity: 1; }
}
@keyframes flash {
	0% { opacity: 1; } 
	50% { opacity: .1; } 
	100% { opacity: 1; }
}
</style>
