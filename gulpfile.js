const gulp = require('gulp');
const sass         = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');


gulp.task('styles',function () {
    return gulp.src("Projects/Project-3/src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({prefix: "", suffix: ".min"}))
        .pipe(autoprefixer({
            browsers :['last 2 versions'],
			cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("Projects/Project-3/src/css"))
})

gulp.task('watch',function () {
   gulp.watch("Projects/Project-3/src/sass/**/*.+(scss|sass)", gulp.parallel("styles"));
});

gulp.task('default', gulp.parallel('watch', 'styles'));


// const gulp        = require('gulp');
// const sass        = require('gulp-sass');
// const cleanCSS = require('gulp-clean-css');
// const autoprefixer = require('gulp-autoprefixer');
// const rename = require("gulp-rename");
//
//
//
// gulp.task('styles', function() {
//     return gulp.src("static/sass/Admin sass/*.+(scss|sass)")
//         .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//         .pipe(rename({suffix: '.min', prefix : ''}))
//         .pipe(autoprefixer({
//             browsers :['last 2 versions'],
//             cascade : false
//         }))
//         .pipe(cleanCSS({compatibility: 'ie8'}))
//         .pipe(gulp.dest("static/css/Admin_css"));
// });
//
// gulp.task('watch', function() {
//     gulp.watch("static/sass/Admin sass/*.+(scss|sass)", gulp.parallel('styles'));
//
// })
//
// gulp.task('default', gulp.parallel('watch', 'styles'));