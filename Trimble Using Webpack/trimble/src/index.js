// library files
require('../node_modules/angular/angular.js');
require('../node_modules/angular-ui-router/release/angular-ui-router.js');
require('../node_modules/ng-table/bundles/ng-table.js');
require('../node_modules/ng-table/bundles/ng-table.css');

$=require('jquery');

require('../node_modules/bootstrap/js/dropdown.js');
require('../node_modules/bootstrap/js/modal.js');


require('../src/css/app.sass');
require('../src/index.html');
require('../src/modules/header/header.tpl.html');
require('../src/modules/sidenav/left-sidenav.tpl.html');
require('../src/modules/dashboard');
require('../src/modules/network-configuration');
require('../src/modules/daignoistics');

var dashboard= require('../src/modules/dashboard/dashboard.tpl.html');
console.log(dashboard);

var app = angular.module('SNM941', [
    'ui.router',
    require('angular-sanitize'),
    'inSNM941.dashboard',
    'inSNM941.network_configuration',
    'inSNM941.daignostics'
]);


app.controller('mainCtrl', function() {
    this.sidebarToggle = {
        left: false,
    }

});


app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
        //	$urlRouterProvider.when('/daignostics','/daignostics/ping');
        $stateProvider
            .state('dashboard', {
                url: '/',
                templateUrl: './src/modules/dashboard/dashboard.tpl.html',
                controller: 'dashboardCtrl',
                controllerAs: 'dc'
            })

	        .state('networkconfig', {
	            url: '/network-configuration',
	            templateUrl: './src/modules/network-configuration/templates/network-configuration.tpl.html',
	            controller: 'networkConfigurationCtrl',
	            controllerAs: "nc"
	        })

	        .state('telematic', {
	                url: '/telematic',
	                templateUrl: './src/modules/telematic/telematic.tpl.html'
	        })

            .state('rebroadcast', {
                url: '/rtk-rebroadcast',
                templateUrl: './src/modules/rebroadcast/rebroadcast.tpl.html'
            })

	        .state('daignostics', {
	            url: '/daignostics',
	            templateUrl: './src/modules/daignoistics/view/daignostics.home.tpl.html'
	        })

	        .state('settings', {
	            url: '/settings',
	            templateUrl: './src/modules/settings/settings.tpl.html'
	        });
    }]);

module.exports = app;


console.log("hey");
