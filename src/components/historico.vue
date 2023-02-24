<template>
<div class="historico">
  <h1>Módulo em desenvolvimento</h1>
</div>
</template>

<script>
export default {
  name:"Historico",
  methods:{
    alterarTitulo() {
      return this.$store.state.titulo="Histórico e Ranking"
    }  
  },
  mounted() {
    this.alterarTitulo()
  },
}
</script>

<style>
.historico{
  color:#69f0ae;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
}
</style>
