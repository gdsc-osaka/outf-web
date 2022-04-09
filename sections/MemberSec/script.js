import MemberCardB from '@/components/organisms/MemberCardB.vue'

export default {
  components: { MemberCardB },
  data() {
    return {
      members: [
        {
          name: '百濃隼大',
          txt: '跳躍パート長',
          imgSrc: require('@/assets/member-img/跳躍.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
        {
          name: '細野航太郎',
          txt: '短長パート長',
          imgSrc: require('@/assets/member-img/短長.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
        {
          name: '菅野宏紀',
          txt: '短短パート長',
          imgSrc: require('@/assets/member-img/短短.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
        {
          name: '西野宮寛季',
          txt: '中距離パート長',
          imgSrc: require('@/assets/member-img/ミドル.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
        {
          name: '田上陽悠',
          txt: '投擲パート長',
          imgSrc: require('@/assets/member-img/投擲.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
        {
          name: '佐藤肇',
          txt: '混成パート長',
          imgSrc: require('@/assets/member-img/混成.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
        {
          name: '杉林歩',
          txt: '競歩パート長',
          imgSrc: require('@/assets/member-img/競歩.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
        {
          name: '中嶋遼',
          txt: '長距離パート長',
          imgSrc: require('@/assets/member-img/ロング.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
        {
          name: '平塚麻友子',
          txt: 'マネージャー',
          imgSrc: require('@/assets/member-img/マネ.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
      ],
    }
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
