export default {
  name: 'AutSwitchSec',
  data() {
    return {
      currentSlide: 0,
      
      slides: [
        
        { id: 0, img: require('@/assets/outf-Img/intro/sinkan-web.jpg') },
        { id: 1, img: require('@/assets/outf-Img/intro/sinkan-web2.jpg') },
        { id: 2, img: require('@/assets/outf-Img/intro/sinkan-web3.jpg') },
        { id: 3, img: require('@/assets/outf-Img/intro/sinkan-web4.jpg') },
        { id: 4, img: require('@/assets/outf-Img/intro/sinkan-web5.jpg') },
        { id: 5, img: require('@/assets/outf-Img/intro/sinkan-web6.jpg') },
        /*
        { id: 6, img: require('@/assets/outf-Img/intro/sinkan-web-mono.jpg') },
        { id: 7, img: require('@/assets/outf-Img/intro/sinkan-web2-mono.jpg') },
        { id: 8, img: require('@/assets/outf-Img/intro/sinkan-web3-mono.jpg') },
        { id: 9, img: require('@/assets/outf-Img/intro/sinkan-web4-mono.jpg') },
        { id: 10, img: require('@/assets/outf-Img/intro/sinkan-web5-mono.jpg') },
        { id: 11, img: require('@/assets/outf-Img/intro/sinkan-web6-mono.jpg') },
        
        /*
        { id: 0, img: require('@/assets/outf-Img/intro/sinkan-web-mono.jpg') },
        { id: 1, img: require('@/assets/outf-Img/intro/sinkan-web2-mono.jpg') },
        { id: 2, img: require('@/assets/outf-Img/intro/sinkan-web3-mono.jpg') },
        { id: 3, img: require('@/assets/outf-Img/intro/sinkan-web4-mono.jpg') },
        { id: 4, img: require('@/assets/outf-Img/intro/sinkan-web5-mono.jpg') },
        { id: 5, img: require('@/assets/outf-Img/intro/sinkan-web6-mono.jpg') },
        */
      ],
      
      fade: 'next',
      show: true,
      timer: 0,
    }
  },
  computed: {
    Slides() {
      return this.slides.filter((slide) => {
        return slide.id === this.currentSlide
      })
    },
  },
  created() {
    this.timer = setInterval(() => {
      this.autoPlay()
    }, 3000)
  },
  methods: {
    autoPlay() {
      this.currentSlide++
      if (this.currentSlide === this.slides.length) {
        this.currentSlide = 0
      }
    },
    openWindow: function (height) {
      height = document.getElementById('slide-outers').clientHeight
      window.scrollTo({
        top: height,
        behavior: 'smooth',
      })
    },
  },
}
