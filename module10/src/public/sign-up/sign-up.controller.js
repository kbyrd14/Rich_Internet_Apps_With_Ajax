(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

//SignUpController.$inject = ['menuItems'];
function SignUpController() {
  var signUpCtrl = this;
  signUpCtrl.firstName = "";
  signUpCtrl.lastName = "";
  signUpCtrl.email = "";
  signUpCtrl.phone = "";
  signUpCtrl.favItem = "";
}

})();
