'use strict';
console.log('111111111111111111');

app.controller('NextCtrl',function($scope,$location,$window,nextService,loginService){
	
    $controller('LoginCtrl', {$scope: $scope,$location:$location,$window:$window,loginService:loginService});       

	nextService.displaydata().success(function(data,status){
		if(!data) 
			return;
		else{
			for(var i=0;i<data.length;i++){
				console.log($window.sessionStorage.username);
				var username = $window.sessionStorage.username;
				if(data[i].UserName == username){
					console.log(data[i]);
					$scope.data = data[i];
					return;
				}else{
    				console.log('No data available');
				}
			}
			
		}
		
		//console.log('data'+data);
		//$scope.data = data;
	}).error(function(data,status){
		
	});
		
	
});

