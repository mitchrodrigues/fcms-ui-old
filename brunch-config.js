module.exports = {
  files: {
    javascripts: {
     joinTo: {
        'jquery.js': /^bower_components[\\/]jquery[\\/]dist[\\/]jquery.js/,
        'app.js': /^app/,
        'vendor.js':  /^(?!app)/,
        'bootstrap.js': /^bower_components[\\/]dist[\\/]js[\\/]bootstrap.js/
      }
    },
    // stylesheets: {joinTo: 'app.css'}
    stylesheets: {
      joinTo: 'app.css'
    }
  },
  plugins: {  
    less:{
      dumpLineNumbers: 'comments' 
    },
    imageoptimizer:{
      path: 'images',
      smushit: false
    },
    babel: {presets: ['es2015', 'react']},
    sass: {
      options: {
        includePaths: [ 'node_modules/bootstrap/scss/' ]
      }
    },
    yamlI18n: {
      flatten: true,
      source: 'app/locales',
      dest: 'public/locales',
      locale:{ default: 'en' }
    }
  }
};
