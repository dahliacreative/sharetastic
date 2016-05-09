module.exports = {
  build: {
    files: [
      {expand: false, src: ['src/stylesheets/sharetastic.sass'], dest: 'dist/sharetastic.sass'},
      {expand: false, src: ['dist/sharetastic.js'], dest: 'tests/sharetastic.js'},
      {expand: false, src: ['src/images/sharetastic.svg'], dest: 'tests/sharetastic.svg'},
      {expand: false, src: ['src/images/sharetastic.svg'], dest: 'dist/sharetastic.svg'}
    ]
  }
}
