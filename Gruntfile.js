// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt){
  //Configure grunt
  grunt.initConfig({
      // get the configuration info from package.json file
     // this way we can use things like name and version (pkg.name)
     pkg: grunt.file.readJSON('package.json'),

     uglify : {
       options: {
         manage: false
       },
        my_target: {
          files: {
            'src/css/style.css' : ['src/sass/_global.scss', 'src/sass/_hero_nav.scss',  'src/sass/style.scss']
          }
        }
     }

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
              cwd: '/src/css',
              src: ['*.css', '!*.min.css'],
              dest: 'css',
              ext: '.min.css'
            }]
          }
     },

  });

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-browser-sync');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');

//Default task(s)
grunt.registerTask('default', ['uglify']);
grunt.registerTask('default', ['browserSync', 'watch']);
}
