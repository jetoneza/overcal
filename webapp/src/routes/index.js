// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'
import Projects from './Projects'

export const createRoutes = (store) => ({
  onEnter: async (nextState, replace, cb) => {
    // TODO: Do something on enter here

    cb()
  },
  getComponent (nextState, cb) {
    require.ensure([], require => {
      const CoreLayout = require('layouts/CoreLayout/CoreLayout').default

      cb(null, CoreLayout)
    }, 'core')
  },
  childRoutes: [
    Home(store),
    Projects(store),
  ]
})

export default createRoutes

