/**
 * 
 */
(function(){
	'use strict';
	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', toBuyController)
	.filter('custom', CustomFilterFactory);
	
	// used to mitigate minification errors
	toBuyController.inject = ['$scope', 'customFilter'];
	alreadyBoughtController.inject = ['$scope', 'customFilter'];
	function toBuyController($scope, $filter){
		$scope.boughtHandler = function(){
			
		};
		
		};
	};
	
	function alreadyBoughtController($scope, $filter){
		
	};
	
	function CustomFilterFactory(){
		return function(data){
			data = data || "";
			return data;
		}
	}
})();