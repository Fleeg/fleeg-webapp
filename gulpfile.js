const gulp  = require('gulp')
const pug   = require('gulp-pug')
const sass  = require('gulp-sass')


// files and folders location
const SRC       = 'app'
const SRC_SASS  = `${SRC}/sass/**/*.scss`
const SRC_PUG   = `${SRC}/pages/**/*.pug`

const DIST      = 'build'
const DIST_SASS = `${DIST}/css`
const DIST_PUG  = `${DIST}/pages`


// build css
gulp.task('sass', () =>
  gulp.src(SRC_SASS)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(DIST_SASS)))

// build html
gulp.task('pug', () =>
  gulp.src(SRC_PUG)
    .pipe(pug())
    .pipe(gulp.dest(DIST_PUG)))

// auto build when files change
gulp.task('watch', () => {
  gulp.watch(SRC_SASS, ['sass'])
  gulp.watch(SRC_PUG, ['pug'])
})

// task for development
gulp.task('default', ['sass', 'pug', 'watch'])
