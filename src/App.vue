<template>
  <div id="app">
    <Cabecalho titulo="Jogo de Cartas Incrível..." />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Cabecalho from './components/templates/Cabecalho'
import Content from './components/templates/Content'
import Footer from './components/templates/Footer'
export default {
  components:{Cabecalho, Content, Footer}
}
</script>

<style>
* {
  margin: 0;

}
body{
  background-color: #004d40 !important;
}
#app{
  display: grid;
  background-color: #004d40;
  grid-template-rows: 55px 1fr 45px;
  grid-template-columns: 1fr;
  grid-template-areas: 
    'Cabecalho'
    'Content'
    'Footer';
    height: 100vh;
    width: 100vw;

}
</style>
