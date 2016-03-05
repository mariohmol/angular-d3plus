'use strict';

var fs = require('fs');
var path = require('path');


module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'src',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json']
      },
      js: {
        files: ['<%= yeoman.app %>/src/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      config: {
        files: ['<%= yeoman.app %>/config/*.json'],
        tasks: ['build-config'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
      },
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/src/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: '<%= yeoman.app %>/test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      after: {
        files: [{
          src: ['<%= yeoman.dist %>/angular-d3plus.js']
        }]
      },
      server: '.tmp',
      lbclient: 'lbclient/browser.bundle.js',
      config: '<%= yeoman.app %>/config/bundle.js'
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    uglify: {
      dist: {
        files: {
          '<%= yeoman.dist %>/angular-d3plus.min.js': [
            '<%= yeoman.dist %>/angular-d3plus.js'
          ]
        }
      }
    },
    concat: {
      dist: {
        src : [
          '<%= yeoman.app %>/*.js',
        ],
        dest : '<%= yeoman.dist %>/angular-d3plus.js',
        options : {
          separator : '\n\n'
        }
      },
    },
    

    // ngAnnotate tries to make the code safe for minification automatically by
    // using the Angular long form for dependency injection. It doesn't work on
    // things like resolve or inject so those have to be done manually.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: 'scripts.js',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },


    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.js'
          ]
        }]
      }
    }

  });


  grunt.registerTask('default', [
    'clean:dist',
    'concat:dist',
    'ngAnnotate',
    'copy:dist',
    'uglify:dist',
    'clean:after'
  ]);
};