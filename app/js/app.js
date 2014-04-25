require.config({
    baseUrl : 'js',
    paths : {
        'angular' : 'vendor/angular',
        'uiBootstrap' : 'vendor/ui-bootstrap-tpls-0.10.0'
    },
    shim : {
        'angular' : {
            'exports' : 'angular'
        },
        'uiBootstrap' : {
            'exports' : 'uiBootstap'
        }
    }
});
require(['main'],function (main) {
    main.init();
})