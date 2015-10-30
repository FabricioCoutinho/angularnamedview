(function(){
	'use strict';

	angular.module('myApp').config(config);

	function config($stateProvider){
		$stateProvider
		.state('stateA',
		 {
		 	url: "/stateA",
			templateUrl: 'assets/stateA.html'
		});
	}

})();