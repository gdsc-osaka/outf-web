import config from "@/assets/config"

export default {
  name: 'HeaderBasic',
  props: {
    brandNameFontWeight: {
      type: String,
      default: 'font-weight-bold',
    }
  },
  data: () => ({
    brandName: config.brand.nameShort,
  }),
}