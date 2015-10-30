(function(){
	'use strict';

	angular.module('myApp').config;

	function config($stateProvider){
		$stateProvider
		.state('details',{
			// parent: 'stateC',
			views : {
				"details@stateC" : {
					template: "<h2> Conteudo do Details C </h2>",
					controller: function() { console.log("carrega C1");}

				}
			}
		})
	}
})();