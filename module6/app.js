/**
 * 
 */
(function(){
	'use strict';
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', lunchCheckController);
	
	// used to mitigate minification errors
	lunchCheckController.inject = ['$scope', '$filter'];
	function lunchCheckController($scope, $filter){
		$scope.ph = "Please Enter a Comma Separated List of Menu Items";
		$scope.msg = "";
		$scope.order = "";
		$scope.emptyItemMsg = "Empty items don't count toward the total.";
		
		$scope.lunchCheckHandler = function(){
			
			$scope.msg = "";
			
			var orderItems = $scope.order.split(',');
			
			var realOrderItems = orderItems.filter(function(orderItem){
				return orderItem.trim() !== "";
			});
			
			if(orderItems.length === 0 || (orderItems.length === 1 && orderItems[0] === "")){
				$scope.msg = "Please enter data first.";
				$scope.color = "text-danger";
				$scope.border = "border border-warning";
			}else if(realOrderItems.length > 3){
				$scope.msg = "Too much!";
				$scope.color = "text-success";
				$scope.border = "border border-success";
			}else{
				$scope.msg = "Enjoy!";
				$scope.color = "text-success";
				$scope.border = "border border-success";
			}
		};
	};
})();