// Karma configuration
module.exports = function(config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files,
		// exclude)
		basePath : '',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks : [ 'jasmine' ],

		// list of files / patterns to load in the browser
		files : [
			// gulp-inject:mainBowerFiles
			"src/bower_components/angular/angular.min.js",
			"src/bower_components/angular-mocks/angular-mocks.js",
			// gulp-inject:mainBowerFiles:end
            'src/app/*.js',
            'src/app/components/modules/*/*.js',
            'src/app/components/**/*.js',
            'src/.tmp/templates.js'
		],

		// list of files to exclude
		exclude : [],

		// preprocess matching files before serving them to the browser
		// available preprocessors:
		// https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors : {
			// source files, that you wanna generate coverage for
			// do not include tests or libraries
			// (these files will be instrumented by Istanbul)
			'src/app/**/!(*-spec).js' : [ 'coverage' ]
		},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters : [ 'progress', 'coverage','junit' ],

		coverageReporter : {
			type : 'html',
			dir : 'TestResults/UnitTestCoverage/',
			subdir : 'PhantomJS'
		},

        junitReporter: {
            outputDir: 'TestResults/UnitTestCoverage/PhantomJS',
            outputFile: 'JUnitReport.xml',
            useBrowserName: false
        },

		// web server port
		port : 9876,

		// enable / disable colors in the output (reporters and logs)
		colors : true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR ||
		// config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel : config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file
		// changes
		autoWatch : true,

		// start these browsers
		// available browser launchers:
		// https://npmjs.org/browse/keyword/karma-launcher
		browsers : [ 'PhantomJS' ],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun : false
	});
};
