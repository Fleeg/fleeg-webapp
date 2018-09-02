const del   = require('del')
const gulp  = require('gulp')
const pug   = require('gulp-pug')
const sass  = require('gulp-sass')


// files and folders location
const SRC        = 'app'
const SRC_SASS   = `${SRC}/sass/**/*.scss`
const SRC_PUG    = `${SRC}/pages/*.pug`
const SRC_FONT1  = 'node_modules/@fortawesome/fontawesome-free/webfonts/*'
const SRC_FONT2  = ['node_modules/typeface-nunito-sans/index.css',
                    'node_modules/typeface-nunito-sans/**/*.woff',
                    'node_modules/typeface-nunito-sans/**/*.woff2']

const DIST       = 'build'
const DIST_SASS  = `${DIST}/css`
const DIST_PUG   = `${DIST}/pages`
const DIST_FONT1 = `${DIST}/webfonts`
const DIST_FONT2 = `${DIST}/webfonts/typeface-nunito-sans`

const WATCH_PUG  = `${SRC}/pages/**/*.pug`
const WATCH_SASS = SRC_SASS


// clear build folder
gulp.task('clear', () =>
  del.sync(DIST))

// copy fonts to build folder
gulp.task('fonts', () => {
  gulp.src(SRC_FONT1)
    .pipe(gulp.dest(DIST_FONT1))
  gulp.src(SRC_FONT2)
    .pipe(gulp.dest(DIST_FONT2))
})

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
  gulp.watch(WATCH_SASS, ['sass'])
  gulp.watch(WATCH_PUG, ['pug'])
})

// task for development
gulp.task('default', ['clear', 'fonts', 'sass', 'pug', 'watch'])
