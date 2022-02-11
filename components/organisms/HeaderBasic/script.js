import config from "@/assets/config"

export default {
  name: 'HeaderBasic',
  data: () => ({
    brandName: config.brand.nameShort,
  }),
}