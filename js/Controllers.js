
var app = angular.module('portfolioApp', []);
app.controller('GalleryListCtrl', function ($scope, $http) {


      $http.get('json/galleries.json').then(function(result) {
      $scope.galleries = result.data;
  });
  $http.get('json/sortlist.json').then(function(result2) {
  $scope.sortList  = result2.data;
});
});
