module.exports = function(grunt) {

    grunt.initConfig({
        zenika: {
            formation: {
                name: 'formation-html5-avancé'
            }
        }
    });

    grunt.loadTasks('node_modules/zenika-formation-framework');

    grunt.registerTask('default', ['displaySlides']);

};
