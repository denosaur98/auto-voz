<template>
  <div class="app" id="top">
    <BaseHeader :content-blocks="contentBlocks" />
    <BaseSwiper @click="closeDropdown" />
    <BaseContent @update-content-blocks="updateContentBlocks" @click="closeDropdown" />
    <BaseFooter @click="closeDropdown" />
    <a href="#top" class="top__link" @click="closeDropdown">
      <font-awesome-icon :icon="['fas', 'arrow-up']" />
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BaseHeader from './components/BaseHeader';
import BaseSwiper from './components/BaseSwiper'
import BaseContent from './components/BaseContent'
import BaseFooter from './components/BaseFooter'
import store from '/src/store.js'

const contentBlocks = ref(false)
function updateContentBlocks(value) {
  contentBlocks.value = value
}
function closeDropdown() {
  if (store.state.isDropdownOpen) {
    store.commit('closeDropdown')
  }
}
</script>

<style lang="scss">
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
body {
  --scrollbar-background: #cecece;
  --scrollbar-thumb: #5a5a5a;
}
body::-webkit-scrollbar {
  width: 8px;
  background-color: var(--scrollbar-background);
}
body::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb);
  border-radius: 4px;
}
body::-webkit-scrollbar-thumb:hover {
  background-color: var(--scrollbar-thumb);
}
.top__link {
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #5a5a5a;
  color: #5a5a5a;
  border-radius: 50%;
  z-index: 999;

  @media (max-width: 660px) {
    right: 20px;
    bottom: 20px;
    width: 40px;
    height: 40px;
  }

  &:hover {
    color: #e0304e;
    transition: .3s;
    border: 1px solid #e0304e;
  }
}
</style>