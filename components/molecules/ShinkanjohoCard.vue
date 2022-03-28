<template>
  <v-card>
    <div class="px-5 pt-5" :class="bgColor">
      <v-img class="align-end rounded" :src="imgSrc" :aspect-ratio="12 / 9">
      </v-img>
    </div>

    <v-card-actions class="pa-5">
      <div class="text-left">
        {{ title }}
      </div>
      <v-dialog transition="dialog-top-transition" max-width="600">
        <template #activator="{ on, attrs }">
          <v-btn
            rounded
            elevation="1"
            :color="btncolor"
            class="ml-auto"
            v-bind="attrs"
            v-on="on"
          >
            {{ btnTxt }}
          </v-btn>
        </template>
        <template #default="dialog">
          <v-card>
            <v-toolbar color="primary" dark>
              {{ title }}
            </v-toolbar>
            <v-card-text>
              <div class="text-body-1 pa-12">
                {{ detail }}
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn text @click="dialog.value = false">閉じる</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>

<script scoped>
import config from '@/assets/config'

export default {
  name: 'ShinkanjohoCard',
  props: {
    imgSrc: {
      type: String,
      default: require('@/assets/gonuxt/img/sample01.jpg'),
    },
    title: {
      type: String,
      default: 'Align',
    },
    btnTxt: {
      type: String,
      default: 'See More',
    },
    link: {
      type: String,
      default: '/',
    },
    btncolor: {
      type: String,
      default: 'primary',
    },
    bgColor: {
      type: String,
      default: 'accent',
    },
    detail: {
      type: String,
      default: 'Hello world!',
    },
  },
  data: () => ({
    brandName: config.brand.nameShort,
  }),
}
</script>

<style lang="scss" scoped></style>
