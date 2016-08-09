var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sass = require('gulp-sass');

gulp.task('css', function () {
    return gulp
        .src('./src/style.scss')
        .pipe(sass())
        .pipe(postcss([
            autoprefixer({
                browsers: ['last 1 version']
            })
        ]))
        .pipe(gulp.dest('dist'))
});

gulp.task('default', ['css']);

gulp.task('watch', function () {
    return gulp.watch('./**/*.scss', ['default']);
});
