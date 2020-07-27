const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style () {
    return gulp.src('./src/sass/**/*.sass')
            .pipe(sass())
            .pipe(gulp.dest('./docs/css'))
            .pipe(browserSync.stream())
}

// function gulp () {
//     return gulp.src('./src/*.pug')
//     .pupe(pug()
// }

function watch () {
    browserSync.init({
        server: {
            baseDir: './docs'
        }
    })
    gulp.watch('./src/sass/**/*.sass', style);
    gulp.watch('./docs/*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch; 