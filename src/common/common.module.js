(function() {
'use strict';
//create module and set endpoints to herokuapp
angular.module('common', [])
.constant('ApiPath', 'https://mmcphillips-course5.herokuapp.com')
.config(config);
//Loading spinner stuff
config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
