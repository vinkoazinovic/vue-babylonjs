<template>
  <div class="solar-system-wrapper">
    <canvas ref="solarSystem" class="solar-system"></canvas>
  </div>
</template>

<script>
import createScene from '../scenes/SolarSystem';

export default {
  name: 'SolarSystem',
  mounted() {
    const solarSystem = this.$refs.solarSystem;
    if (solarSystem) {
      createScene(solarSystem);
    }
  },
};
</script>

<style scoped lang="scss">
.solar-system-wrapper {
  position: relative;
  height: calc(100vh - 90px);
  .solar-system {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: none;
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0); /* mobile webkit */
  }
}
</style>
