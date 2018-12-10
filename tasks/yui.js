var alloy = require('../.alloy');
var gulp = require('gulp');
var path = require('path');
var replace = require('gulp-replace');

var ROOT = path.join(__dirname, '..');

gulp.task('yui-minify', function () {
    return gulp.src('bower_components/yui3/build/**/*+(-min.js|-min.css)', { cwd: ROOT })
        .pipe(replace('@VERSION@', alloy.yuiversion, {skipBinary: true}))
        .pipe(gulp.dest('build', { cwd: ROOT }));
});

gulp.task('yui-assets', function () {
    return gulp.src('bower_components/yui3/build/**/assets/**', { cwd: ROOT })
        .pipe(replace('@VERSION@', alloy.yuiversion, {skipBinary: true}))
        .pipe(gulp.dest('build', { cwd: ROOT }));
});

gulp.task('yui-lang', function () {
    return gulp.src('bower_components/yui3/build/**/lang/**', { cwd: ROOT })
        .pipe(replace('@VERSION@', alloy.yuiversion, {skipBinary: true}))
        .pipe(gulp.dest('build', { cwd: ROOT }));
});