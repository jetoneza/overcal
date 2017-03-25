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
      const ProjectView = require('./containers/ProjectViewContainer').default;

      cb(null, [
        {
          path: 'create',
          component: ProjectsCreate,
        },
        {
          path: ':projectId',
          component: ProjectView,
        },
      ]);
    }, 'projects-children');
  },
});

