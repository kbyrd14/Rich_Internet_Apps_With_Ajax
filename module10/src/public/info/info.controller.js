(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['SignUpService', 'ApiPath'];
function InfoController(SignUpService, ApiPath) {
  var infoCtrl = this;
  
  infoCtrl.name = SignUpService.savedName;
  infoCtrl.email = SignUpService.savedEmail;
  infoCtrl.phone = SignUpService.savedPhone;
  infoCtrl.favTitle = SignUpService.savedFav.name;
  infoCtrl.favDescription = SignUpService.savedFav.description;
  
  if(SignUpService.savedFav.image_present){
	  var shortName = SignUpService.savedFav.short_name;
	  infoCtrl.favImage = ApiPath+"/images/"+shortName+".jpg";
  }
 
}

})();
