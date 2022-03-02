<template>
  <v-footer color="primary lighten-1 py-2" padless>
    <v-row no-gutters justify="center">
      <template v-for="link in links">
        <a
          :key="link.icon"
          :href="link.link"
          target="_blank"
          class="text-decoration-none"
        >
          <v-btn color="white" rounded icon class="mx-1">
            <v-icon size="2em">{{ link.icon }}</v-icon>
          </v-btn>
        </a>
      </template>

      <v-col class="primary lighten-1 text-center white--text" cols="12">
        © {{ copyright.year }} {{ copyright.owner }}
      </v-col>
    </v-row>
  </v-footer>
</template>

<script scoped>
import config from '@/assets/config'

export default {
  name: 'TheFooter',
  data: () => ({
    links: config.brand.footer.links,
    copyright: {
      year: config.brand.copyrightInfo.year,
      owner: config.brand.copyrightInfo.owner,
    },
  }),
}
</script>

<style lang="scss">
@import '@/assets/styles/app';
.v-footer {
  .row {
    justify-content: center;
    @include media-breakpoint-up(sm) {
      justify-content: space-between;
    }
  }
}
</style>
