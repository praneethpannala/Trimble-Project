require('./view/daignostics.home.tpl.html');

var controller = require('./daignostics.scantool.controller.js');

angular.module('daignostics.scantool.controller', []).
controller('scanToolCtrl', controller);

var app = angular.module('inSNM941.daignostics', [
    'ui.router',
    'ngTable',
    'daignostics.scantool.controller'
]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/daignostics', '/daignostics/ping');

    $stateProvider
        .state('daignostics.ping', {
            url: '/ping',
            templateUrl: './src/modules/daignoistics/view/ping.html'
        })

    .state('daignostics.networkinterface', {
        url: '/network-interface',
        templateUrl: './src/modules/daignoistics/view/network-interface.html'
    })

    .state('daignostics.scantool', {
        url: '/scan-tool',
        templateUrl: './src/modules/daignoistics/view/scantool.html'
    });
}]);

module.exports = app;
