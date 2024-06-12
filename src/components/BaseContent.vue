<template>
  <div class="base__content">
    <div class="content__directions" id="directions">
      <h1 class="content__title">Направления перевозки авто:</h1>
      <div class="content__links">
        <a href="#advantages" class="links__link" @click="openContentYakutsk">Владивосток-Якутск-Владивосток</a>
        <a href="#advantages" class="links__link" @click="openContentIrkutsk">Владивосток-Иркутск-Владивосток</a>
        <a href="#advantages" class="links__link" @click="openContentNovosibirsk">Владивосток-Новосибирск-Владивосток</a>
      </div>
    </div>
    <div class="content__links-block" v-if="contentBlocks">
      <div class="content__advantages" id="advantages">
        <h1>Наши перимущества:</h1>
        <div class="advantages__wrapper">
          <div class="advantages__items">
            <div class="items__element">
              <font-awesome-icon :icon="['fas', 'handshake']" class="element-icon"/>
              <h1 class="element__title">Без переплат</h1>
              <p class="element__description">Мы работаем без посредников, и для наших клиентов мы готовы предоставить самую комфортную стоимость на перевозку автовозом</p>
            </div>
          </div>
          <div class="advantages__items">
            <div class="items__element">
              <font-awesome-icon :icon="['fas', 'clock']" class="element-icon"/>
              <h1 class="element__title">Регулярные перевозки авто</h1>
              <p class="element__description">Осуществляем регулярные рейсы по маршруту Владивосток - {{ city }} - Владивосток и обратно</p>
            </div>
          </div>
          <div class="advantages__items">
            <div class="items__element">
              <font-awesome-icon :icon="['fas', 'circle-check']" class="element-icon"/>
              <h1 class="element__title">Страховка перевозки авто</h1>
              <p class="element__description">Все грузоперевозки проходят обязательное страхование</p>
            </div>
          </div>
        </div>
      </div>
      <div class="content__info-description" id="info">
        <video id="myVideo" src="../assets/road.mp4" loop="true" autoplay="true" muted="true" style="width: 100%; height: auto; overflow: hidden;">
          <source type="video/mp4" src="../assets/road.mp4">
        </video>
        <div class="description__block">
          <h1 class="description__title">Факты о нас</h1>
          <div class="description__elements">
            <p class="elements__info">2000 <br> <span>машин перевезено</span></p>
            <p class="elements__info">3 <br> <span>года работы</span></p>
          </div>
        </div>
        <div class="info-description__overlay"></div>
      </div>
      <div class="content__text">
        <h1 class="text__title">перегнать или автовозом ?</h1>
        <p class="text__description">
          Задумавшись о транспортировке автомобиля в другой город, владелец задается вопросом как его осуществить. Из доступных способов выбор падает на перегон, который на первый взгляд кажется дешевле и доступнее. На деле все наоборот.
          При планировании перегона часто забывают о временных затратах. Финансовые вложения обернутся расходами на бензин, покупкой еды в пути и арендой ночлега при длительном перегоне. Велик риск аварий, поломок, наматывается дополнительный пробег. Если водитель наемный, вряд ли его гарантии чем-то подкреплены. В итоге автомобиль, новый или бывший в употреблении, приезжает в Ваш город в лучшем случае потеряв товарный вид.
        </p>
        <h1 class="text__title-min">Как же перегнать из Владивостока в {{ city }} ?</h1>
          <div class="text__pros-blocks">
          <div class="pros__block">
            <h1 class="pros__title">Самостоятельный перегон авто:</h1>
            <div class="pros__item">
              <h1>
                <font-awesome-icon :icon="['fas', 'thumbs-down']" class="pros-icon-dis"/>
                Риски
              </h1>
              <p>перегоняя авто самостоятельно, Вы берёте на себя все риски длительного перегона авто по загородной трассе</p>
            </div>
            <div class="pros__item">
              <h1>
                <font-awesome-icon :icon="['fas', 'thumbs-down']" class="pros-icon-dis"/>
                Ресурс авто
              </h1>
              <p>кроме очевидных при перегонке авто затрат на бензин, многие автовладельцы не учитывают намотку автопробега</p>
            </div>
            <div class="pros__item">
              <h1>
                <font-awesome-icon :icon="['fas', 'thumbs-down']" class="pros-icon-dis"/>
                Наемный водитель
              </h1>
              <p>большинство наёмных водителей - это просто знакомые, готовые перегнать авто, но не берущие на себя все риски перегона</p>
            </div>
          </div>
          <div class="pros__block">
            <h1 class="pros__title">Перегон авто на автовозе:</h1>
            <div class="pros__item">
              <h1>
                <font-awesome-icon :icon="['fas', 'thumbs-up']" class="pros-icon-like"/>
                Страховка
              </h1>
              <p>мы страхуем принятый к перевозке автомобиль, выгодоприобретателем по которому, является сам клиент</p>
            </div>
            <div class="pros__item">
              <h1>
                <font-awesome-icon :icon="['fas', 'thumbs-up']" class="pros-icon-like"/>
                Регулярный рейс
              </h1>
              <p>за 3 года перевозок по маршруту Владивосток - {{ city }} мы все доставки осуществили вовремя</p>
            </div>
            <div class="pros__item">
              <h1>
                <font-awesome-icon :icon="['fas', 'thumbs-up']" class="pros-icon-like"/>
                Официальный договор
              </h1>
              <p>предоставляем, подготавливаем и оформляем необходимый пакет документов для перевозки авто</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content__contacts">
      <div class="contacts__wrapper">
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab4217b3cfccdb5673ff1f12ea759bdb524689c0a275a2f017a8902022db3e997&amp;source=constructor" width="935" height="722" frameborder="0"></iframe>
      </div>
      <div class="contacts__wrapper" id="contacts">
        <h1 class="content__title">Контакты</h1>
        <div class="contacts__info">
          <a href="tel:8-914-166-19-94" class="contacts__link">
            <font-awesome-icon :icon="['fas', 'phone']" class="contacts-icon" />
            8-914-166-19-94
          </a>
          <a href="https://wa.me/79141661994" target="_blank" class="contacts__link">
            <font-awesome-icon :icon="['fab', 'whatsapp']" class="contacts-icon" />
            Написать в Whatsapp
          </a>
          <div class="contacts__requisites">
            <font-awesome-icon :icon="['far', 'clipboard']" class="requisites-icon" />
            <div class="requisites__info">
              <h1 class="contacts__link">Реквизиты:</h1>
              <h1 class="info__items">Полное наименование юридического лица: <span>Общество с ограниченной ответственностью «Автовоз 323»</span></h1>
              <h1 class="info__items">Адрес организации: <span>680042, Хабаровский край, г. Хабаровск, ул. Воронежская, д. 129, помещ. 20</span></h1>
              <h1 class="info__items">e-mail организации: <span>Avtovoz323@mail.ru</span></h1>
              <h1 class="info__items">ОГРН: <span>1222700006385</span></h1>
              <h1 class="info__items">ИНН: <span>2724249010</span></h1>
              <h1 class="info__items">КПП: <span>272401001</span></h1>
              <h1 class="info__items">Руководитель организации: <span>Директор Кузнецов Федор Викторович</span></h1>
              <h1 class="info__items">Р/сч  №: <span>40702 810 5 7000 0007548</span></h1>
              <h1 class="info__items">Кор/сч: <span>№ 30101 810 6 0000 0000608</span></h1>
              <h1 class="info__items">БИК БАНКА: <span>040813608</span></h1>
              <h1 class="info__items">НАИМЕНОВАНИЕ БАНКА: <span>Дальневосточный Банк ПАО Сбербанк</span></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content__comments">
      <iframe style="width:760px;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box" src="https://yandex.ru/maps-reviews-widget/11860928478?comments"></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const contentBlocks = ref(false)
