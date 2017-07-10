/**
 * Created by koudeja1 on 12.05.2017.
 */
var gulp = require('gulp');
var watch = require('gulp-watch');
var less = require('gulp-less-sourcemap');
var path = require('path');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var image = require('gulp-imagemin');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');

var gulp_src = gulp.src;
gulp.src = function() {
  return gulp_src.apply(gulp, arguments)
    .pipe(plumber(function(error) {
      // Output an error message
      gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
      // emit the end event, to properly end the task
      this.emit('end');
    })
  );
};

// development
gulp.task('default', ['less', 'browserify', 'images'], function() {

});

gulp.task('less', function () {
    return gulp.src('src/less/*.less')
        .pipe(less({
            sourceMap: {
                sourceMapRootpath: 'src/less' // Optional absolute or relative path to your LESS files
            }
        }))
        .pipe(gulp.dest('frontend/css/'));
});

gulp.task('browserify', function() {
    return browserify({ 
            entries: ['src/js/index.js'],
            debug: true
        })
        .bundle()
        .pipe(plumber(function(error) {
              // Output an error message
              gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
              // emit the end event, to properly end the task
              this.emit('end');
            })
        )
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('frontend/js/'));
});

gulp.task('images', function() {
    gulp.src('src/images/*')
    .pipe(image())
    .pipe(gulp.dest('frontend/images'))
});


gulp.task('dev', function () {
    gulp.watch('src/js/*.js', ['browserify']);
    gulp.watch('src/less/**/*.less', ['less']);
    gulp.watch('src/images/*', ['images']);
});



//production
gulp.task('build', function(){
    browserify({
        entries: ['src/js/index.js'],
    }).bundle()
        .pipe(plumber(function(error) {
              // Output an error message
              gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
              
            })
        )
        .pipe(source('bundle.js'))
        .pipe(streamify(uglify('bundle.js')))
        .pipe(gulp.dest('frontend/js/'));
});

gulp.task('less', function () {
    return gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('frontend/css/'));
});


gulp.task('images', function() {
    gulp.src('src/images/*')
        .pipe(image())
        .pipe(gulp.dest('frontend/images'))
});


gulp.task('set-dev-node-env', function() {
    return process.env.NODE_ENV = 'development';
});

gulp.task('set-prod-node-env', function() {
    return process.env.NODE_ENV = 'production';
});

gulp.task('prod', ['set-prod-node-env', 'less', 'minify-css', 'images','build']);

