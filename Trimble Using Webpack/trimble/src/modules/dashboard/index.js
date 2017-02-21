require('./dashboard.tpl.html');

var controller= require('./dashboard.controller.js');

var service= require('./dashboard.service.js');

angular.module('inSNM941.dashboard.controller',[]).
	controller('dashboardCtrl',controller);

angular.module('inSNM941.dashboard.service',[]).
	service('dashboardService',service);


var app= angular.module('inSNM941.dashboard',[
	'inSNM941.dashboard.controller',
	'inSNM941.dashboard.service'
]);



module.exports= app;	