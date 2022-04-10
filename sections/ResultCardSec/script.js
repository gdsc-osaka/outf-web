export default {
  name: 'ResultCardSec',
  data() {
    return {
      items: [
        {
          name: '関西インカレ',
          img: require('@/assets/games/kankare.jpg'),
          url: 'http://www.osaka-u-athlete-club.com/OUTF/record/%e9%96%a2%e8%a5%bf%e3%82%a4%e3%83%b3%e3%82%ab%e3%83%ac-6/',
        },
        {
          name: '全日本インカレ',
          img: require('@/assets/games/zenkare.jpg'),
          url: 'http://www.osaka-u-athlete-club.com/OUTF/record/%e5%85%a8%e6%97%a5%e6%9c%ac%e3%82%a4%e3%83%b3%e3%82%ab%e3%83%ac-6/',
        },
        {
          name: '七大戦',
          img: require('@/assets/games/nanadai.jpg'),
          url: 'http://www.osaka-u-athlete-club.com/OUTF/record/%e4%b8%83%e5%a4%a7%e6%88%a6%e6%b1%ba%e5%8b%9d%e7%a8%ae%e7%9b%ae%e7%b5%90%e6%9e%9c/',
        },
        {
          name: '駅伝',
          img: require('@/assets/games/ekiden.jpg'),
          url: 'http://www.osaka-u-athlete-club.com/OUTF/record/%e4%b8%b9%e5%be%8c%e9%a7%85%e4%bc%9d-4/',
        },
        {
          name: 'その他の試合',
          img: require('@/assets/games/other.jpg'),
          url: 'http://www.osaka-u-athlete-club.com/OUTF/records-top/result/',
        },
      ],
    }
  },
}
