module.exports = {
  build: {
    options: {
      style: 'expanded',
      sourcemap: 'none'
    },
    files: {
      'tests/sharetastic.css':'src/stylesheets/sharetastic.sass',
      'dist/sharetastic.css':'src/stylesheets/sharetastic.sass'
    }
  }
}