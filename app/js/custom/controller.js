var app = angular.module('funspots'),
    LesiureSpotsUrl = 'https://spotslocator.herokuapp.com/';

  app.controller('homeCtrl', ['$scope', '$http', function ($scope, $http){
    $scope.show = false;
    $scope.spots = [];
    var update = function(){
      $http.get(LesiureSpotsUrl).success( function (data){
        $scope.spots = data;
        console.log($scope.spots);
      }).error(function (data){
          console.log("error: "+ data);
        });
    };
    update();
  }]);


  app.controller('listCtrl', ['$scope', '$http', function ($scope, $http){
    $scope.show = false;
    $scope.spots = [];
    var update = function(){
      $http.get(LesiureSpotsUrl).success( function (data){
        $scope.spots = data;
        console.log($scope.spots);
      }).error(function (data){
          console.log("error: "+ data);
          alert("Cannot get list. Please try again later");
        });
    };
    update();

    $scope.edit = function (id, Image, Name, Address, Phone_Number, Email, Website, Costs, working_hours, Menu, Rating, Description, Tags){
      $scope.id = id;
      $scope.image = Image;
      $scope.name = Name;
      $scope.address = Address;
      $scope.phone_number = Phone_Number;
      $scope.email = Email;
      $scope.website = Website;
      $scope.costs = Costs;
      $scope.working_hours = working_hours;
      $scope.menu = Menu;
      $scope.rating = Rating;
      $scope.description = Description;
      $scope.tags = Tags; 
      console.log(id); 
      $scope.show = true;
    };

    $scope.editSpot = function(){
      $http({
        method  : 'PUT',
        url     : 'https://spotslocator.herokuapp.com/' + $scope.id,
        data    : $.param({ Name: $scope.name, 
                            Address: $scope.address, 
                            Description: $scope.description, 
                            Costs: $scope.costs, 
                            Rating: $scope.rating,
                            Tags: $scope.tags, 
                            Image: $scope.image, 
                            Email: $scope.email, 
                            Website: $scope.website, 
                            working_hours: $scope.working_hours,
                            Phone_Number: $scope.phone_number, 
                            Menu: $scope.menu
                          }),  
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
      })
      .success(function () {
        update();
        $scope.name = '';
        $scope.address = '';
        $scope.description = '';
        $scope.costs = '';
        $scope.rating = '';
        $scope.tags = '';
        $scope.image = '';
        $scope.email = '';
        $scope.website = '';
        $scope.working_hours = '';
        $scope.menu = '';
        $scope.working_hours = '';
        $scope.show = false;
        alert("Update was successful");
      })
      .error(function () {
        console.log('Error occured');
        alert("Update failed. Please try again");
      });
    };
  }]);


  app.controller('formCtrl', ['$scope', '$http', function ($scope, $http){
    $scope.newSpot = function () {
      $http({
        method  : 'POST',
        url     : 'https://spotslocator.herokuapp.com/',
        data    : $.param({ Name: $scope.name, 
                            Address: $scope.address, 
                            Description: $scope.description, 
                            Costs: $scope.costs, 
                            Rating: $scope.rating,
                            Tags: $scope.tags, 
                            Image: $scope.image, 
                            Email: $scope.email, 
                            Website: $scope.website, 
                            working_hours: $scope.working_hours,
                            Phone_Number: $scope.phone_number, 
                            Menu: $scope.menu
                          }),  
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
      })
      .success(function () {
        console.log('Hotspot created');
        $scope.name = '';
        $scope.address = '';
        $scope.description = '';
        $scope.costs = '';
        $scope.rating = '';
        $scope.tags = '';
        $scope.phone_number = '';
        $scope.image = '';
        $scope.email = '';
        $scope.website = '';
        $scope.working_hours = '';
        $scope.menu = '';
        $scope.show = false;
        $scope.success = true;
        alert($scope.name + "Funspot has been created");
      })
      .error(function () {
        $scope.error = true;
        console.log('Error occured');
        alert("Error occured");
      });
    };
  }]);