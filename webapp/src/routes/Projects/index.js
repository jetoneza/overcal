export default (store) => ({
  path: '/projects',
  onEnter (nextState, replace) {
    // TODO: Do something on enter here.
  },
  getIndexRoute(partialNextState, cb) {
    require.ensure([], require => {
      const Projects = require('./containers/ProjectsContainer').default
      cb(null, { component: Projects })
    }, 'projects')
  },
})
