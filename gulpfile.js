var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var pipeline = require('readable-stream').pipeline;

gulp.task('js', function () {
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

gulp.task(('default'), gulp.series(['scss', 'js']));

gulp.task('watch', function () {
    gulp.watch ('src/**/*.scss', gulp.series(['scss']));
    gulp.watch('src/**/*.js', gulp.series(['js']));
});

