const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const moduleImporter = require('sass-module-importer');
const del = require('del');

gulp.task('css', function () {
  return gulp.src('src/stylesheets/bui.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      importer: moduleImporter(),
    }).on('error', sass.logError))
    .pipe(postcss([require("postcss-cssnext")()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('lib/css'));
});

gulp.task('css:min', function () {
  return gulp.src('lib/**/!(*.min).css')
    .pipe(sourcemaps.init())
    .pipe(postcss([require("cssnano")({ autoprefixer: false })]))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('lib'));
});
