const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
// postcss block
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const normalizeCharset = require('postcss-normalize-charset');
const minifySelectors = require('postcss-minify-selectors');
const minifyFontValues = require('postcss-minify-font-values');
const mergeLonghand = require('postcss-merge-longhand');
const mergeIdents = require('postcss-merge-idents');
const discardUnused = require('postcss-discard-unused');
const discardEmpty = require('postcss-discard-empty');
const discardDuplicates = require('postcss-discard-duplicates');
const discardComments = require('postcss-discard-comments');
const convertValues = require('postcss-convert-values');
const mergeSelectors = require('postcss-merge-selectors');
const cssnano = require('cssnano');

const plugins = [
  cssnext(),
  normalizeCharset(),
  minifySelectors(),
  minifyFontValues(),
  mergeLonghand(),
  mergeIdents(),
  discardUnused(),
  discardEmpty(),
  discardDuplicates(),
  discardComments(),
  convertValues({ length: false, precision: 2 })
];

gulp.task('css:watch', ['css:min'], () => gulp.watch('src/**/*.scss', ['css:min']));

gulp.task('css', () => gulp.src('src/stylesheets/bui.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss(plugins))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('lib/css'))
);

gulp.task('css:min', ['css'], () => gulp.src('lib/**/!(*.min).css')
  .pipe(sourcemaps.init())
  .pipe(postcss([cssnano({ autoprefixer: false })]))
  .pipe(rename({ suffix: '.min' }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('lib'))
);
