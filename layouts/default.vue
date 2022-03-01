<template>
  <v-app>
    <GdscHeader />
    <v-sheet elevation="0" height="64" width="100%"></v-sheet>
    <v-main>
      <Nuxt />
    </v-main>
    <GdscFooter />
  </v-app>
</template>

<script>
import GdscHeader from '@/sections/app/GdscHeader'
import GdscFooter from '@/sections/app/GdscFooter'

export default {
  name: 'DefaultLayout',
  components: { GdscHeader, GdscFooter },
}
</script>
