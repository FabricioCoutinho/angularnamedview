(function(){
	'use strict';

	angular.module('myApp').config(config);

	function config($stateProvider){
		$stateProvider
			.state('stateC',{
				url: "/stateC",
				templateUrl: "assets/stateC.html"
			});

	}

})();