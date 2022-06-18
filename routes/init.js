// const path = require('path')
const express = require('express')
// const {singular} = require('pluralize')
// const {routes, compiledRoutes} = require('.')

function initRoutes(server, app) {
  const handle = app.getRequestHandler()
  const router = new express.Router()

  // function setStaticPage(route) {
  //   router.get(route, (req, res) => {
  //     res.sendFile(path.join(__dirname, `../public/static-pages${route}.html`))
  //   })
  // }

  // setStaticPage(compiledRoutes.contact.path)

  // function setRouter(route) {
  //   router.get(route.path, (req, res) => {
  //     app.render(req, res, route.pathToPage, {...req.params, ...req.query})
  //   })
  // }

  // setRouter(compiledRoutes.info3dPrinting)

  router.get('*', (request, response) => {
    return handle(request, response)
  })

  server.use(router)
}

module.exports = {initRoutes}
