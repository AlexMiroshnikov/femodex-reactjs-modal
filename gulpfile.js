var gulp = require('gulp'),
    jsx = require('gulp-react'),
    sass = require('gulp-sass');

var logError = function(e){
    console.log(['Error', e.message, 'at ' + e.fileName + ':' + e.lineNumber].join("\n"));
};

gulp.task('jsx', function(){
    return gulp.src('src/components/**/*.jsx')
        .pipe(jsx().on('error', logError))
        .pipe(gulp.dest('build/js'));
});

gulp.task('sass', function(){
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', logError))
        .pipe(gulp.dest('build/css'));
});

gulp.task('default', ['sass', 'jsx'], function() {

});