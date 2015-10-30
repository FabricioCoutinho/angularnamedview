(function(){
	'use stict';

	angular.module('myApp', ['ui.router'])
	.run(
		[          '$rootScope', '$state', '$stateParams',
		function ($rootScope,   $state,   $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.user_logged = true;
}
])

    .config(function($stateProvider, $urlRouterProvider, $locationProvider){
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'assets/home.html',
          // controller: 'HomeController'
        });

      // default fallback route
      $urlRouterProvider.otherwise('/');

      // enable HTML5 mode for SEO
      // $locationProvider.html5Mode({ enabled: true, requireBase: false });

    });

})();
