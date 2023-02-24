<template>
  <div class="cartao">
    <div class="resumo">
      <div class="jogadorCartao">
        <img :src="jogadorCard.avatar" />
        <span>{{jogadorCard.nome}}</span>
      </div>
      <div class="cardbtn">
        <div @click="menosVidas()">
          <i class="fa fa-heart fa-2x"></i>
          <span>{{jogadorCard.vidas}}</span>
        </div>
        <div >
          <i class="fa fa-calculator fa-2x"></i>
          <span>{{calculaPontosJogador('placar')}}</span>
        </div>
        <div class="hand">
          <i class="fa fa-thumbs-o-up fa-2x" v-if="jogadorCard.carteador"></i>
          <i class="fa fa-thumbs-o-down fa-2x" v-else></i>
          <span>Cartas</span>
        </div>
        <div class="show" @click="jogadorCard.showCard=!jogadorCard.showCard">
        <!-- <div class="show"> -->
          <i class="fa fa-eye-slash fa-2x" v-if="jogadorCard.showCard"></i>
          <i class="fa fa-eye fa-2x" v-else></i>
        </div>
      </div>
    </div>
      <div class="detalhe" v-show="jogadorCard.showCard">
        <div v-for="(rodada,r) in jogadorCard.rodadas" class="pontoRodada">
          <div class="pontos" v-show="r<7">
            <div v-show="r<6">
              <div class="imagem">
                <img :src="figuras[r]">
                <img :src="figuras[r]" v-show="r%2==1&&r<7">
              </div>
            </div>
            <div v-if="r==6">
              <i class="fa fa-flag-checkered fa-2x"></i>
            </div>
            <div class="dadosPontos">
              <input type="number" min=0 v-model="jogadorCard.rodadas[r]"/>
              <i class="fa fa-minus-square fa-2x" 
                @click="tornaNegativo(r)"></i>
              <i class="fa fa-user-plus fa-2x"></i>
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

export default {
  name: 'Cards',
  props: {  jogadorCard: Object,
            rodada :Number,
            figuras:Array
         },
  data:function(){
    return{
      formas:[triangulo,quadrado,quina],
    }
  },
  methods: {
    menosVidas(){
      this.jogadorCard.vidas=this.jogadorCard.vidas-1
      this.$forceUpdate()
    },
    tornaNegativo(rod){
      this.jogadorCard.rodadas[rod]=this.jogadorCard.rodadas[rod]*-1
      this.calculaPontosJogador('neg')
    },
    calculaPontosJogador(e) {
      var tot=0
      this.jogadorCard.rodadas[7]=0
      tot=this.jogadorCard.rodadas.reduce(function(prevVal, elem) {
        return parseInt(prevVal+0) + parseInt(elem);
      }, 0);
      this.jogadorCard.rodadas[7]=tot
      if (e!=='placar') this.$forceUpdate()
      return this.jogadorCard.rodadas[7]
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
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
.resumo{
  display: flex;
  justify-content: flex-start;
}
.cardbtn div>span {
  width: 100%;
  text-align: center;
}
.cardbtn>div{
  height: 100%;
}

.hand>span {
  font-size: 12px;
}

.cardbtn div {
  border-left: 1px solid #69f0ae;
  padding: 0 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
}

.listaCards {
  width: 95vw !important;
}

.jogadorCartao {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  width: 80px;
  flex-wrap: nowrap;
}

div.jogadorCartao>img {
  max-width: 40px !important;
}
</style>
