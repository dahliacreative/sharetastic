module.exports = {
  build: {
    options: {
      style: 'compressed',
      sourcemap: 'none'
    },
    files: {
      'tests/sharetastic.css':'src/stylesheets/sharetastic.sass'
    }
  }
}