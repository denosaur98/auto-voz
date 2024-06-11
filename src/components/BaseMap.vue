<template>
  <div class="map-container">
    <yandex-map :settings="settings" :coords="[55.751574, 37.573856]" zoom="10">
      <ymap-marker :coords="[55.751574, 37.573856]"></ymap-marker>
    </yandex-map>
  </div>
</template>

<script setup>
import { YandexMap, YmapMarker } from 'vue-yandex-maps';

</script>

<style scoped>
.map-container {
  width: 100%;
  height: 400px;
}
</style>
