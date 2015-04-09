var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  livereload = require('gulp-livereload'),
  less = require('gulp-less'),
  jade = require('gulp-jade'),
  size = require('gulp-size'),
  minifyCSS = require('gulp-minify-css'),
  gutil = require('gulp-util'),
  sourcemaps = require('gulp-sourcemaps'),
  flatten = require('gulp-flatten'),
  runSequence = require('run-sequence'),
  del = require('del'),

  coffee = require('gulp-coffee');



gulp.task('less', function () {
  gulp.src('./public/css/style.less')
    .pipe(less().on('error', gutil.log))
    // .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css/'))
    .pipe(livereload());
});

gulp.task('coffee', function() {
  gulp.src('./public/js/*.coffee')
    .pipe(coffee().on('error', gutil.log))
    .pipe(gulp.dest('./public/js/'))
});

gulp.task('watch', function() {
  gulp.watch('./public/css/*.less', ['less']);
  gulp.watch(['./public/js/*.coffee'], ['coffee']);
});


gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'bin/www',
    ext: 'js jade',
  }).on('restart', function () {
    setTimeout(function () {
      livereload.changed();
    }, 500);
  });
});

gulp.task('default', [
  'less',
  'coffee',
  'develop',
  'watch'
]);



gulp.task('build', function(cb) {
  runSequence('clean',['templates', 'copy'], cb);
});

gulp.task('templates', function() {
  // var YOUR_LOCALS = {};

  gulp.src(['./views/*.jade', '!./views/layout.jade', '!./views/layout-city.jade', '!./views/error.jade'])
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./build/'))
});


gulp.task('clean', function (cb) {
  del(['build/*'], cb);
});

gulp.task('copy', function () {
  gulp.src('./public/css/**/*.css').pipe(gulp.dest('build/css'));
  gulp.src('./public/images/**/*').pipe(gulp.dest('build/images'));
  gulp.src('./public/fonts/**/*').pipe(gulp.dest('build/fonts'));
  gulp.src('./public/js/**/*.js').pipe(gulp.dest('build/js'));
});
