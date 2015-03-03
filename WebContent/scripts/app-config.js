'use strict';

app.config(['$routeProvider', function($routeProvider) {
	
	$routeProvider
    	//.when('/', {
    	//	templateUrl: 'viewFile/login.html'
       // })
        .when('/login', {
        	controller: 'LoginCtrl',
            templateUrl: 'viewFile/login.html'
        })
        .when('/viewPage',{
        	controller: 'ViewCtrl',
        	templateUrl: 'viewFile/nextFile.html'
        })
        .otherwise({
        	redirectTo: 'viewFile/login.html'
       });
    }

])
.run(function ($rootScope, $location, $window) {
   	
    delete $window.sessionStorage.SessionKey;
    $rootScope.$on( '$routeChangeStart', function(){
        // possible to have session key
        if(!$window.sessionStorage.SessionKey ) {
        	$location.path('/login');
        }
    });
});


/*'use strict';

app.config(['routeProvider',function($routeProvider){
	$routeProvider
		.when('/login',{
			controller: 'LoginCtrl',
			templateUrl: 'viewFile/login.html'
		}).otherwise({
            redirectTo: 'viewFile/login.html'
        });

}])
.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
  
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);
*/


