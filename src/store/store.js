import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    jogo:[],
    rodada:1,
    titulo:'',
    jogador:0,
    pontuacao:[]
  },
  getters:{
    getPontuacao(state){
      var pt=[]
      for (var i=0;i<state.jogo.length;i++){
        pt.push(state.jogo[i].rodadas)
      }
      return pt
    }
  },
  mutations:{
    daCartas(state,jogador){
      var atual=""
      var novo=state.jogo.map(function(el){
        if (el.carteador) atual=el.Jid
        el.carteador=''
        return el
      })
      if (jogador) {
        state.jogo[jogador].carteador=1
        return
      }
      if (atual+1>=state.jogo.length) atual=-1
      novo=novo.map(function(el){
        if (el.Jid==atual+1) el.carteador=1
        return el
      })
      state.jogo=novo
    },
    calculaPontuacao(state,jogador){
      state.jogador=jogador
      if (state.jogo.length>0){
        var tot=0
        state.jogo[state.jogador].rodadas[7]=0
        tot=state.jogo[state.jogador].rodadas.reduce(function(prevVal, elem) {
          return parseInt(prevVal+0) + parseInt(elem);
        }, 0);
        state.jogo[state.jogador].rodadas[7]=tot
        return state.jogo[state.jogador].rodadas[7]
      } else{
        return 0
      }
    },
    proximaRodada(state){
      state.jogo.rodadaAtual++
    },
    incluiJogadores(state,jogadorCard){
      state.jogo.push(jogadorCard)
    }
  },

})