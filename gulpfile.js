const gulp = require('gulp');
const pug = require('gulp-pug');

// Copy css theme
gulp.task('theme', () => 
  gulp.src('app/theme/*.css')
      .pipe(gulp.dest('build/theme')));

// Generate html
gulp.task('pug', ['theme'], () => 
  gulp.src('app/templates/*.pug')
      .pipe(pug())
      .pipe(gulp.dest('build')));
