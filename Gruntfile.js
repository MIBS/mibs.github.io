module.exports = function(grunt) {

grunt.initConfig({
  php2html: {
    default: {
      options: {
        processLinks: true,
        haltOnError: false,
        htmlhint: {
            'attr-value-double-quotes': false
        }
      },
      files: [
        {expand: true, cwd: './uncompiled/', src: ['*.php'], dest: './', ext: '.html' }
      ]
    }
  },
})
grunt.loadNpmTasks('grunt-php2html');

grunt.registerTask( 'default', ['php2html'] );
}
