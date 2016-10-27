angular.module('productApp').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.
                when('/', {
                    template: '<product-feat></product-feat>'
                }).
                when('/music', {
                    template: '<music-list></music-list>'
                }).
                when('/music/:musicId', {
                    template: '<music-detail></music-detail>'
                }).
                otherwise('/);
        }
    ]);