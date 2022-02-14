<template>
  <v-app>
    <HeaderBasic />
    <v-sheet elevation="0" height="64" width="100%"></v-sheet>
    <v-main>
      <Nuxt />
    </v-main>
    <FooterBasic />
  </v-app>
</template>

<script>
import HeaderBasic from '@/components/organisms/HeaderBasic'
import FooterBasic from '@/components/organisms/FooterBasic'

export default {
  name: 'DefaultLayout',
  components: { HeaderBasic, FooterBasic },
}
</script>
