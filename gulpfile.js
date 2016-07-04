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
	browserSync = require('browser-sync').create(),
	nodemon = require('gulp-nodemon'),	
    watch = require('gulp-watch'),
	argv = require('yargs').argv;
	
	
var srcs = {
    scss: [
        'public/**/*.scss',
        '!public/node_modules/**/*.*',
        '!public/bower_components/**/*.*'
    ],
    templates: [
        'public/**/*.html',
        '!public/index.html'
    ],
    reload: [
        'public/**/*.{html,css,js}'
    ]
};


gulp.task('html-templates', [ 'sass'] , function() {
    return gulp.src(srcs.templates)
        .pipe(ngCache({
            filename: '.tmp/templates.js',
            module: 'inventory'
        }))
        .pipe(gulp.dest('public', { mode: 0644 }));
});

gulp.task('sass',function() {
    return gulp.src(srcs.scss)
        .pipe(sourcemaps.init())
        .pipe(concat('css.scss'))
        .pipe(strip())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename('css.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/.tmp', { mode: 0644 }));
});

gulp.task('index', [ 'html-templates'], function() {
    var target = gulp.src('public/index.html');
    var src = [ 'public/**/*.js', 'public/**/*.css', 'public/.tmp/**/*',
        '!public/node_modules/**/*', '!public/bower_components/**/*',
        '!public/*.js', '!public/*.css', '!public/**/*-spec.js' ];
    var sources = gulp.src(src, { read: false });

    return target
        .pipe(inject(gulp.src(mainBowerFiles(),
                { base: './public/bower_components', read: false }),
            { ignorePath: 'public', addRootSlash: false, name: 'bower' }
        ))
        .pipe(inject(sources, { ignorePath: 'public', addRootSlash: false }))
        .pipe(gulp.dest('public', { mode: 0644, dirMode: 0755 }));
});

gulp.task('dist', [ 'index' ], function() {

    var src = [ 'public/app/app.js', 'public/**/.js' ];
    return gulp.src(src)
		.pipe(sourcemaps.init())
        .pipe(concat('inventory.js'))
        .pipe(gulp.dest('dist', { mode: 0644 }))
        .pipe(strip())
        .pipe(uglify())
        .pipe(rename('inventory.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist', { mode: 0644 }));
    
});

gulp.task('deploy', [ 'dist' ], function() {

    var started = false;
	return nodemon({
		script: 'server.js',
		env: {'PASS' : argv.pw}
	}).on('start', function () {
		if (!started) {
			cb();
			started = true; 
		} 
	});
});

gulp.task('serve', [ 'deploy' ], function() {
	
	//process.stdin.isTTY = true;

	browserSync.init(null, {
		proxy: "http://localhost:3000",
        files: [srcs.reload],
        port: 7000
	});
    //gulp.watch(srcs.scss, [ 'sass' ]);
    //gulp.watch(srcs.templates, [ 'html-templates' ]);
	
});


// Restores to preinstall and prebuild state.
gulp.task('devclean', function(cb) {
    var src = [ 'node_modules', 'dist', '.DS_Store', '**/.DS_Store', 'npm-debug.log', 'public/bower_components' ];
    del(src, { force: true }, cb)
        .then(path => {
        console.log('Cleaned:\n', path.join('\n'));
    return cb();
});
});

gulp.task('karma-inject', function() {
    var sources = gulp.src([ './public/app/app.js', './public/bower_components/**/*', './public/**/*.js', 'public/.tmp/**/*' ]);

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

