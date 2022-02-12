<template>
  <v-container fluid>
    <KeyVisualSec />
    <AboutGonuxtSec />
  </v-container>
</template>

<script>
import KeyVisualSec from '@/pages/sections/KeyVisualSec/KeyVisualSec.vue'
import AboutGonuxtSec from '@/pages/sections/AboutGonuxtSec/AboutGonuxtSec.vue'

export default {
  name: 'IndexPage',
  components: { KeyVisualSec, AboutGonuxtSec },
  data: () => ({
    teaserImgSrc: require('@/assets/image/teaser.jpeg'),
  }),
}
</script>
