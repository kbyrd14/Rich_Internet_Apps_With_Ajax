(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);

SignUpService.$inject = ['$http'];
function SignUpService($http) {
  var signUpSrvc = this;
  
  signUpSrvc.getFavMenuItem = function(searchTerm){
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
