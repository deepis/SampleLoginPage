'use strict';

app.factory('viewService',function($http) {
    return {
        displaydata: function() {
           var req = {
               method: 'GET',
               url: 'scripts/data/authenticate.json',
           }
           console.log(req);
           return $http(req);
        },
    } 
});
