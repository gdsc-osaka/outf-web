import MemberCardB from '@/components/organisms/MemberCardB.vue'

export default {
  components: { MemberCardB },
  data() {
    return {}
  },
  props: {
    btnTxt: {
      type: String,
      default: 'メンバー紹介ページ（公式HP）',
    },

    btnColor: {
      type: String,
      default: 'primary',
    },
  },
}
