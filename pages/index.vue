<template>
  <div>
    <AutoSwitchSec />
    <v-container>
      <MessageSec />
      <ShinkanjohoSec />
      <ResultCardSec />
      <MemberSec />
      <QandASec />
    </v-container>
  </div>
</template>

<script>
export default {
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
