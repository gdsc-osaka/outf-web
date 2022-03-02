<template>
  <v-app-bar dark dense height="64" fixed>
    <v-toolbar-title :class="brandNameFontWeight">{{
      brandName
    }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link to="/" class="nt-app-bar-link">
      <v-btn elevation="0">Home</v-btn>
    </router-link>
  </v-app-bar>
</template>

<script scoped>
import config from '@/assets/config'

export default {
  name: 'HeaderBasic',
  props: {
    brandNameFontWeight: {
      type: String,
      default: 'font-weight-bold',
    },
  },
  data: () => ({
    brandName: config.brand.nameShort,
  }),
}
</script>

<style lang="scss">
@import '@/assets/styles/app';

.nt-app-bar-link {
  text-decoration: none !important;
}
</style>
