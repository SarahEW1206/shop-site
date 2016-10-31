angular.module('productApp').component('productMusic', {
    templateUrl: "product-music/product-music.template.html",
    controller: ['$http',
        function ProductMusicController($http) {
            var self = this;

            self.setImage = function setImage(imageSrc) {
                self.mainImageUrl = imageSrc;
            }

            self.setDesc = function setDesc(info) {
                self.description = info;
            }

            $http.get('data/music.json').then(function (response) {
                self.albums = response.data;
                self.setImage("img/albumclash.jpg");
                self.setDesc("London Calling");
            });
        }

    ]
});