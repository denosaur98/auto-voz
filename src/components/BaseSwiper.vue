<template>
  <div>
    <swiper 
      :slides-per-view="1" 
      :space-between="0" 
      @swiper="onSwiper" 
      @slideChange="onSlideChange" 
      :loop="true"
      :grab-cursor="true" 
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :modules="[Autoplay]"
      class="swiper">
      <swiper-slide class="swiper__item" v-for="photo in photos" :key="photo">
        <img :src="photo">
      </swiper-slide>
      <div class="swiper__overlay"></div>
      <h1 class="swiper__title">Доставка автомобилей <br> <span>автовозом</span></h1>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import photo1 from '/src/assets/images/1.jpg';
import photo2 from '/src/assets/images/2.jpg';
import photo3 from '/src/assets/images/3.jpg';
import photo4 from '/src/assets/images/4.jpg';

const photos = ref([
  photo1, photo2, photo3, photo4
]);
</script>

<style lang="scss" scoped>
.swiper {
  position: relative;
  width: 100%;
  height: 750px;

  @media (max-width: 1300px) {
    height: 500px;
  }

  .swiper__item {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .swiper__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 997;
    background: rgba(0, 0, 0, 0.8);
    top: 0;
  }
  .swiper__title {
    font-size: 50px;
    color: #fff;
    font-weight: 400;
    z-index: 998;
    position: absolute;
    left: 35%;
    transform: translate(-50%, -50%);
    top: 60%;
    line-height: 100px;

    @media (max-width: 1800px) {
      left: 50%;
    }

    @media (max-width: 1300px) {
      font-size: 40px;
      line-height: 70px;
    }

    @media (max-width: 855px) {
      font-size: 30px;
    }

    @media (max-width: 400px) {
      font-size: 25px;
    }

    span {
      font-size: 90px;
      font-weight: 900;
      text-transform: uppercase;

      @media (max-width: 1300px) {
        font-size: 60px;
      }

      @media (max-width: 855px) {
        font-size: 60px;
      }

      @media (max-width: 400px) {
        font-size: 50px;
        line-height: 50px;
      }
    }
  }
}
</style>