module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'src/js/script.js': ['src/components/js/*.js'],
        } // files
      } //my_target
    } // uglify
  }) // initConfig

} // exports
