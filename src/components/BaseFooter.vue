<template>
  <div class="base__footer">
    <div class="footer__contacts">
      <a href="tel:8-914-166-19-94" class="contacts__link">
        <font-awesome-icon :icon="['fas', 'phone']" class="contacts-icon" />
        <span>8-914-166-19-94</span>
      </a>
      <a href="mailto:avtovoz323@mail.ru" class="contacts__link">
        <font-awesome-icon :icon="['fas', 'envelope']" class="contacts-icon" />
        <span>Avtovoz323@mail.ru</span>
      </a>
    </div>
    <div class="footer__contacts" style="justify-content: flex-end;">
      <p href="tel:8-914-166-19-94" class="contacts__link" style="align-items: flex-start;">
        <span class="contacts-icon" style="font-size: 15px;">©</span>
        Все грузоперевозки проходят<br> обязательное страхование
      </p>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.base__footer {
  display: flex;
  height: 150px;
  background: #262323;
  justify-content: space-between;
  align-items: center;
  padding: 0 370px;

  @media (max-width: 1800px) {
    padding: 0 200px;
  }

  @media (max-width: 1100px) {
    padding: 0 50px;
  }

  .footer__contacts {
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: 100px;
    justify-content: center;

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
      }
    }
  }
}
</style>