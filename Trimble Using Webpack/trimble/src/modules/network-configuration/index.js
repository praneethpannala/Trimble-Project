require('./templates/network-configuration.tpl.html');

var controller= require('./network-configuration.controller.js');

angular.module('network-configuration.controller',[]).
	controller('networkConfigurationCtrl',controller);

var app= angular.module('inSNM941.network_configuration', [
			'ngTable',
			'network-configuration.controller'
		]);

module.exports= app;
