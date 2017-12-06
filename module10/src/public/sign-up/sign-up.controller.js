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
  
  signUpCtrl.submit = function(){
	  signUpCtrl.savedMsg = "";
	  responsePromise = SignUpService.findFavItemPromise(signUpCtrl.favItem);
	  
	  responsePromise.then(function success(response){
		  signUpCtrl.favError = "";
		  
		  SignUpService.savedName = signUpCtrl.firstName + " " + signUpCtrl.lastName;
		  signUpCtrl.firstName = "";
		  signUpCtrl.lastName = "";
		  
		  SignUpService.savedEmail = signUpCtrl.email;
		  signUpCtrl.email = "";
		  
		  SignUpService.savedPhone = signUpCtrl.phone;
		  signUpCtrl.phone = "";
		  
		  SignUpService.savedFav = response.data;
		  signUpCtrl.favItem = "";
		  
		  signUpCtrl.savedMsg = "Your information has been saved";
		  
	  }, function error(response){
		  signUpCtrl.favError = "No such number exists";
	  });
  }
  
  
}

})();
