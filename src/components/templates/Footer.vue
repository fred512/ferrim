<template>
  <div class="footer" :style="{'justify-content' : pagina()?'space-between':'flex-end'}">
      <router-link to="/" v-show="pagina()">
        <i class="fa fa-home"></i>
      </router-link>
    <h1>Contato : fredborges512@gmail.com</h1>

  </div>
</template>

<script>
export default {
  name:'Footer',
  methods: {
    pagina() {
      return this.$route.name!="Inicial"
    }
  }
}
</script>

<style>
  .footer{
    grid-area: Footer;
    display: flex;
    background-color: #00695c;
    justify-content: space-between;
    align-items: flex-end;
    padding-right: 10px;
    color:#69f0ae;
    padding-bottom: 5px;
    margin-top:0px;
  }
  .footer h1{
    font-size: calc(9px + 1vw) !important;
    font-weight: 400 !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .footer a{
    margin-bottom: 5px;
  }
  .footer i{
    margin-left: 10px;
    /* margin-bottom: 5px; */
    color:#69f0ae;
    font-size: 1.6rem;
  }

</style>
