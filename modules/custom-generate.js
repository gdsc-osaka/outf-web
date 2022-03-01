module.exports = function () {
  this.nuxt.hook('generate:extendRoutes', async routes => {
    const routesToGenerate = routes.filter(page => {
      return !page.route.match('/dev');
    })

    routes.splice(0, routes.length, ...routesToGenerate)
  });
}