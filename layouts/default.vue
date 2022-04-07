<template>
  <v-app>
    <TheHeader />
    <v-sheet elevation="0" height="64" width="100%"></v-sheet>
    <v-main>
      <Nuxt />
    </v-main>
    <ConSec />
  </v-app>
</template>

<script>
import ConSec    from '@/sections/ConSec/ConSec'
import TheHeader from '@/sections/app/TheHeader'

export default {
  name: 'DefaultLayout',
  components: { TheHeader,ConSec},
}
</script>
