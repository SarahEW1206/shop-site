angular.module('productApp').component('productFeat', {
    templateUrl: "product-home/product-feat.template.html",
    controller: ['$http',
        function ProductFeatController($http) {
            var self = this;

            self.setImage = function setImage(imageSrc) {
                self.bigPic = imageSrc;
            }

            $http.get('data/featured.json').then(function (response) {
                self.featured = response.data;
                self.setImage("img/bluefloral.jpg");
            });


        }
    ]
});

