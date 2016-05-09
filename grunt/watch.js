module.exports = {
  css: {
    files: ['src/stylesheets/sharetastic.sass'],
    tasks: ['sass', 'copy'],
    options: {
      spawn: false,
      livereload: true
    }
  },
  js: {
    files: ['src/javascripts/*.js'],
    tasks: ['concat', 'copy'],
    options: {
      spawn: false,
      livereload: true
    }
  }
}