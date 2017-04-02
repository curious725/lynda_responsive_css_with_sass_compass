module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'src/js/script.js': ['src/components/js/*.js'],
        } // files
      } //my_target
    }, // uglify

    compass: {
      dev: {
        options: {
          config: 'config.rb'
        } // options
      } // dev
    }, // compass

    watch: {
      options: { 
        livereload: {
          host: 'localhost',
          port: 9000,
        }
      }, // options
      scripts: {
        files: ['src/components/js/*.js'],
        tasks: ['uglify'],
      }, // scripts
      sass: {
        files: ['src/components/sass/*.scss'],
        tasks: ['compass:dev']
      },  // sass
      html: {
        files: ['*html']
      }

    }
  }) // initConfig

  grunt.registerTask('default', 'watch');

} // exports
