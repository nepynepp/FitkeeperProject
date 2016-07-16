'use strict';

angular.module('app.authentication', [

  'app.authentication.controllers',
  'app.authentication.services'
]);

angular.module('app.authentication.controllers', ['LocalStorageModule', 'ionic']);
angular.module('app.authentication.services', ['LocalStorageModule', 'ionic']);
