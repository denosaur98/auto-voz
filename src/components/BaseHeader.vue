<template>
  <div class="base__header">
    <header class="header__contacts">
      <div class="contacts__block">
        <a href="tel:8-914-166-19-94" class="contacts__link">
          <font-awesome-icon :icon="['fas', 'phone']" class="contacts-icon" />
          8-914-166-19-94
        </a>
        <a href="mailto:avtovoz323@mail.ru" class="contacts__link">
          <font-awesome-icon :icon="['fas', 'envelope']" class="contacts-icon" />
          Avtovoz323@mail.ru
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
      </div>
    </header>
  </div>
</template>

<script setup>

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

    .contacts__block {
      display: flex;
      align-items: center;
      gap: 20px;

      .contacts__link {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #8a8a8a;
        font-size: 13px;
        gap: 5px;

        .contacts-icon {
          color: #e0304e;
        }

        .social-icon {
          color: #fff;
          font-size: 20px;
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
    
    .nav__logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: #262323;
      font-weight: 900;
      font-size: 30px;

      .logo-icon {
        color: #8a8a8a;
        font-size: 40px;
      }
    }

    .nav__links {
      display: flex;
      align-items: center;
      gap: 40px;

      .link {
        color: #63666a;
        text-decoration: none;
        font-weight: 500;
      }

      .active {
        color: #e0304e;
        font-weight: 500;
        border-bottom: 1px solid #e0304e;
      }
    }
  }
}
</style>