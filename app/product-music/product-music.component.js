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

            self.setPrice = function setPrice(price) {
                self.amount = price;
            }

            self.setArtist = function setArtist(name) {
                self.artist = name;
            }

            self.setLink = function setLink(buylink) {
                self.link = buylink;
            }

            self.setYear = function setYear(year) {
                self.release = year;
            }

            $http.get('data/music.json').then(function (response) {
                self.albums = response.data;
                self.setImage("img/albumclash.jpg");
                self.setDesc("London Calling");
                self.setPrice("$14.99");
                self.setArtist("The Clash");
                self.setLink("#!/music");
                self.setYear("1979")
            });
        }

    ]
});