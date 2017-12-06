(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
  var signUpCtrl = this;
  signUpCtrl.firstName = "";
  signUpCtrl.lastName = "";
  signUpCtrl.email = "";
  signUpCtrl.phone = "";
  signUpCtrl.favItem = "";
  signUpCtrl.favError = "";
  signUpCtrl.savedMsg = "";
  
  var responsePromise;
  
  function register(){
	  signUpCtrl.favError = "";
	  
	  SignUpService.savedName = signUpCtrl.firstName + " " + signUpCtrl.lastName;
	  signUpCtrl.firstName = "";
	  signUpCtrl.lastName = "";
	  
	  SignUpService.savedEmail = signUpCtrl.email;
	  signUpCtrl.email = "";
	  
	  SignUpService.savedPhone = signUpCtrl.phone;
	  signUpCtrl.phone = "";
	  
	  signUpCtrl.savedMsg = "Your information has been saved";
  }
  
  signUpCtrl.findFav = function(){
	  if(signUpCtrl.favItem && signUpCtrl.favItem.length === 2){
		  responsePromise = SignUpService.findFavItemPromise(signUpCtrl.favItem.toUpperCase());
		  
		  responsePromise.then(function success(response){
			  signUpCtrl.favError = "";
			  SignUpService.savedFav = response.data;
			  
		  }, function error(response){
			  signUpCtrl.favError = "No such number exists";
		  });
	  }
  }
  
  signUpCtrl.submit = function(){
	  signUpCtrl.savedMsg = "";
	  
	  if(!SignUpService.savedFav){
		  responsePromise = SignUpService.findFavItemPromise(signUpCtrl.favItem.toUpperCase());
		  
		  responsePromise.then(function success(response){
			  register();
			  
			  SignUpService.savedFav = response.data;
			  signUpCtrl.favItem = "";
			  
		  }, function error(response){
			  signUpCtrl.favError = "No such number exists";
		  }); 
	  }else{
		  register();
	  }
	  
  }
  
  
}

})();