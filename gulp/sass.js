'use strict';

var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  var plugins = [
    autoprefixer({browsers: ['> 1%', 'last 4 version']}),
  ];

  return gulp.src('./sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss(plugins))
      .pipe(gulp.dest('./css'));
      // stream does not work ???
      // tried all suggestions with no luck so hard refresh for now
      // .pipe(browserSync.stream());
});