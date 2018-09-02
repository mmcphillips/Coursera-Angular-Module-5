(function () {
'use strict';
angular.module('public').controller('RegisterController', RegisterController);

RegisterController.$inject = ['MenuService', 'InfoService'];

function RegisterController(MenuService, InfoService) {
  var $ctrl = this;
  $ctrl.info = {};

  $ctrl.submit = function() {
      MenuService.getMenuItem($ctrl.info.favoriteDish)
        .then(function(response) {
          $ctrl.submitted = true;
          $ctrl.invalidFavoriteDish = false;
          InfoService.setInfo($ctrl.info);
        })
        .catch(function() {
          $ctrl.invalidFavoriteDish = true;
        });
    }
    $ctrl.validateFavorite = function() {
      MenuService.getMenuItem($ctrl.info.favoriteDish)
        .then(function () {
          $ctrl.invalidFavoriteDish = false;
        })
        .catch(function() {
          $ctrl.invalidFavoriteDish = true;
        });
    }
  };
})();
