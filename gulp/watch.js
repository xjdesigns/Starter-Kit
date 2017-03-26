var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function () {
    // Endless stream mode
    gulp.watch('./sass/**/*.scss', ['sass']);
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./",
        port: 4000,
        injectChanges: true
    });

    gulp.watch('./sass/**/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
});
