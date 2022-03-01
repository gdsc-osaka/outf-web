<template>
  <v-container fluid>
    <GdscGlobalSec />
    <GdscOsakaSec />
    <JoinUsSec />
    <MembersSec />
    <ContactSec />
  </v-container>
</template>

<script>
import GdscGlobalSec from '@/sections/GdscGlobalSec'
import GdscOsakaSec from '@/sections/GdscOsakaSec'
import JoinUsSec from '@/sections/JoinUsSec'
import MembersSec from '@/sections/MembersSec'
import ContactSec from '@/sections/ContactSec'

export default {
  name: 'IndexPage',
  components: {
    GdscGlobalSec,
    GdscOsakaSec,
    JoinUsSec,
    MembersSec,
    ContactSec,
  },
}
</script>
