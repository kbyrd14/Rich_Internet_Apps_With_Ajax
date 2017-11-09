/**
 * 
 */
(function(){
	'use strict';
	angular.module('NarrowItDownApp', [])
	.controller('narrowItDownController', narrowItDownController)
	.service('menuSearchService', menuSearchService)
	.directive('foundItems', foundItemsDirective);
	
	
	// used to mitigate minification errors
	narrowItDownController.inject = ['menuSearchService'];
	function narrowItDownController(menuSearchService){
		var filter = this;
		
//		var srvc = menuSearchService.service;
		
		filter.searchTerm = "";
		
		filter.search = function(){
			filter.found = menuSearchService.getMatchedMenuItems(filter.searchTerm);
		};
		
		filter.removeItem = function (itemIndex) {
		    menuSearchService.removeItem(itemIndex);
		  };
	};
	
	
	menuSearchService.$inject = ['$http'];
	function menuSearchService($http) {
		var service = this;
		
		service.removeItem = function (itemIndex) {
		    items.splice(itemIndex, 1);
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
				onRemove: '&'
			},
			controller: narrowItDownDirectiveController,
			controllerAs: 'results',
			bindToController: true	
		};
		
		return ddo;
	}
	
	function narrowItDownDirectiveController() {
	  var results = this;

	  
//	    for (var i = 0; i < results.found.length; i++) {
//	      var name = filter.found.items[i].name;
//	      if (name.toLowerCase().indexOf("cookie") !== -1) {
//	        return true;
//	      }
//	    }

	    
	  };
	
})();