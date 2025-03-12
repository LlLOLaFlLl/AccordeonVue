<script>
import { ref } from 'vue';

export default {
  setup() {
    const items = ref([
      {
        id: 1,
        image: 'https://i.pinimg.com/736x/51/39/f5/5139f54f7726c849fd80b99db6fd40e6.jpg',
        caption: 'MZLFF',
        description: 'Илья Иванович Коряков, более известный как Илья Мазеллов или mzlff — российский блогер, стример, музыкант, участник рэп-баттлов. Начал вести прямые трансляции на Twitch в 2018 году и почти сразу обрёл широкую популярность. В 2020 году его пригласили в сообщество стримеров Twitch — «89SQUAD».',
        active: false
      },
      {
        id: 2,
        image: 'https://i.pinimg.com/originals/70/72/58/707258e5b09c454dbe47057e66f8e4ff.jpg',
        caption: 'BRATISHKINOFF',
        description: 'Братишкин (настоящее имя — Владимир Сергеевич Семенюк) — российский видеоблогер, стример и летсплейщик. Владелец YouTube-канала «Bratishkin» и Twitch-канала «bratishkinOFF». Известен тем, что ведёт трансляции своих игр и общения в прямом эфире («стримы») с помощью сервиса Twitch.',
        active: false
      },
      {
        id: 3,
        image: 'https://i.pinimg.com/736x/1b/d8/1a/1bd81aa0d913a08f80c36db643185cde.jpg',
        caption: 'DRAKEOFFC',
        description: 'drakeoffc — Денис Коломиец, российский Twitch-стример и исполнитель из Санкт-Петербурга. Карьера стримера началась с прохождения любимых игр, таких как Counter-Strike и Standoff. Наибольшую известность ему принёс Братишкин, который выпускал реакции на видео Дениса.',
        active: false
      },
      {
        id: 4,
        image: 'https://i.pinimg.com/736x/bd/a9/1a/bda91a3aed9db2283741562b0536b7d6.jpg',
        caption: 'T2X2',
        description: 'T2x2 (настоящее имя — Антон Татыржа) — российский твич-стример из Москвы. Родился 26 марта 1996 года. Известен на платформе Twitch, где у него более 542 тысяч подписчиков. Известен не только своими игровыми навыками, но и умением создавать атмосферу, которая привлекает зрителей. Активно взаимодействует с аудиторией: проводит розыгрыши, отвечает на вопросы и делится своими мыслями.',
        active: false
      },
      {
        id: 5,
        image: 'https://i.pinimg.com/736x/9a/8d/a8/9a8da8f4a55af8bf8c9575a1692bb861.jpg',
        caption: 'STINT',
        description: 'Stint — псевдоним российского стримера и блогера Максима Шабанова.  Начинал с роликов на YouTube, за счёт которых обрёл популярность. Позже Stint начал стримить на Twitch. Также стример известен как музыкант, выпускающий собственные треки. Он самостоятельно научился играть на гитаре и синтезаторе и начал постепенно развиваться в этой сфере.',
        active: false
      },
      // {
      //   id: 6,
      //   image: 'https://i.pinimg.com/736x/9a/8d/a8/9a8da8f4a55af8bf8c9575a1692bb861.jpg',
      //   caption: 'STINT',
      //   description: 'Stint — псевдоним российского стримера и блогера Максима Шабанова.  Начинал с роликов на YouTube, за счёт которых обрёл популярность. Позже Stint начал стримить на Twitch. Также стример известен как музыкант, выпускающий собственные треки. Он самостоятельно научился играть на гитаре и синтезаторе и начал постепенно развиваться в этой сфере.',
      //   active: false
      // },
      // {
      //   id: 7,
      //   image: 'https://i.pinimg.com/736x/9a/8d/a8/9a8da8f4a55af8bf8c9575a1692bb861.jpg',
      //   caption: 'STINT',
      //   description: 'Stint — псевдоним российского стримера и блогера Максима Шабанова.  Начинал с роликов на YouTube, за счёт которых обрёл популярность. Позже Stint начал стримить на Twitch. Также стример известен как музыкант, выпускающий собственные треки. Он самостоятельно научился играть на гитаре и синтезаторе и начал постепенно развиваться в этой сфере.',
      //   active: false
      // },
      // {
      //   id: 8,
      //   image: 'https://i.pinimg.com/736x/9a/8d/a8/9a8da8f4a55af8bf8c9575a1692bb861.jpg',
      //   caption: 'STINT',
      //   description: 'Stint — псевдоним российского стримера и блогера Максима Шабанова.  Начинал с роликов на YouTube, за счёт которых обрёл популярность. Позже Stint начал стримить на Twitch. Также стример известен как музыкант, выпускающий собственные треки. Он самостоятельно научился играть на гитаре и синтезаторе и начал постепенно развиваться в этой сфере.',
      //   active: false
      // },
      // {
      //   id: 9,
      //   image: 'https://i.pinimg.com/736x/9a/8d/a8/9a8da8f4a55af8bf8c9575a1692bb861.jpg',
      //   caption: 'STINT',
      //   description: 'Stint — псевдоним российского стримера и блогера Максима Шабанова.  Начинал с роликов на YouTube, за счёт которых обрёл популярность. Позже Stint начал стримить на Twitch. Также стример известен как музыкант, выпускающий собственные треки. Он самостоятельно научился играть на гитаре и синтезаторе и начал постепенно развиваться в этой сфере.',
      //   active: false
      // }
    ]);

    const toggleItem = (selectedItem) => {
      items.value.forEach(item => {
        item.active = item.id === selectedItem.id ? !item.active : false;
      });
    };

    return {
      items,
      toggleItem
    };
  }
};
</script>

