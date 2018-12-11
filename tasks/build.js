var alloy = require('../.alloy');
var gulp = require('gulp');
var path = require('path');
var run = require('run-sequence');
var spawn = require('spawn-local-bin');

var ROOT = path.join(__dirname, '..');
var CWD = process.env.INIT_CWD;

gulp.task('build', function(callback) {
    var BASE_DIR = path.join(ROOT, 'src/aui-base');

    if (CWD === BASE_DIR) {
        run('init', 'build-loader', 'aui-postbuild', callback);
    }
    else {
        run('init', 'build-aui', 'build-loader', 'aui-postbuild', callback);
    }
});

gulp.task('build-aui', function(callback) {
    if (CWD === ROOT) {
        CWD = path.join(CWD, 'src');
    }

    build(CWD, callback);
});

gulp.task('build-base', function(callback) {
    var cwd = path.join(ROOT, 'src/aui-base');

    build(cwd, callback);
});

gulp.task('build-loader', function(callback) {
    run('loader-prebuild', 'aliases', 'build-base', 'loader-postbuild', callback);
});

gulp.task('build-publish', function(callback) {
    run('init-yui', 'build-aui', 'build-loader', 'aui-postbuild', callback);
});

gulp.task('aui-postbuild', function (callback) {
    run('aui-minify', 'aui-assets', 'aui-lang', 'clean-aui', callback)
});

function build(cwd, callback) {
    var args = [];
    var cmd = 'shifter';

    args.push('--build-dir=' + path.join(ROOT, 'aui'));
    args.push('--no-cache');
    args.push('--no-coverage');
    args.push('--no-lint');
    args.push('--replace-version=' + alloy.version);
    args.push('--replace-yuivar=A');
    args.push('--walk');

    spawn(cmd, args, cwd)
        .on('exit', function() {
            if (callback) {
                callback();
            }
        });
}

gulp.task('build-debug', function(callback) {
    var BASE_DIR = path.join(ROOT, 'src/aui-base');

    if (CWD === BASE_DIR) {
        run('init-debug', 'build-loader-debug', callback);
    }
    else {
        run('init-debug', 'build-aui-debug', 'build-loader-debug', callback);
    }
});

gulp.task('build-aui-debug', function(callback) {
    if (CWD === ROOT) {
        CWD = path.join(CWD, 'src');
    }

    buildDebug(CWD, callback);
});

gulp.task('build-base-debug', function(callback) {
    var cwd = path.join(ROOT, 'src/aui-base');

    buildDebug(cwd, callback);
});

gulp.task('build-loader-debug', function(callback) {
    run('loader-prebuild', 'aliases', 'build-base-debug', 'loader-postbuild', callback);
});

gulp.task('build-publish-debug', function(callback) {
    run('init-yui-debug', 'build-aui-debug', 'build-loader-debug', callback);
});

function buildDebug(cwd, callback) {
    var args = [];
    var cmd = 'shifter';

    args.push('--build-dir=' + path.join(ROOT, 'build'));
    args.push('--no-cache');
    args.push('--no-lint');
    args.push('--replace-version=' + alloy.version);
    args.push('--replace-yuivar=A');
    args.push('--walk');

    spawn(cmd, args, cwd)
        .on('exit', function() {
            if (callback) {
                callback();
            }
        });
}

module.exports = build;
