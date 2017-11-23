(function(){
	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {
	
	    // Redirect to tab 1 if no other URL matches
	$urlRouterProvider.otherwise('/home');
	
	// Set up UI states
	$stateProvider
	  .state('home', {
	    url: '/home',
	    templateUrl: 'home.html'
	  })
	
	  .state('categories', {
	    url: '/categories',
	    templateUrl: 'categories.html'
	  })
	  
	  .state('items', {
	    url: '/items',
	    templateUrl: 'items.html'
	      });
	  }
})();