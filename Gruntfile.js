// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt){
  //Configure grunt
  grunt.initConfig({
      // get the configuration info from package.json file
     // this way we can use things like name and version (pkg.name)
     pkg: grunt.file.readJSON('package.json'),

     uglify: {
       dev: {
         mangle: false,
         compress: false,
         beutify: true,
         preserveComments: 'all',
         report: 'gzip'
       },
       dist: {
         files: 'src/css/style.css',
         
       }
     },

    watch : {
      sass : {
        files: 'src/sass/*.scss',
        tasks: ['sass']
      }
    },

    sass: {
        dev: {
          files: {
            'src/css/style.css' : 'src/sass/style.scss'
          }
        }
    },
     browserSync: {
       dev: {
         files: {
           src : [
             'src/css/*.css',
             '*.html'
           ]
         },
         options: {
           watchTask: true,
           server: './'
         }
       }
     },

     cssmin: {
          // configuration for cssmin task
          my_target: {
            files: [{
              expand: true,
              cwd: 'src/css',
              src: ['*.css', '!*.min.css'],
              dest: 'src/css',
              ext: '.min.css'
            }]
          }
     },

     bowerInstall : {
        my_target:{
          src:[
            '*.html',
            'src/sass/style.scss'
          ],
          cwd: '',
          dependencies: true,
          devDependencies: false,
          exclude: [],
          fileTypes: {},
          ignorePath: '',
          overrides: {}
        }
     }

  });

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-browser-sync');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-bower-install');

//Default task(s)
grunt.registerTask('default', ['uglify']);
grunt.registerTask('default', ['browserSync', 'watch']);
}
