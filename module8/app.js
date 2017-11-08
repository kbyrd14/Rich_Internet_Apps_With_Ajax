/**
 * 
 */
(function(){
	'use strict';
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', narrowItDownController)
	.filter('custom', CustomFilterFactory)
	.service('MenuSearchService', MenuSearchService);
	
	// used to mitigate minification errors
	narrowItDownController.inject = ['MenuSearchService'];
	function narrowItDownController(MenuSearchService){
		var filter = this;
		
//		var srvc = MenuSearchService.service;
		
		filter.searchTerm = "";
		
		filter.search = function(){
			filter.found = MenuSearchService.getMatchedMenuItems(filter.searchTerm);
		};
	};
	
	function CustomFilterFactory(){
		return function(data){
			data = data || "";
						
			return "$$$"+(data.amount*data.cost);
		}
	}
	
	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http) {
		var service = this;
		
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
})();