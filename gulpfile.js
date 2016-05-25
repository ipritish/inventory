var download = require('gulp-download'),
    concat = require('gulp-concat'),
    del = require('del'),
    exec = require('child_process').exec,
    fs = require('fs'),
    gulp = require('gulp'),
    inject = require('gulp-inject'),
    mainBowerFiles = require('main-bower-files'),
    ngCache = require('gulp-angular-templatecache'),
    path = require('path'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    strip = require('gulp-strip-comments'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch');
	
var srcs = {
    scss: [
        'src/**/*.scss',
        '!src/node_modules/**/*.*',
        '!src/bower_components/**/*.*'
    ],
    templates: [
        'src/**/*.html',
        '!src/index.html'
    ],
    reload: [
        'src/**/*.{html,css,js}'
    ]
};


gulp.task('html-templates', [ 'sass'] , function() {
    return gulp.src(srcs.templates)
        .pipe(ngCache({
            filename: '.tmp/templates.js',
            module: 'accounts'
        }))
        .pipe(gulp.dest('src', { mode: 0644 }));
});

gulp.task('sass',function() {
    return gulp.src(srcs.scss)
        .pipe(sourcemaps.init())
        .pipe(concat('css.scss'))
        .pipe(strip())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename('css.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('src/.tmp', { mode: 0644 }));
});

gulp.task('index', [ 'html-templates'], function() {
    var target = gulp.src('src/index.html');
    var src = [ 'src/**/*.js', 'src/**/*.css', 'src/.tmp/**/*',
        '!src/node_modules/**/*', '!src/bower_components/**/*',
        '!src/*.js', '!src/*.css', '!src/**/*-spec.js' ];
    var sources = gulp.src(src, { read: false });

    return target
        .pipe(inject(gulp.src(mainBowerFiles(),
                { base: './src/bower_components', read: false }),
            { ignorePath: 'src', addRootSlash: false, name: 'bower' }
        ))
        .pipe(inject(sources, { ignorePath: 'src', addRootSlash: false }))
        .pipe(gulp.dest('src', { mode: 0644, dirMode: 0755 }));
});

gulp.task('dist', [ 'index' ], function() {

    var src = [ 'src/app/app.js', 'src/**/.js' ];
    return gulp.src(src)
		.pipe(sourcemaps.init())
        .pipe(concat('accounts.js'))
        .pipe(gulp.dest('dist', { mode: 0644 }))
        .pipe(strip())
        .pipe(uglify())
        .pipe(rename('accounts.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist', { mode: 0644 }));
    
});

gulp.task('deploy', [ 'dist' ], function() {
    console.log("deploying TODO: ");
});

gulp.task('serve', [ 'deploy' ], function() {

    //gulp.watch(srcs.scss, [ 'sass' ]);
    //gulp.watch(srcs.templates, [ 'html-templates' ]);
	
});


// Restores to preinstall and prebuild state.
gulp.task('devclean', function(cb) {
    var src = [ 'node_modules', 'dist', '.DS_Store', '**/.DS_Store', 'npm-debug.log', 'src/bower_components' ];
    del(src, { force: true }, cb)
        .then(path => {
        console.log('Cleaned:\n', path.join('\n'));
    return cb();
});
});

gulp.task('karma-inject', function() {
    var sources = gulp.src([ './src/app/app.js', './src/bower_components/**/*', './src/**/*.js', 'src/.tmp/**/*' ]);

    return gulp.src('./karma.conf.js')
        .pipe(inject(gulp.src(mainBowerFiles({
            filter: /.js$/
        })), {
            starttag: '// gulp-inject:mainBowerFiles',
            endtag: '// gulp-inject:mainBowerFiles:end',
            addRootSlash: false,
            transform: function(filepath, file, i, length) {
                return '  "' + filepath + '",';
            }
        }))
        .pipe(gulp.dest('./', { mode: 0644, dirMode: 0755 }));
});

