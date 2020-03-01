module.exports = {
  defaults: {
    test: true,
    stories: true,
    vue: true,
    notes: true,
    store: false
  },
  fileHeader: {
    authors: [
      {
        name: 'AUTHOR',
        email: 'AUTHORMAIL,'
      }
    ],
    projectName: 'PROJECTNAME'
  },
  files: {
    vue: {
      name: '',
      postfix: '',
      extension: 'vue',
      path: 'components/'
    },
    stories: {
      name: '',
      postfix: '',
      extension: 'stories.js',
      path: 'components/'
    },
    test: {
      name: '',
      postfix: '',
      extension: 'spec.js',
      path: 'components/'
    },
    notes: {
      name: '',
      postfix: '',
      extension: 'notes.md',
      path: 'components/'
    },
    store: {
      name: '',
      postfix: '',
      extension: 'js',
      path: 'store/'
    }
  },
  paths: {
    templateBase: '.ferdi',
    modulePath: '',
    pathOptions: {
      atomic: 'atomic/',
      modules: 'modules/'
    }
  }
};
