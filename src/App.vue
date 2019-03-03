<template>
  <div id="app">
    <NavbarComponent v-if="['home', 'about'].includes($route.name)"/>
    <NavbarGolfComponent v-if="['golf'].includes($route.name)"/>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavbarComponent from './components/NavbarComponent'
  import NavbarGolfComponent from './components/NavbarGolfComponent'
  export default {
    name: 'app',
    components: {
      NavbarComponent,
      NavbarGolfComponent
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
