<template>
  <v-container fluid>
    <ImgTeaser :img-src="teaserImgSrc" />
    <TheASection />
  </v-container>
</template>

<script>
import ImgTeaser from '@/components/templates/ImgTeaser/ImgTeaser.vue'
import TheASection from '@/pages/sections/TheASection/TheASection.vue'

export default {
  name: 'IndexPage',
  components: { ImgTeaser, TheASection },
  data: () => ({
    teaserImgSrc: require('@/assets/image/teaser.jpeg'),
  }),
}
</script>
