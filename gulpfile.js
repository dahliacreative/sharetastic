const gulp = require('gulp')
const sass = require('gulp-sass')
const plumber = require('gulp-plumber')
const browserify = require('browserify')
const babelify = require('babelify')
const vinylBuffer = require('vinyl-buffer')
const vinylSourceStream = require('vinyl-source-stream')
const notify = require('gulp-notify')
const stats = require('gulp-stats')(gulp)
const clean = require('gulp-clean')

function onError(err) {
  notify.onError({
    title: 'Gulp',
    subtitle: 'Compilation Error',
    message: 'Error <%= error.message %>',
    sound: 'Beep'
  })(err)
  this.emit('end')
}

gulp.task('javascript', () =>
  browserify({ entries: 'lib/javascript/index.js' })
    .transform(babelify, { presets: ['es2015'], plugins: ['transform-class-properties', 'transform-object-assign'] })
    .bundle()
    .on('error', onError)
    .pipe(vinylSourceStream('sharetastic.js'))
    .pipe(vinylBuffer())
    .pipe(gulp.dest('dist'))
)

gulp.task('sass', () =>
  gulp.src('lib/stylesheets/sharetastic.sass')
    .pipe(gulp.dest('dist'))
    .pipe(sass())
    .pipe(gulp.dest('dist'))
)

gulp.task('watch', () => {
    gulp.watch('lib/javascript/**/*.js', ['javascript'])
})

gulp.task('default', ['javascript', 'sass', 'watch'])