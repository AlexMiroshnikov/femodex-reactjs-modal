var gulp = require('gulp'),
    jsx = require('gulp-react');

var logError = function(e){
    console.log(['Error', e.message, 'at ' + e.fileName + ':' + e.lineNumber].join("\n"));
};

gulp.task('jsx', function(){
    return gulp.src('src/components/**/*.jsx')
        .pipe(jsx().on('error', logError))
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['jsx'], function() {

});