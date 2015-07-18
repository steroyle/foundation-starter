var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var paths = {
  'bower': './bower_components',
  'assets': './assets'
};

gulp.task('styles', function() {
  return gulp.src([
    paths.assets + '/styles/app.scss'
  ])
  .pipe(sass({
    includePaths: [
      paths.bower + '/foundation/scss'
    ]
  }))
  .pipe(concat('app.css'))
  .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  gulp.watch(paths.assets + '/styles/**/*.scss', ['styles']);
  gulp.watch(paths.assets + '/scripts/**/*.js', ['scripts']);
});

gulp.task('scripts', function() {
  gulp.src([
    paths.bower + '/jquery/dist/jquery.js',
    paths.bower + '/foundation/js/foundation.js',
    paths.bower + '/foundation/js/foundation/foundation.alert.js',
    paths.assets + '/scripts/app.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('./js'));
  
  return gulp.src(paths.bower + '/modernizr/modernizr.js')
    .pipe(gulp.dest('./js'));
});

gulp.task('default', ['styles', 'scripts']);