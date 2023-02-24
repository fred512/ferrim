<template>
  <div class="cartao" >
    <div class="resumo">
      <div class="jogadorCartao">
        <img :src="jogadorCartao.avatar" />
        <span>{{jogadorCartao.nome}}</span>
      </div>
      <div class="cardbtn">
        <div>
          <i class="fa fa-heart fa-2x" @click="menosVidas()"></i>
          <span @click="maisVidas()">{{jogadorCartao.vidas}}</span>
        </div>
        <div @click="jogadorCartao.showCard=!jogadorCartao.showCard;setFocus()">
          <i class="fa fa-calculator fa-2x"></i>
          <!-- <span>{{jogadorCartao.rodadas[7]}}</span> -->
          <span>{{pontuacao()}}</span>
        </div>
        <div class="hand" @click="quemDaCartas()">
          <i class="fa fa-thumbs-o-up fa-2x" v-if="jogadorCartao.carteador"></i>
          <i class="fa fa-thumbs-o-down fa-2x" v-else></i>
          <span>Dá Cartas</span>
        </div>
        <div class="show" @click="jogadorCartao.showCard=!jogadorCartao.showCard;setFocus()">
        <!-- <div class="show"> -->
          <i class="fa fa-eye-slash fa-2x" v-if="jogadorCartao.showCard"></i>
          <i class="fa fa-eye fa-2x" v-else></i>
        </div>
      </div>
    </div>
      <div class="detalhe" v-show="jogadorCartao.showCard">
        <div v-for="(rodada,r) in jogadorCartao.rodadas" :key="r" class="pontoRodada">
          <div class="pontos" v-show="r<7">
            <div v-show="r<6">
              <div class="imagem" @click="setFocus()">
                <img :src="figuras[r]">
                <img :src="figuras[r]" v-show="r%2==1&&r<7">
              </div>
            </div>
            <div v-if="r==6">
              <i class="fa fa-flag-checkered fa-2x"></i>
            </div>
            <div class="dadosPontos">
              <input ref="pontosRodada" type="number" min=0 
                v-model.lazy="jogadorCartao.rodadas[r]" />
              <i class="fa fa-plus-square fa-2x"
                @click="tornaNegativo(r,1)"></i>
              <i class="fa fa-minus-square fa-2x"
                @click="tornaNegativo(r,-1)"></i>
            </div>
          </div>
          </div>

      </div>

  </div>
</template>

<script>
import triangulo from '@/assets/triangulo.png'
import quadrado from '@/assets/quadrado.png'
import quina from '@/assets/quina.png'
import { mapMutations } from 'vuex'
export default {
  name: 'Cards',
  props: { figuras:Array, jogador:Number,  jogadorCartao:Object},
  data:function(){
    return{
      formas:[triangulo,quadrado,quina],
    }
  },
  methods: {
    ... mapMutations(['daCartas','calculaPontuacao']),
    menosVidas(){
      this.jogadorCartao.vidas=this.jogadorCartao.vidas-1
      if (this.jogadorCartao.vidas<0) this.jogadorCartao.vidas=0
      this.$forceUpdate()
    },
    maisVidas(){
      this.jogadorCartao.vidas=this.jogadorCartao.vidas+1
      this.$forceUpdate()
    },
    quemDaCartas(){
      this.daCartas(this.jogador)
    },
    setFocus(){
      if (!this.jogadorCartao.showCard) return
      var el=(this.jogador)*8+this.jogadorCartao.rodadaAtual-1
//      if (this.jogadorCartao.Jid==0) el=el-1
      setTimeout(() =>{
        document.querySelectorAll('input')[el].focus()
      }, 500);
    },
    tornaNegativo(rod,op){
      this.jogadorCartao.rodadas[rod]=this.jogadorCartao.rodadas[rod]*op
      this.calculaPontosJogador(this.jogador)
      this.jogadorCartao.showCard=!this.jogadorCartao.showCard
      this.$forceUpdate()
    },
    calculaPontosJogador() {
      return this.calculaPontuacao(this.jogador)
    },
    pontuacao(){
      var pontos=this.$store.getters.getPontuacao
      return pontos[this.jogador][7]
    }
  },
  computed:{
    // jogo(){
    //   return this.$store.state.jogo
    // },
    // rodada(){
    //   return this.$store.state.rodada
    // },
  },
  mounted() {
  }
}
</script>

<style scoped>
.cardbtn input{
  color:#69f0ae;
  width:10vw;
  border: none;
  background-color: #004d40;
  text-align: center;
}
.dadosPontos{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pontos{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}
 .pontos div{
  width: 25vw;
}
.cab{
  height: 100px;
  width: 100%;
}
.detalhe{
  display: flex;
  flex-direction: column;
  border-top: 1px solid #69f0ae;
  justify-content: flex-start;
  margin-top: 10px;}
.detalhe input{
  border-radius: 5px;
  width: 50px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  color:#69f0ae;
  background-color: #004d40;
  margin-left: 10px;
}
.detalhe i:first-child{
  margin-left:5px;
}
.detalhe i{
  margin-left: 15px;
}
.detalhe img{
  max-width: 20px;
  margin-right: 5px;
}
.detalhe>div{
  widows: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;
  padding: 3px;
  padding-top: 5px;
  border-top: 1px solid #78909c;
}
.cartao {
  width: 98vw;
  display: flex !important;
  justify-content: flex-start;
  border: 1px solid #69f0ae;
  flex-direction: column;
}
.resumo >div:first-child{
  width:20%;
}
/* .resumo >div> div{
  width: 25%;
} */

.resumo div{
  width: 88%;
}
.resumo{
  display: flex;
  justify-content: flex-start;
}
.cardbtn div>i {
  margin:0;
}

.cardbtn div>span {
  width: 100%;
  text-align: center;

}
.cardbtn>div:last-child{
  justify-content: center;
}

.hand>span {
  font-size: 12px;
}

.cardbtn div {
  height: 100%;
  border-left: 1px solid #69f0ae;
  padding: 0 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
}

.listaCards {
  width: 95vw !important;
}

.jogadorCartao {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  width: 20%;
  flex-wrap: nowrap;
}

div.jogadorCartao>img {
  width: 40% !important;
  min-width: 50px;
}
@media screen and (min-width: 1000px) {
  .cardbtn div {
    font-size: 2vw;
  }
}
</style>
