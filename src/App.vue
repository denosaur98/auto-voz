<template>
  <div class="app">
    <BaseHeader/>
    <BaseSwiper/>
    <BaseDirections/>
    <BaseMap/>
  </div>
</template>

<script setup>
import BaseHeader from './components/BaseHeader';
import BaseSwiper from './components/BaseSwiper'
import BaseDirections from './components/BaseDirections'
import BaseMap from './components/BaseMap'

</script>

<style>
@font-face {
  font-family: Proxima;
  src: url('./assets/proxima.ttf');
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Proxima;
}
</style>