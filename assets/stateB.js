(function(){
	'use strict';

	angular.module('myApp').config(config);

	function config($stateProvider){
		$stateProvider
		.state('stateB',{
			url: "/stateB",
			views: {
				"" : {
					templateUrl: 'assets/stateB.html'
				},
				"viewA@stateB": { 
					template: "<h2> conteudo da View A</h2>" 
				},
				"viewB@stateB": { 
					template: "<h2> conteudo da View B</h2>" 
				}
			}
		}


		)
	}

})();