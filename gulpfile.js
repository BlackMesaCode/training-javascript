const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require("gulp-watch");
const exec = require('child_process').exec; // part of nodejs - no npm package needed
const plumber = require("gulp-plumber");
const del = require('del');

gulp.task('clean', function (done) {
    var toDelete = ["./client/dist"];
    del(toDelete);
    done();
});

gulp.task('transpile', () => {
    return gulp.src('./client/src/**/*.js')
        .pipe(plumber()) // plumber prevents errors breaking the watch
        .pipe(babel({
            presets: ["latest"]
        }))
        .pipe(gulp.dest('./client/dist/'));
});

gulp.task("copy", () => {
    return gulp.src("./client/src/**/*.html")
        .pipe(gulp.dest("./client/dist/"));
})

gulp.task("watch", gulp.series("clean", "transpile", "copy"), () => {
    return watch("./client/src/**/*.js", () => gulp.start(["transpile", "copy"]));
});

gulp.task("liveserver", (done) => {
    exec("live-server", (error) => { 
        console.log(error);
        done(); 
    });
});

gulp.task("default", gulp.parallel("watch", "liveserver"), () => { });