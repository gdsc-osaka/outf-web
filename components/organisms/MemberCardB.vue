<template>
  <div class="card my-3" @mouseover="imageChange()" @mouseleave="imageReturn()">
    <div class="card2">
      <div :class="class1">
        <v-layout justify-center>
          <v-avatar size="100">
            <v-img :src="imgSrc" />
          </v-avatar>
        </v-layout>
        <small style="text-align: center">{{ txt }}</small>
        <h3 align="center">{{ name }}</h3>
      </div>

      <div :class="class2">
        <v-layout justify-center>
          <v-avatar size="100" class="img-hover">
            <v-img :src="imgSrc2" />
          </v-avatar>
        </v-layout>
        <small class="pt-3" style="font-weight: bold; text-align: center">{{ name }}</small>
        <small style="text-align: center"><br />{{ txt2 }}</small>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  props: {
    imgSrc: {
      type: String,
      default: require('@/assets/gonuxt/img/sample01.jpg'),
    },
    imgSrc2: {
      type: String,
      default: require('@/assets/gonuxt/img/sample02.jpg'),
    },
    name: {
      type: String,
      default: 'name',
    },
    txt: {
      type: String,
      default: 'txt',
    },
    txt2: {
      type: String,
      default: 'txt2',
    },
  },
  data() {
    return {
      class1: 'open',
      class2: 'hidden',
    }
  },
  methods: {
    imageChange() {
      setTimeout(() => {
        this.class1 = 'hidden'
        this.class2 = 'open-reverse'
      }, 250)
    },
    imageReturn() {
      setTimeout(() => {
        this.class1 = 'open'
        this.class2 = 'hidden'
      }, 250)
    },
  },
}
</script>

<style scoped>
.hidden {
  display: none;
  text-align: center;
}

.open {
  text-align: center;
}

.open-reverse {
  transform: scale(-1, 1);
  text-align: center;
}

.card {
  height: 167px;
}

.card2 {
  transition: 1s; /* 2秒かけて動く */
  height: 167px;
}

.card:hover .card2 {
  transform: rotateY(180deg); /* マウスオーバー時に回転 */
}

.img-hover {
  box-shadow: 2px 2px 10px 0 black;
}
</style>
