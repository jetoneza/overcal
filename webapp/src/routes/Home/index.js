export default (store) => ({
  path: '/',
  onEnter (nextState, replace) {
    // TODO: Do something on enter here.
  },
  getIndexRoute(partialNextState, cb) {
    require.ensure([], require => {
      const Home = require('./containers/HomeContainer').default
      cb(null, { component: Home })
    }, 'home')
  },
})
