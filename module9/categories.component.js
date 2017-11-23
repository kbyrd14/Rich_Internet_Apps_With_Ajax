(function(){
	angular.module('MenuApp')
	.component('categoriesComponent', {
		templateUrl:'categories.html',
		bindings:{
			items: '<'
		}
	});
	
} );