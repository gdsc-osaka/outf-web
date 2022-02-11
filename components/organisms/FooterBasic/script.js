import config from '@/assets/config';
export default {
  name: 'FooterBasic',
  data: () => ({
    links: config.brand.footer.links,
    copyright: {
      year: config.brand.copyrightInfo.year,
      owner: config.brand.copyrightInfo.owner,
    }
  }),
}