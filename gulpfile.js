const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('transpile-es2015', () => {
    return gulp.src('./client/src/module-patterns/es2015/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./client/dist/module-patterns/es2015/'));
});