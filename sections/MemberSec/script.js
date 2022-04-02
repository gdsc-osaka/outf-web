import MemberCardB from '@/components/organisms/MemberCardB.vue'

export default {
  components: { MemberCardB },
  data() {
    return {
      members: [
        {
          name: '阪大1',
          txt: '開発担当',
          imgSrc: require('@/assets/gonuxt/img/sample02.jpg'),
          txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')"
        },
        {
          name: '阪大2',
          txt: '開発担当',
          imgSrc: require('@/assets/gonuxt/img/sample02.jpg'),
          txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')"
        },
        {
          name: '阪大3',
          txt: '開発担当',
          imgSrc: require('@/assets/gonuxt/img/sample02.jpg'),
          txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')"
        },
        {
          name: '阪大4',
          txt: '開発担当',
          imgSrc: require('@/assets/gonuxt/img/sample02.jpg'),
          txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')"
        },
        {
          name: '阪大5',
          txt: '開発担当',
          imgSrc: require('@/assets/gonuxt/img/sample02.jpg'),
          txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')"
        },
        {
          name: '阪大6',
          txt: '開発担当',
          imgSrc: require('@/assets/gonuxt/img/sample02.jpg'),
          txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')"
        },
        {
          name: '阪大7',
          txt: '開発担当',
          imgSrc: require('@/assets/gonuxt/img/sample02.jpg'),
          txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')"
        },
        {
          name: '阪大8',
          txt: '開発担当',
          imgSrc: require('@/assets/gonuxt/img/sample02.jpg'),
          txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')"
        },
        {
          name: '阪大9',
          txt: '開発担当',
          imgSrc: require('@/assets/gonuxt/img/sample02.jpg'),
          txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')"
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
