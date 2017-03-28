'use strict';

var postcss = require('gulp-postcss'),
    gulp = require('gulp'),
    autoprefixer = require('autoprefixer'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync').create();

var plumberSettings = {
  errorHandler: notify.onError({
    title: 'Sass Error',
    message: '<%= error.message %>'
  })
};

gulp.task('sass', function () {
  var plugins = [
    autoprefixer({browsers: ['> 1%', 'last 4 version']}),
  ];

  return gulp.src('./sass/**/*.scss')
      .pipe(plumber(plumberSettings))
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(postcss(plugins))
      .pipe(gulp.dest('./css'))
      // stream does not work ???
      // tried all suggestions with no luck so hard refresh for now
      // .pipe(browserSync.stream({ match: './css/**/*.css' }));
});
