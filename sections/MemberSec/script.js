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
    link: {
      type: String,
      default:
        'http://www.osaka-u-athlete-club.com/OUTF/%e9%83%a8%e5%86%85%e5%b0%82%e7%94%a8top/member/',
    },
  },
}
