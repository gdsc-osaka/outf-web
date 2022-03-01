/* eslint-disable no-console */
// import PhotoTileA from '@/components/molecules/PhotoTileA'

export default {
  name: 'ActivitiesSec',
  // components: { PhotoTileA },
  data: () => ({
    topTile: null,
    tiles4Col: [],
  }),
  created: function () {
    this.topTile = this.getTileData(1)[0];
    this.tiles4Col = this.getTileData(4);
  },
  methods: {
    getTileData(ncol) {
      const tiles = [];

      for (let i = 0; i < ncol; i++) {
        const imgIndex = i % 3 + 1;

        tiles.push({
          title: `Card ${i}`,
          titleSize: "text-h5",
          imgSrc: require(`@/assets/gonuxt/img/sample0${imgIndex}.jpg`),
          txtPosition: "center",
          link: null,
        });
      }
      return tiles;
    }
  }
}