const city = ref('')
function openContentYakutsk() {
  contentBlocks.value = true
  city.value = 'Якутск'
}
function openContentIrkutsk() {
  contentBlocks.value = true
  city.value = 'Иркутск'
}
function openContentNovosibirsk() {
  contentBlocks.value = true
  city.value = 'Новосибирск'
}
</script>

<style lang="scss" scoped>
.base__content {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  .content__title {
    font-size: 40px;
    font-weight: 700;
  }

  .content__directions {
    display: flex;
    flex-direction: column;
    height: 500px;
    align-items: center;
    justify-content: center;
    background: #f3f1ed;
    width: 100%;

    .content__links {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      column-gap: 100px;
      margin-top: 30px;
      max-width: 1200px;
      justify-content: center;
      justify-items: center;

      .links__link {
        cursor: pointer;
        background: none;
        border: none;
        text-decoration: none;
        font-size: 30px;
        color: #8a8a8a;
      }
    }
  }

  .content__links-block {
    display: flex;
    flex-direction: column;
    width: 100%;

    .content__advantages {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 300px;
      width: 100%;
      height: 700px;
      gap: 30px;

      .advantages__title {
        font-size: 30px;
      }

      .advantages__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        .advantages__items {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;

          .items__element {
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 10px;
            width: 400px;
            height: 500px;
            padding: 100px 20px;
            gap: 30px;

            .element-icon {
              font-size: 170px;
              width: 170px;
              height: 170px;
              color: #5a5a5a;
            }

            .element__title {
              font-size: 20px;
              color: #5a5a5a;
            }

            .element__description {
              font-size: 15px;
              color: #5a5a5a;
              text-align: center;
            }
          }
        }
      }
    }

    .content__info-description {
      position: relative;

      .info-description__overlay {
        position: absolute;
        z-index: 996;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        top: 0;
      }

      .description__block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        z-index: 998;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        gap: 100px;

        .description__title {
          font-size: 50px;
          color: #fff;
        }

        .description__elements {
          display: flex;
          justify-content: center;
          gap: 200px;

          .elements__info {
            text-align: center;
            font-size: 80px;
            color: #fff;
            font-weight: 900;
            line-height: 40px;

            span {
              font-size: 30px;
              font-weight: 500;
            }
          }
        }
      }
    }

    .content__text {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      min-height: 700px;
      padding: 100px 300px;
      gap: 30px;

      .text__title {
        font-size: 40px;
        text-transform: uppercase;
      }

      .text__description {
        font-size: 20px;
        color: #8a8a8a;
        text-align: center;
        width: 95%;
        margin-bottom: 40px;
      }

      .text__title-min {
        font-size: 30px;
        text-transform: uppercase;
      }

      .text__pros-blocks {
        display: flex;
        align-items: center;
        gap: 100px;

        .pros__block {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 500px;

          .pros__title {
            font-size: 30px;
            font-weight: 900;
          }

          .pros__item {
            display: flex;
            flex-direction: column;
            gap: 10px;

            h1 {
              display: flex;
              gap: 10px;
              font-size: 30px;
              
              .pros-icon-dis {
                color: #e0304e;
                margin-top: 5px;
              }

              .pros-icon-like {
                color: green;
                
              }
            }

            p {
              color: #8a8a8a;
            }
          }
        }
      }
    }
  }

  .content__contacts {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    gap: 50px;

    .contacts__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      height: 722px;

      &:last-child {
        padding: 50px 0 50px;
      }

      .contacts__info {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
        gap: 40px;
        margin-top: 40px;

        .contacts__link {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #262323;
          font-size: 20px;
          gap: 40px;
          font-weight: 500;

          .contacts-icon {
            color: #e0304e;
            font-size: 50px;
            width: 50px;
            height: auto
          }
        }

        .contacts__requisites {
          display: flex;
          align-items: flex-start;
          gap: 40px;

          .requisites-icon {
            color: #e0304e;
            font-size: 50px;
            width: 50px;
            height: auto
          }

          .requisites__info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10px;
            margin-top: 25px;

            .info__items {
              font-size: 15px;
              font-weight: 700;
              color: #8a8a8a;

              span {
                font-weight: 500;
              }
            }
          }
        }
      }
    }
  }

  .content__comments {
    display: flex;
    width: 100%;
    height: 700px;
    justify-content: center;
    background: #f3f1ed;
    padding: 50px;
  }
}
</style>