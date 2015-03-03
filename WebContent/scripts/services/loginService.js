
'use strict';

app.factory('loginService',function($http) {
    return {
        authenticate: function() {
           var req = {
               method: 'GET',
               url: 'scripts/data/authenticate.json',
               
           }
           return $http(req);
        },
    } 
});


















