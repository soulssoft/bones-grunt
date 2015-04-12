/* grunt wrapper*/
module.exports = function(grunt) {

  /* project configuration*/
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /* Compiles your Sass in a neat css file */
    sass: {
      style: {
        files: {
          'library/css/style.css': 'library/scss/style.scss',
        }
      }
    },
 

    /* watches for changes to your Sass+HTML+JS files */
    watch: {
       sass: {
         files: ['library/scss/{,*/}*.scss'],
         tasks: ['sass'],
          options: {
            livereload: 35729
          }
        },
        
        livereload: {
          options: {
            livereload: 35729
          },
          files: [
            'library/css/style.css',
            'library/images/*.*',
            '{,*/}*.js',
            '{,*/}*.php'
          ]
        }
    }

});
 

/* loads in tasks you’ve defined in the package.json file */
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
// Default task
grunt.registerTask('default', ['watch']);

}