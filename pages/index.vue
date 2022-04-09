<template>
  <div>
    <AutoSwitchSec />
    <MessageSec />
    <v-container>
      <ShinkanSec />
      <ResultCardSec />
      <MemberSec />
      <GakuRecSec />
      <QandASec />
    </v-container>
  </div>
</template>

<script>
import GakuRecSec from '../sections/GakuRecSec/GakuRecSec.vue'
export default {
  name: 'IndexPage',
  components: { GakuRecSec },
}
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 1200px) {
  .container {
    max-width: 1200px;
  }
}
</style>
