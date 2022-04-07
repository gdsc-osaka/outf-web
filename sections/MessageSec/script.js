export default {
  props: {
    imgSrc: {
      type: String,
      default: require('@/assets/message/img/stadium.jpg'),
    },
    imgSrc2: {
      type: String,
      default: require('@/assets/message/img/stadium2.jpg'),
    },
    name: {
      type: String,
      default: 'name',
    },
    txt1: {
      type: String,
      default:
        '新入生の皆さん、ご入学おめでとうございます。突然ですが皆さんが所属していた部活には何人の部員がいましたか？我が陸上競技部には部員が全パート合わせて150人以上います。自己記録を更新したり、大会で活躍したりすれば、こんなにも多くの仲間が喜んでくれます。こんなに多くの人と喜びを分かち合える機会はそうそうありません。皆さんと一緒に走れる日を楽しみにしています！',
    },
    txt2: {
      type: String,
      default:
        '新入生のみなさん、ご入学おめでとうございます。今から始まる大学生活の4年間、一生記憶に残るような心が震える経験をしたくないですか？阪大陸上部には約150人の部員がいますが、試合の時は全員で戦い、全員で応援し、言葉では表すことができないような喜びや感動を共有できる瞬間がたくさんあります。1人1人が自分の目標に向かって努力していて、初心者、経験者関係なく、全員が輝ける環境があります。最高の仲間と共に、最高の4年間になること間違いなしです。ぜひ一度、新歓や練習に参加してみてください！',
    },
    txt3: {
      type: String,
      default:
        'マネージャーパートはタイム測定、動画撮影、マッサージなど日々練習のサポートをしています。学年を問わず仲が良く、やりがいを感じながら毎日楽しく活動しています！大学から始めた人や元選手の人、経験者まで様々で、男子部員もいますので、どなたでも大歓迎です！是非一度見学に来てください！グラウンドでお待ちしています！',
    },
    txt4: {
      type: String,
      default:
        '関西学連では、関西地区の大学生が中心となって、主催大会の運営を行っています。大変なことも多いですが、選手の活躍を裏で支えるお仕事はやりがいと達成感に溢れています。陸上未経験の学生もたくさん所属しています。新しいことを始めたい！競技は引退したけど、何か陸上に関わりたい！と思ったら、学連に挑戦してみて下さい！！',
    },
    who1: {
      type: String,
      default: '主将',
    },
    who2: {
      type: String,
      default: '女子主将',
    },
    who3: {
      type: String,
      default: 'マネージャー',
    },
    who4: {
      type: String,
      default: '学連員',
    },
  },

  data() {
    return {
      txt: this.txt1,
      class1: 'Message',
      class2: 'MessageReverse',
      tmp: 'Message',
      who: this.who1,
    }
  },

  methods: {
    change1: function (event) {
      this.txt = this.txt1
      this.who = this.who1
      this.tmp = this.class1
      this.class1 = this.class2
      this.class2 = this.tmp
    },
    change2: function (event) {
      this.txt = this.txt2
      this.who = this.who2
      this.tmp = this.class1
      this.class1 = this.class2
      this.class2 = this.tmp
    },
    change3: function (event) {
      this.txt = this.txt3
      this.who = this.who3
      this.tmp = this.class1
      this.class1 = this.class2
      this.class2 = this.tmp
    },
    change4: function (event) {
      this.txt = this.txt4
      this.who = this.who4
      this.tmp = this.class1
      this.class1 = this.class2
      this.class2 = this.tmp
    },
  },
}
