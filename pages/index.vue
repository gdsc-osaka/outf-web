<template>
  <div>
    <AutoSwitchSec />
    <v-container>
      <MessageSec />
      <ShinkanjohoSec />
      <ResultCardSec />
      <MemberSec />
      <GakuRecSec/>
      <QandASec />
      
    </v-container>
    
  </div>
</template>

<script>
import GakuRecSec from '../sections/GakuRecSec/GakuRecSec.vue'
export default {
  components: { GakuRecSec },
  name: 'IndexPage',
}
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 1200px) {
  .container {
    max-width: 1200px;
  }
}
</style>
