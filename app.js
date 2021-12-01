const myFirstApp = angular.module('myFirstApp', ['ngRoute', 'ngResource']);

myFirstApp.config(['$sceDelegateProvider', function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://127.0.0.1:5000/**'
    ]);
}])

myFirstApp.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
}]);