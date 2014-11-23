module.exports = function(grunt) {

    'use strict';

    // Project configuration
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        csslint: {
            strict: {
                // TODO: configure CSSLint options and then add to watch task
                options: {
                    'ids': false,
                    'zero-units': true
                    /* 'adjoining-classes': false,
                    'box-model': false,
                    'box-sizing': false,
                    'compatible-vendor-prefixes': true,
                    'empty-rules': true,
                    'errors': true,
                    'display-property-grouping': true,
                    'duplicate-background-images': true,
                    'duplicate-properties': true,
                    'fallback-colors': true,
                    'floats': false,
                    'font-faces': false,
                    'font-sizes': false,
                    'gradients': true,
                    'ids': false,
                    'import': false,
                    'important': false,
                    'known-properties': false,
                    'outline-none': false,
                    'overqualified-elements': false,
                    'qualified-headings': false,
                    'regex-selectors': false,
                    'shorthand': true,
                    'star-property-hack': true,
                    'text-indent': true,
                    'underscore-property-hack': true,
                    'unique-headings': false,
                    'universal-selector': true,
                    'unqualified-attributes': false,
                    'vendor-prefix': true,
                    'zero-units': true */
                },
                src: ['css/**/*.css']
            }
        },

        jshint: {
            // TODO: configure JSHint options and ignored files (vendors)
            /*options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                },
            },*/
            all: [
                'Gruntfile.js',
                'js/app.js',
                'js/boilerplate.js',
                'js/main.js',
                'js/router.js',
                'js/view/*.js',
                'template/js/*.js'
            ]
        },

        watch: {
            scripts: {
                files: ['js/**/*.js', 'template/js/*.js'],
                tasks: ['jshint']
            },
            livereload: {
                files: [
                    'img/**/*',
                    'font/**/*',
                    'css/**/*.css',
                    'js/**/*.js',
                    'template/**/*',
                    'index.php'
                ],
                options: {
                    livereload: true
                }
            }
        },

        connect: {
            dev: {
                options: {
                    port: 9001,
                    hostname: '*',
                    livereload: true,
                    open: {
                        target: 'http://127.0.0.1:9001'
                    }
                }
            },
            deploy: {
                options: {
                    port: 9002,
                    base: '_deploy',
                    hostname: '*',
                    open: {
                        target: 'http://127.0.0.1:9002'
                    }
                }
            }
        }

    });

    // Load plugin tasks
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Tasks
    grunt.registerTask('default', ['dev']);
    grunt.registerTask('dev', [
        'connect:dev',
        'csslint',
        'jshint',
        'watch'
    ]);
    grunt.registerTask('deploy', [
        'connect:deploy',
        'csslint',
        'jshint',
        'watch'
    ]);

};