<template>
  <div class="inicial">
    <div class="logo">
        <img src="@/assets/ferrim.png" alt="" :style="{width:imagesize}">
    </div>
    <Menu />
  </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  name:'Inicial',
  components:{ Menu},
  methods:{
    alterarTitulo() {
      return this.$store.state.titulo="Pontuação de Jogo Irado !!!"
    }  
  },
  computed: {
    imagesize() {
      return this.$mq === 'sm' ? '85%' : '65%'
    },
  },
  mounted() {
    this.alterarTitulo()
  }
}
</script>

<style>
  .tabs{
    font-size:0.9rem !important;
  }
  .inicial{
      display: flex;
      flex-direction: column ;
      justify-content: center;
      align-content: center;
      height: 100%;
      width: 100vw;
  }
  .logo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex:1;
  }
  .logo img{
      align-self: center;
  }
</style>
