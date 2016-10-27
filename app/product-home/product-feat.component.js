angular.module('productApp').component('productFeat', {
    templateUrl: "product-home/product-feat-template.html",
    controller: ['$http',
        function ProductFeatController($http) {
            var self = this;


            $http.get('data/featured.json').then(function (response) {
                self.featured = response.data;
            });

        }

    ]
});