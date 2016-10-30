angular.module('productApp').component('productFeat', {
    templateUrl: "product-home/product-feat.template.html",
    controller: ['$http',
        function ProductFeatController($http) {
            var self = this;

            self.setImage = function setImage(imageSrc) {
                self.mainImageUrl = imageSrc;
            }

            self.setDesc = function setDesc(info) {
                self.description = info;
            }

            $http.get('data/featured.json').then(function (response) {
                self.featured = response.data;
                self.setImage("img/bluefloral.jpg");
                self.setDesc("Blue Floral - $19.99");
            });

            var slideIndex = 0;
            showSlides();
            function showSlides() {
                var i;
                var slides = document.getElementsByClassName("mySlides");
                var dots = document.getElementsByClassName("dot");
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slideIndex++;
                if (slideIndex > slides.length) { slideIndex = 1 }
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" showing", "");
                }
                slides[slideIndex - 1].style.display = "block";
                dots[slideIndex - 1].className += " showing";
                setTimeout(showSlides, 3000); // Change image every 2 seconds
            }

        }
    ]
});

