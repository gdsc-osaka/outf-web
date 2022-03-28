<template>
  <div class="mx-5 py-2 px-5" :style="'background-color:' + bgcolor">
    <v-img
      :src="imgSrc"
      class="rounded-circle img"
      :height="imgSize"
      :width="imgSize"
    />
    <p class="my-5" style="display: inline-block; text-align: center">
      {{ txtBody }}
    </p>
    <p style="text-align: center">
      <strong>{{ name }}</strong>
      <br />
      <small style="color: #aeaeae">{{ job }}</small>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default:
        'https://res.cloudinary.com/uisual/image/upload/assets/icons/avatar.svg',
    },
    txtBody: {
      type: String,
      default:
        '（自己紹介本文）- 吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。',
    },
    name: {
      type: String,
      default: '田中　太郎',
    },
    job: {
      type: String,
      default: '（役職等）',
    },
    bgcolor: {
      type: String,
      default: '#ffffff',
    },
    imgSize: {
      type: String,
      default: '5rem',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/app';
.img {
  display: block;
  margin: auto;
}
</style>
