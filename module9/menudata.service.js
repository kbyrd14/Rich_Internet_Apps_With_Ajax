(function(){
	
	angular.module('data')
	.service('MenuDataService', menuDataService);
	
	menuDataService.$inject = ['$http'];

	function menuDataService($http) {
		var service = this;
		
		service.getAllCategories = function () {
			return $http({url:"https://davids-restaurant.herokuapp.com/categories.json"}).then(function (result) {
			    // process result and only keep items that match
			    var categories = [];
			    
			    for(var i=0; i<result.data.length; i++){
			    	if(result.data.menu_items[i].description.includes(searchTerm)){
			    		categories.push(result.data[i]);
			    	}
			    }

			    // return processed items
			    return categories;
			});
		  };
		
		service.getItemsForCategory = function(categoryShortName){
			return $http({url:"https://davids-restaurant.herokuapp.com/menu_items.json?category="}).then(function (result) {
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
});