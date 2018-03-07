// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt){
  //Configure grunt
  grunt.initConfig({
      // get the configuration info from package.json file
     // this way we can use things like name and version (pkg.name)
     pkg: grunt.file.readJSON('package.json'),

     jshint: {
       // configuration for jshint task
     },
     cssmint: {
          // configuration for cssmin task
     },
     // Arbitrary non-task-specific properties
     my_files

     // all of our configuration goes here
     uglify: {
       //uglify task configuration
       options: {},
       build: {}
     }
  });

  // log Something
    // grunt.log.write('Hello world! Welcome');
// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-uglify');
//Default task(s)
grunt.registerTask('default', ['uglify']);
}
