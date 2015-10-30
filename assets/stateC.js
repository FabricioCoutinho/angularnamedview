(function(){
	'use strict';

	angular.module('myApp').config(config);

	function config($stateProvider){
		$stateProvider
		.state('stateC',{
			url: "/stateC",
			views : {
				"" : {
					templateUrl: "assets/stateC.html",
				},
				"viewC@stateC" : {
					template: "<h2> Conteudo do C1</h2>",
				}
			}
		});
	}

})();