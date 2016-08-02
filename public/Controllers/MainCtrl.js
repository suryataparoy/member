var app = angular.module('SchoolApp', []);

app.controller('MainCtrl', function($scope) {
   $scope.items=[{}];
    $scope.addItem = function(item) {
        $scope.items.push(item);
        $scope.item = {};
    };
    console.log($scope.items);
    $scope.myCartItems = [];
    
    $scope.addmember = function(item)
    {
      $scope.myCartItems.push(item);
      $scope.items=[{}];
    }

    $scope.searchschool = function(){
           $scope.items=[{}];

        if($scope.myschool == $scope.item.school){
            $scope.myCartItems.push(item);               
        }
    }
});
