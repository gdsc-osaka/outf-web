import BackgroundImage from '@/assets/message/img/stadium.jpg'

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
        '新入生の皆さんご入学おめでとうございます。主将を務めております新4回生の細野と申します。\n大阪大学陸上競技部は七大戦男女総合優勝、関西インカレでは男子は2部総合優勝、女子は複数種目入賞を目指して日々練習に取り組んでおります。\n突然ですが、皆さんはどういうチームが強いと思いますか。私はチーム全体が同じ方向、目標に向いているチームが強いチーム、あるいはチームを強くするものだと考えます。大阪大学陸上競技部はとても部員数が多いです。多い分いろいろな考え方の人がいて同じ方向を向いていくということが難しいですが、団結すればとても強力な武器になります。私たちと一緒にチームを強くしましょう！会える日を楽しみしております！',
    },
    txt2: {
      type: String,
      default:
        '女子部員は現在約30名で、男子部員に比べると人数は少ないもののその分パートや学年の垣根を超えた交流や結束力が強いです！少数精鋭ながら、七大戦女子の部優勝や、女子駅伝、インカレで結果を残すことで、男子部員とも互いに切磋琢磨し合い、阪大陸上部がよりよいチームになることを目指して女子主将を務めています。女子は全員が対校選手として大会に出られるチャンスがあり、全員が主役となって輝ける舞台があります。こんな貴重な時間は大学生の今だけです！ぜひ一度試合や体験にきてください！',
    },
    txt3: {
      type: String,
      default:
        'マネージャーパートはタイム測定、動画撮影、マッサージなど日々練習のサポートをしています。自分の仕事に対してだけでなく、選手が自己ベストを出したときや、対校戦でチームが勝利したときなどには大きなやりがいを感じることが出来ます。150人以上のチームメイトと悔しさや感動などを分かち合い、共有出来る機会は人生にそう多くはありません。\n大学から始めた人や元選手の人、未経験者まで様々で、男子部員もいますので、どなたでも大歓迎です！是非一度見学に来てください！グラウンドでお待ちしています！',
    },
    txt4: {
      type: String,
      default:
        '関西学連では、関西地区の大学生が中心となって、主催大会の運営を行っています。大変なことも多いですが、選手の活躍を裏で支えるお仕事はやりがいと達成感に溢れています。\n陸上未経験の学生もたくさん所属しています。新しいことを始めたい！競技は引退したけど、何か陸上に関わりたい！と思ったら、学連に挑戦してみて下さい！！',
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
      img: BackgroundImage,
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
