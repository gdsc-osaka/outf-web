<template>
  <v-app>
    <TheHeader />
    <v-sheet elevation="0" height="64" width="100%"></v-sheet>
    <v-main>
      <Nuxt />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheHeader from '@/sections/app/TheHeader'
import TheFooter from '@/sections/app/TheFooter'

export default {
  name: 'DefaultLayout',
  components: { TheHeader, TheFooter },
}
</script>
