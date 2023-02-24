<template>
  <b-container fluid class="menu">
    <b-row>
      <b-col>
        <div class="tabs" :pressed="true" :size="buttonsize" variant="success">
          <router-link to="/cadastro">
            <i class="fa fa-users"></i>
            Jogadores
          </router-link>
        </div>

      </b-col>
      <b-col>
        <div class="tabs" :pressed="true" :size="buttonsize" variant="success">
          <router-link to="/jogo">
            <i class="fa fa-gamepad"></i>
            Novo Jogo
          </router-link>
        </div>

      </b-col>
      <b-col>
        <div class="tabs" :pressed="true" :size="buttonsize" variant="success">
          <router-link to="/historico">
            <i class="fa fa-history"></i>
            Histórico
          </router-link>
        </div>

      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Menu',
  computed: {
    buttonsize() {
      return this.$mq
    }
  },

}
</script>

<style>
.col{
  padding:0 !important;
}

.tabs {
  background-color: #00695c !important;
  padding: 0px !important;
  /* color: #eeff41 !important; */
  border:1px solid transparent;
  font-size: 4vw;
  border-radius: 0px !important;
  /* -webkit-box-shadow: inset 0px 0px 3px 1px rgba(92, 184, 92, 1);
  -moz-box-shadow: inset 0px 0px 3px 1px rgba(92, 184, 92, 1);
  box-shadow: inset 0px 0px 3px 1px rgba(92, 184, 92, 1); */
  width: 99.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500 !important;
  margin-bottom: 3px;
  height: 40px;
}
.tabs>a{
  color:#fff;
}
</style>
