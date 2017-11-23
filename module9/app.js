/**
 * 
 */
(function(){
	'use strict';
	angular.module('MenuApp', ['ui.router'])
	.controller('narrowItDownController', narrowItDownController)
	.service('menuSearchService', menuSearchService)
	.directive('foundItems', foundItemsDirective);
	  
	angular.module('MenuApp').config(RoutesConfig);
	
	// used to mitigate minification errors
	narrowItDownController.inject = ['menuSearchService'];
	function narrowItDownController(menuSearchService){
		var filter = this;
		
//		var srvc = menuSearchService.service;
		
		filter.searchTerm = "";
		
		filter.search = function(){
			var promise = menuSearchService.getMatchedMenuItems(filter.searchTerm);
			promise.then(function(results){
				filter.found = results;
			});
		};
		
		filter.removeItem = function (itemIndex) {
		    menuSearchService.removeItem(itemIndex, filter.found);
		  };
	};
	
	
	menuSearchService.$inject = ['$http'];
	function menuSearchService($http) {
		var service = this;
		
		service.removeItem = function (itemIndex, results) {
		    results.splice(itemIndex, 1);
		  };
		
		service.getMatchedMenuItems = function(searchTerm){
			return $http({url:"https://davids-restaurant.herokuapp.com/menu_items.json"}).then(function (result) {
			    // process result and only keep items that match
			    var foundItems = [];
			    
			    for(var i=0; i<result.data.menu_items.length; i++){
			    	if(result.data.menu_items[i].description.includes(searchTerm)){
			    		foundItems.push(result.data.menu_items[i]);
			    	}
			    }

			    // return processed items
			    return foundItems;
			});
		};
	}
	
//	foundItemsDirective.$inject = [narrowItDownController];
	function foundItemsDirective(){
		var ddo = {
//			restrict: 'E',
			templateUrl: 'foundItems.html',
			scope: {
				items: '<',
				onRemove: '&',
				searchVal: '<'
			},
			controller: narrowItDownDirectiveController,
			controllerAs: 'results',
			bindToController: true	
		};
		
		return ddo;
	}
	
	function narrowItDownDirectiveController() {
		var results = this;
	  
		results.empty = function(searchTerm){
			if(searchTerm === ""){
				return true;
			}
			
			if(results.items.length === 0){
				  return true;
			  }
			  
			  return false;
		}
	  };

	  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	  function RoutesConfig($stateProvider, $urlRouterProvider) {

	    // Redirect to tab 1 if no other URL matches
	    $urlRouterProvider.otherwise('/home');

	    // Set up UI states
	    $stateProvider
	      .state('home', {
	        url: '/home',
	        templateUrl: '<div class="center-block"><h1>Welcome to Our Restaurant!</h1><a ui-sref="categories">Menu Categories</a><ui-view></ui-view></div>'
	      })

	      .state('categories', {
	        url: '/categories',
	        templateUrl: 'src/tab2.html'
	      })
	      
	      .state('items', {
	        url: '/items',
	        templateUrl: 'src/tab2.html'
	      });
	  }
	
})();