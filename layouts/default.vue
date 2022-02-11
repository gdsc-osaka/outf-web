<template>
  <v-app>
    <HeaderBasic />
    <v-main>
      <Nuxt />
    </v-main>
    <FooterBasic />
  </v-app>
</template>

<script>
import HeaderBasic from '@/components/organisms/HeaderBasic/HeaderBasic.vue'
import FooterBasic from '@/components/organisms/FooterBasic/FooterBasic.vue'

export default {
  name: 'DefaultLayout',
  components: { HeaderBasic, FooterBasic },
}
</script>
