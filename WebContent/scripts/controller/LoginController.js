'use strict';

app.controller('LoginCtrl', function($scope, $location, $window,loginService) {

    $scope.isAuthenticated = false;
   
    $scope.login = function () {
    	
    	var username = $scope.username;
    	var password = $scope.password;
    	
    	if(!username || !password){
    		$scope.validationError = "Username and Password cannot be empty";
    		return;
    	}else if(username && password){
    		loginService.authenticate().success(function(data,status){
    			
    			if(!data) 
    				return;
    			else{
    				for(var i=0;i<data.length;i++){
    					
    				if(data[i].UserName == username){
    					$scope.isAuthenticated = true;
        				$window.sessionStorage.username=username;
        				$window.sessionStorage.token = data.UserToken;
        				$location.path('/viewPage');
    				}
    				else{
    					$scope.validationError = 'Register their details';
    				}
    				}
    				
    			}
    		}).error(function(data,status){
    			$scope.isAuthenticated = false;
    			delete $window.sessionStorage.token;
                $scope.validationError = 'Error: Invalid username or password';

    		});
    	}
    };

    $scope.logout = function () {
        $scope.isAuthenticated = false;
        delete $window.sessionStorage.token;
    };
});


app.controller('ViewCtrl', function($scope, $location, $window,viewService) {
	
	viewService.displaydata().success(function(data,status){
		if(!data) 
			return;
		else{
			for(var i=0;i<data.length;i++){
				var username = $window.sessionStorage.username;
				if(data[i].UserName == username){
					console.log(data[i]);
					$scope.data = data[i];
					return;
				}else{
					$scope.data = "No data available";
    				console.log('No data available');
				}
			}
			
		}
	}).error(function(data,status){
		
	});

});
