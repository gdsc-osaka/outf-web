export default {
  name: 'CardSection1',
  data: () => ({
    tiles2Col: [],
    tiles4Col: [],
  }),
  created: function () {
    this.tiles2Col = this.getTileData(4)
  },
  methods: {
    getTileData(ncol) {
      const tiles = []
      const positions = ['top', 'center', 'bottom']
      const titleSizeList = ['text-h2', 'text-h3', 'text-h4', 'text-h5']

      for (let i = 0; i < ncol; i++) {
        const titleSize = titleSizeList[i % titleSizeList.length]
        const imgIndex = (i % 3) + 1
        const pos = positions[i % positions.length]
        const link = i % 2 === 0 ? null : { href: '/', txt: 'link text' }

        tiles.push({
          title: `PhotoCard ${titleSize}`,
          titleSize: titleSize,
          imgSrc: require(`@/assets/gonuxt/img/sample0${imgIndex}.jpg`),
          txtPosition: pos,
          link: link,
        })
      }
      return tiles
    },
  },
}
