var alloy = require('../.alloy');
var gulp = require('gulp');
var path = require('path');
var replace = require('gulp-replace');

var ROOT = path.join(__dirname, '..');

gulp.task('build-minify', function () {
    return gulp.src('prebuild/**/*+(-min.js|-min.css)', { cwd: ROOT })
        .pipe(replace('@VERSION@', alloy.yuiversion, {skipBinary: true}))
        .pipe(gulp.dest('build', { cwd: ROOT }));
});

gulp.task('build-assets', function () {
    return gulp.src('prebuild/**/assets/**', { cwd: ROOT })
        .pipe(replace('@VERSION@', alloy.yuiversion, {skipBinary: true}))
        .pipe(gulp.dest('build', { cwd: ROOT }));
});

gulp.task('build-lang', function () {
    return gulp.src('prebuild/**/lang/**', { cwd: ROOT })
        .pipe(replace('@VERSION@', alloy.yuiversion, {skipBinary: true}))
        .pipe(gulp.dest('build', { cwd: ROOT }));
});