<template>
  <div class="accordion">
    <div 
      v-for="item in items" 
      :key="item.id" 
      :class="['accordion__item', { active: item.active }]" 
      @click="toggleItem(item)"
    >
      <div class="accordion__content">
        <img :src="item.image" :alt="item.caption" />
        <p class="accordion__caption">{{ item.caption }}</p>
        <p class="accordion__description">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.accordion {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 80vw;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  background: #222;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  margin-top: 20px;
}

.accordion__item {
  background: #444;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: flex 0.4s ease-in-out, background 0.4s ease-in-out;
  border: 2px solid #333;
  position: relative;
  overflow: hidden;
  min-height: 500px;
  flex: 1;
}

.accordion__content {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
}

.accordion__content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: width 0.4s ease-in-out, height 0.4s ease-in-out, border-radius 0.4s ease-in-out, top 0.4s ease-in-out, left 0.4s ease-in-out;
  border-radius: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

.accordion__item.active .accordion__content img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  top: 10px;
  left: 10px;
}

.accordion__item:not(.active) .accordion__content img {
  width: 100%;
  height: 100%;
  border-radius: 0;
  top: 0;
  left: 0;
}

.accordion__caption {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.725);
  padding: 5px 10px;
  border-radius: 5px;
  transition: opacity 0.4s ease-in-out;
  z-index: 3;
}

.accordion__item.active .accordion__caption {
  opacity: 0;
}

.accordion__description {
  position: absolute;
  top: 120px;
  left: 10px;
  right: 10px;
  color: white;
  font-size: 1rem;
  font-weight: normal;
  background: rgba(0, 0, 0, 0.6);
  padding: 10px;
  border-radius: 8px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
  z-index: 1;
  /* text-align: justify; */
}

.accordion__item.active .accordion__description {
  opacity: 1;
  transform: translateY(0);
  padding-top: 10px;
}

@media (max-width: 1024px) {
  .accordion {
    grid-template-columns: repeat(2, 1fr);
  }

  .accordion__item {
    width: 100%;
    height: 120px;
  }

  .accordion__item.active {
    height: auto;
  }
}

@media (max-width: 768px) {
  .accordion__description {
    font-size: 1rem;
    top: 100px;
  }

  .accordion__caption {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .accordion__description {
    font-size: 0.9rem;
    padding: 5px;
  }

  .accordion__caption {
    font-size: 0.9rem;
    padding: 3px 7px;
  }

  .accordion__item.active .accordion__content img {
    width: 80px;
    height: 80px;
    top: 5px;
    left: 5px;
  }
}
</style>
