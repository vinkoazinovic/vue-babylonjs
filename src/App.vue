<template>
  <div id="app">
    <div class="header">
      <img src="/assets/LogoVB.png" alt="">
    </div>
    <SolarSystem />
  </div>
</template>

<script>
import SolarSystem from './components/SolarSystem.vue';

export default {
  name: 'App',
  components: {
    SolarSystem,
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    justify-content: center;
    background-color: #000;
    height: 80px;
    padding: 5px 0;
  }
}
</style>
