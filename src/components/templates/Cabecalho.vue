<template>
  <header>
    <h1>{{titulo}}</h1>
    <span>
      <i class="fa fa-arrows-alt fa-2x" @click="openFullscreen()" v-if="!fullscreen"></i>
      <i class="fa fa-window-close fa-2x" @click="closeFullscreen()" v-else></i>
    </span>
  </header>
</template>

<script>
// Listen for the i-got-clicked event and its payload.
export default {
  name: 'header',
  data:function(){
    return{
      elem : document.documentElement,
      fullscreen:false
    }
  },
  methods:{
    openFullscreen() {
      this.fullscreen=true
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) { /* Firefox */
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) { /* IE/Edge */
        this.elem.msRequestFullscreen();
      }
    },
    closeFullscreen() {
      this.fullscreen=false
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  },
  computed:{
    titulo(){
      return this.$store.state.titulo
    }
  },
  mounted(){
  }
}
</script>

<style>
header {
  grid-area: Cabecalho;
  display: flex !important;
  background-color: #00695c;
  align-items: center;
  justify-content: space-between;
  color: #69f0ae;
  font-size: 3vw !important;
}
header>span>i{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 100;
}
header>span{
  margin-right: 15px;
}
header>h1 {
  margin-left: 10px;
  font-size: calc(10px + 0.6rem) !important;
}
</style>