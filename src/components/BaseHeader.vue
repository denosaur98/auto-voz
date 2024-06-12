<template>
  <div class="base__header">
    <header class="header__contacts" @click="closeDropdown">
      <div class="contacts__block">
        <a href="tel:8-914-166-19-94" class="contacts__link">
          <font-awesome-icon :icon="['fas', 'phone']" class="contacts-icon" />
          <span>8-914-166-19-94</span>
        </a>
        <a href="mailto:avtovoz323@mail.ru" class="contacts__link">
          <font-awesome-icon :icon="['fas', 'envelope']" class="contacts-icon" />
          <span>Avtovoz323@mail.ru</span>
        </a>
      </div>
      <div class="contacts__block">
        <a href="https://vk.com/" target="_blank" class="contacts__link">
          <font-awesome-icon :icon="['fab', 'vk']" class="social-icon" />
        </a>
        <a href="https://ok.ru/" target="_blank" class="contacts__link">
          <font-awesome-icon :icon="['fab', 'odnoklassniki']" class="social-icon" />
        </a>
        <a href="https://wa.me/79141661994" target="_blank" class="contacts__link">
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="social-icon" />
        </a>
      </div>
    </header>
    <header class="header__nav">
      <a href="/" class="nav__logo">
        <font-awesome-icon :icon="['fas', 'car']" class="logo-icon" />
        Автовоз 323
      </a>
      <div class="nav__links">
        <a href="/" class="link">Главная</a>
        <a href="#directions" class="link">Направления</a>
        <a href="#contacts" class="link">Контакты</a>
        <a v-if="props.contentBlocks" href="#advantages" class="link">Перимущества</a>
        <a v-if="props.contentBlocks" href="#info" class="link">Факты о нас</a>
        <a v-if="props.contentBlocks" href="#stage" class="link">Перегон</a>
      </div>
      <div class="burger__wrapper">
        <button class="burger__btn" @click="toggleDropdown">
          <font-awesome-icon :icon="['fas', 'bars']" class="burger-icon" />
        </button>
        <div class="burger__dropdown" v-if="store.state.isDropdownOpen">
          <a href="/" class="burger__link" @click="toggleDropdown">Главная</a>
          <a href="#directions" class="burger__link" @click="toggleDropdown">Направления</a>
          <a href="#contacts" class="burger__link" @click="toggleDropdown">Контакты</a>
          <a v-if="props.contentBlocks" href="#advantages" class="burger__link" @click="toggleDropdown">Перимущества</a>
          <a v-if="props.contentBlocks" href="#info" class="burger__link" @click="toggleDropdown">Факты о нас</a>
          <a v-if="props.contentBlocks" href="#stage" class="burger__link" @click="toggleDropdown">Перегон</a>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import store from '/src/store.js'

const props = defineProps({
  contentBlocks: {
    type: Boolean,
    required: true
  }
})

function toggleDropdown() {
  store.commit('toggleDropdown')
}
function closeDropdown() {
  if (store.state.isDropdownOpen) {
    store.commit('closeDropdown')
  }
}
</script>

<style lang="scss" scoped>
.base__header {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  z-index: 999;

  .header__contacts {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    background: #262323;
    padding: 0 370px;

    @media (max-width: 1800px) {
      padding: 0 200px;
    }

    @media (max-width: 1100px) {
      padding: 0 50px;
    }

    .contacts__block {
      display: flex;
      align-items: center;
      gap: 20px;

      @media (max-width: 520px) {

        &:first-child {
          flex-direction: column;
          gap: 5px;
          align-items: flex-start;
        }
      }

      .contacts__link {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #8a8a8a;
        font-size: 13px;
        gap: 5px;
        
        span {
          position: relative;
          overflow: hidden;

          &::before, &::after {
            content: '';
            position: absolute;
            bottom: 0;
            width: 0;
            height: 1px;
            background-color: #e0304e;
            transition: width 0.3s ease-in-out;
          }

          &::before {
            left: 50%;
          }

          &::after {
            right: 50%;
          }

          @media (hover: hover) {
            &:hover {
              &::before, &::after {
                width: 50%;
              }
            }
          }
        }

        .contacts-icon {
          color: #e0304e;
        }

        .social-icon {
          color: #fff;
          font-size: 20px;

          @media (hover: hover) {
            &:hover {
              opacity: 0.5;
              transition: .3s;
            }
          }
        }
      }
    }
  }

  .header__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    background: #fff;
    padding: 0 370px;

    @media (max-width: 1800px) {
      padding: 0 200px;
    }

    @media (max-width: 1100px) {
      padding: 0 50px;
    }
    
    .nav__logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: #262323;
      font-weight: 900;
      font-size: 30px;
      white-space: nowrap;

      @media (max-width: 950px) {
        margin-right: 50px;
      }

      @media (max-width: 520px) {
        font-size: 20px;
      }

      .logo-icon {
        color: #8a8a8a;
        font-size: 40px;
      }
    }

    .nav__links {
      display: flex;
      align-items: center;
      gap: 40px;

      @media (max-width: 1320px) {
        gap: 20px;
      }

      @media (max-width: 950px) {
        flex-wrap: wrap;
      }

      @media (max-width: 630px) {
        display: none;
      }

      .link {
        color: #63666a;
        text-decoration: none;
        font-weight: 500;
        position: relative;
        overflow: hidden;

        &::before, &::after {
          content: '';
          position: absolute;
          bottom: 0;
          width: 0;
          height: 2px;
          background-color: #e0304e;
          transition: width 0.3s ease-in-out;
        }

        &::before {
          left: 50%;
        }

        &::after {
          right: 50%;
        }

        @media (hover: hover) {
          &:hover {
            &::before, &::after {
              width: 50%;
            }
          }
        }
      }

      .active {
        color: #e0304e;
        font-weight: 500;
        border-bottom: 1px solid #e0304e;
      }
    }

    .burger__wrapper {
      display: none;

      @media (max-width: 630px) {
        display: flex;
        flex-direction: column;

        .burger__btn {
          background: none;
          border: none;
          width: 30px;
          height: 30px;

          .burger-icon {
            width: 100%;
            height: 100%;
          }
        }

        .burger__dropdown {
          display: flex;
          flex-direction: column;
          position: absolute;
          z-index: 999;
          right: 50px;
          top: 120px;
          background: #fff;
          border: 1px solid #63666a;
          padding: 10px;
          border-radius: 10px;
          gap: 10px;

          .burger__link {
            text-decoration: none;
            color: #63666a;
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>