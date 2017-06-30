// Karma configuration
// Generated on Thu Jun 29 2017 17:12:43 GMT+0200 (Central Europe Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0/angular.js',
        'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0/angular-mocks.js',
        'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0/angular-route.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/angular-smart-table/2.1.8/smart-table.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/angular-messages/1.4.2/angular-messages.min.js',
        'http://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-2.5.0.js',
        'http://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-sanitize.js',
        'https://cdnjs.cloudflare.com/ajax/libs/ngStorage/0.3.11/ngStorage.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-select/0.20.0/select.min.js',
        '../app/app.js',
        '../app/*.js',
        'unit/**'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
