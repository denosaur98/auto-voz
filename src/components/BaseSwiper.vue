<template>
  <div>
    <swiper :slides-per-view="1" :space-between="0" @swiper="onSwiper" @slideChange="onSlideChange" :loop="true"
      :grab-cursor="true" :autoplay="{ delay: 500, disableOnInteraction: false }">
      <swiper-slide class="item" v-for="photo in photos" :key="photo">
        <img :src="photo">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import photo1 from '/src/assets/images/1.jpg'
import photo2 from '/src/assets/images/2.jpg'
import photo3 from '/src/assets/images/3.jpg'
import photo4 from '/src/assets/images/4.jpg'


const photos = ref([
  photo1, photo2, photo3, photo4
])
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  width: 100%;
  height: auto;
  overflow: hidden;

}
</style>