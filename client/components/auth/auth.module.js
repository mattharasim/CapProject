'use strict';

angular.module('capProjectApp.auth', [
  'capProjectApp.constants',
  'capProjectApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
