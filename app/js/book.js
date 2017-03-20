(function() {
	// body...
	'use strict';
	var app = angular.module('myApp',['ngRoute']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.when('/details/:id',{
  	templateUrl:'user.html',
  	controller : 'BookController'
  	
  })
  $routeProvider.when('/',{
  	templateUrl:'books.html'
  });
  // $routeProvider.otherwise({redirectTo: 'index.html'});
}]);
	app.controller('BookController',['$http','$scope','$route','$routeParams',function($http,$scope,$route,$routeParams) {
		var store = this;
		store.product =[];
		$http.get('http://localhost/angular-simple-book/book.json').success(function(data){
         store.product = data;
         console.log(data);

         $scope.id = $routeParams.id;
		console.log($scope.id);
		 
		});
		}]);
	app.controller('ScrollController', ['$scope', '$location', '$anchorScroll',function($scope, $location, $anchorScroll) {
      // call $anchorScroll()
      $anchorScroll();
    }
  ]);



	
	
	})();
