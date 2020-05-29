var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var pipeline = require('readable-stream').pipeline;

gulp.task('compress', function () {
    return pipeline(
        gulp.src('src/js/app.js'),
        uglify(),
        gulp.dest('dist/js')
    );
});

gulp.task('scss', function () {
    return gulp.src('src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
})