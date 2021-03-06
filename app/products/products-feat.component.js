angular.module('productApp').component('productFeat', {
    templateUrl: "products/product-feat-template.html",
    controller: function ProductFeatController() {
        this.products = [
            {
                "title": "Blue Floral Scarf - $19.99",
                "name": "Blue Floral",
                "picture": ["bluefloral.jpg"],
                "buylink": "bluefloralscarf.html"
            },
            {
                "title": "Pink Squares Scarf - $19.99",
                "name": "Pink Squares",
                "picture": ["pinksquares.jpg"],
                "buylink": "pinksquaresscarf.html"
            },
            {
                "title": "Blue Plaid Scarf - $19.99",
                "name": "Blue Plaid",
                "picture": ["plaid.jpg"],
                "buylink": "blueplaidscarf.html"
            },
        ]
    }
});