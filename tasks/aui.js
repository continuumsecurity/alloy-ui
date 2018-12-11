var alloy = require('../.alloy');
var gulp = require('gulp');
var path = require('path');
var replace = require('gulp-replace');

var ROOT = path.join(__dirname, '..');

gulp.task('aui-minify', function () {
    return gulp.src('aui/**/*+(-min.js|-min.css)', { cwd: ROOT })
        .pipe(replace('@VERSION@', alloy.yuiversion, {skipBinary: true}))
        .pipe(gulp.dest('build', { cwd: ROOT }));
});

gulp.task('aui-assets', function () {
    return gulp.src('aui/**/assets/**', { cwd: ROOT })
        .pipe(replace('@VERSION@', alloy.yuiversion, {skipBinary: true}))
        .pipe(gulp.dest('build', { cwd: ROOT }));
});

gulp.task('aui-lang', function () {
    return gulp.src('aui/**/lang/**', { cwd: ROOT })
        .pipe(replace('@VERSION@', alloy.yuiversion, {skipBinary: true}))
        .pipe(gulp.dest('build', { cwd: ROOT }));
});