export default {
  name: 'ShinkanEventCard',
  data: () => ({
    Cards2Col: [],
    Cards4Col: [],
  }),
  created: function () {
    this.Cards2Col = this.getCardData(4)
  },
  methods: {
    getCardData(ncol) {
      const cards = []
      const titleSizeList = ['Zoom新歓', 'サーオリ', '女子新歓', '練習見学会']
      const detailList = [
        '部活動に関することはもちろん、気になる大学生活の質問などなど、どんなことでも陸上部員がお答えします！途中入退室自由です。是非参加してください！ (陸上部の紹介＋パート別相談＋学部別相談)',
        '陸上部員の話を直接聞くことができます。対面でしか聞けないこともあるはず！？そこのあなた！是非陸上部のブースに立ち寄ってみては？',
        '女子部員と楽しくおしゃべりしましょう！女子だからこその話が聞けるかも！？',
        '(練習見学会の内容)',
      ]
      const dateList = ['4月17日', '4月10日＠豊中', '日時未定', '日時未定']

      for (let i = 0; i < ncol; i++) {
        const titleSize = titleSizeList[i % titleSizeList.length]
        const imgIndex = (i % 4) + 1
        const detail = detailList[i % detailList.length]
        const date = dateList[i % dateList.length]

        cards.push({
          title: `${titleSize}`,
          imgSrc: require(`@/assets/shinkanjoho/Img/img${imgIndex}.jpg`),
          btnTxt: `詳細`,
          detail: `${detail}`,
          date: `${date}`,
        })
      }
      return cards
    },
  },
}
