(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);

SignUpService.$inject = ['$http', 'ApiPath'];
function SignUpService($http, ApiPath) {
  var signUpSrvc = this;
  
  signUpSrvc.savedName = "";
  signUpSrvc.savedEmail = "";
  signUpSrvc.savedPhone = "";
  signUpSrvc.savedFav = {};
  
  signUpSrvc.findFavItemPromise = function(searchTerm){
		return $http({url:ApiPath+"/menu_items/"+searchTerm+".json"});
  };
}

})();
