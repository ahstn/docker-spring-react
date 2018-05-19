<template>
  <v-app id="dsr">
    <v-card flat id="app" style="background-color: none">
      <v-toolbar dark color="primary" flat extended />
      <v-layout row pb-2>
        <v-flex xs8 offset-xs2>
          <router-view/>
        </v-flex>
      </v-layout>
    </v-card>
  </v-app>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fafafa;
}

.card--flex-toolbar {
  margin-top: -64px;
}
.toolbar__title {
  font-size: 16px!important;
}
</style>
