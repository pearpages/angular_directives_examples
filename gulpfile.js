(function (){
    var gulp = require('gulp');
    var args = require('yargs').argv;
    var $ = require('gulp-load-plugins')({lazy: true});

    var js = [
            'app/**/*.module.js',
            'app/**/*.js',
            '!app/**/*.spec.js'
        ];

    gulp.task('wiredep', function() {
        var options = {
            json: require('./bower.json'),
            directory: './bower_components/',
        };

        var wiredep = require('wiredep').stream; //.stream is to use it with gulp

        return gulp
            .src('index.html')
            .pipe(wiredep(options))
            //.pipe($.inject(gulp.src(js)))
            .pipe(gulp.dest('./'));
    });
}());