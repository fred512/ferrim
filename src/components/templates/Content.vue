<template>
  <div class="conteudo">
    <router-view></router-view>
  </div>
</template>

<script>
// import Inicial from "../inicial"

export default {
//    components:{Inicial}

}
</script>

<style>
  .conteudo{
    grid-area: Content;
    display: flex;
    align-items: center !important;
    justify-content: flex-start;
    /* height: 100%; */
    flex-direction: column;
    overflow: auto;
  }
</style>
