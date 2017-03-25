export default (store) => ({
  path: '/projects',
  getIndexRoute(partialNextState, cb) {
    require.ensure([], require => {
      const ProjectsContainer = require('./containers/ProjectsContainer').default
      cb(null, { component: ProjectsContainer })
    }, 'projects')
  },
  getChildRoutes(partialNextState, cb) {
    require.ensure([], require => {
      const ProjectsCreate = require('./containers/ProjectsCreateContainer').default;

      cb(null, [
        {
          path: 'create',
          component: ProjectsCreate,
        },
      ]);
    }, 'projects-create');
  },
});

