/**
 * 
 */
(function(){
	'use strict';
	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', toBuyController)
	.controller('AlreadyBoughtController', alreadyBoughtController)
	.filter('custom', CustomFilterFactory)
	.service('ShoppingListService', ShoppingListService);
	
	// used to mitigate minification errors
	toBuyController.inject = ['ShoppingListService'];
	alreadyBoughtController.inject = ['ShoppingListService', 'customFilter'];
	function toBuyController(ShoppingListService){
		var buy = this;
		
		buy.boughtHandler = function(i){
			var item = ShoppingListService.shoppingList.splice(i, 1);
			
			ShoppingListService.boughtList.push(item[0]);
		};
		
		buy.shoppingList = ShoppingListService.shoppingList;
	};
	
	function alreadyBoughtController(ShoppingListService, customFilter){
		var bought = this;
		
		bought.boughtList = ShoppingListService.boughtList;
		
		bought.priceFilter = function(quantity, price){
			var data = {amount: quantity, cost: price};
			return customFilter(data);
		}
	};
	
	function CustomFilterFactory(){
		return function(data){
			data = data || "";
						
			return "$$$"+(data.amount*data.cost);
		}
	}
	
	function ShoppingListService() {
		var service = this;

		service.shoppingList = [
			  {
				    "name": "labore",
				    "quantity": 4,
				    "pricePerItem": 75
				  },
				  {
				    "name": "minim",
				    "quantity": 2,
				    "pricePerItem": 33
				  },
				  {
				    "name": "nisi",
				    "quantity": 2,
				    "pricePerItem": 91
				  },
				  {
				    "name": "anim",
				    "quantity": 2,
				    "pricePerItem": 31
				  },
				  {
				    "name": "eu",
				    "quantity": 2,
				    "pricePerItem": 45
				  },
				  {
				    "name": "minim",
				    "quantity": 5,
				    "pricePerItem": 16
				  },
				  {
				    "name": "irure",
				    "quantity": 4,
				    "pricePerItem": 11
				  },
				  {
				    "name": "voluptate",
				    "quantity": 2,
				    "pricePerItem": 81
				  },
				  {
				    "name": "commodo",
				    "quantity": 5,
				    "pricePerItem": 10
				  },
				  {
				    "name": "tempor",
				    "quantity": 3,
				    "pricePerItem": 52
				  },
				  {
				    "name": "voluptate",
				    "quantity": 1,
				    "pricePerItem": 23
				  },
				  {
				    "name": "est",
				    "quantity": 2,
				    "pricePerItem": 60
				  },
				  {
				    "name": "nulla",
				    "quantity": 3,
				    "pricePerItem": 88
				  },
				  {
				    "name": "tempor",
				    "quantity": 2,
				    "pricePerItem": 90
				  },
				  {
				    "name": "cillum",
				    "quantity": 4,
				    "pricePerItem": 84
				  },
				  {
				    "name": "duis",
				    "quantity": 2,
				    "pricePerItem": 15
				  },
				  {
				    "name": "commodo",
				    "quantity": 3,
				    "pricePerItem": 84
				  },
				  {
				    "name": "dolore",
				    "quantity": 1,
				    "pricePerItem": 36
				  },
				  {
				    "name": "proident",
				    "quantity": 1,
				    "pricePerItem": 18
				  },
				  {
				    "name": "do",
				    "quantity": 5,
				    "pricePerItem": 49
				  }
				];
		
		service.boughtList = [];

	}
})();