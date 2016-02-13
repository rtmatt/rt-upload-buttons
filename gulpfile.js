var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('default', ['scripts'], function () {

});


var paths = {
    scripts: ['src/js/*.js']
};

gulp.task('scripts',function(){
    return gulp.src(paths.scripts)
        .pipe(uglify())
        .pipe(concat('rt-upload-buttons.min.js'))
        .pipe(gulp.dest('./dist'));
});