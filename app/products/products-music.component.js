angular.module('productApp').component('productMusic', {
    templateUrl: "products/product-music-template.html",
    controller: function ProductMusicController() {
        this.albums = [
            {
                "title": "Almost Here",
                "name": "The Academy Is...",
                "picture": ["albumacademy.jpg"],
                "price": "$14.99",
                "buylink": ""
            },
            {
                "title": "One",
                "name": "The Beatles",
                "picture": ["albumbeatles.jpg"],
                "price": "$14.99",
                "buylink": ""
            },
            {
                "title": "unknown",
                "name": "The Clash",
                "picture": ["albumclash.jpg"],
                "price": "$14.99",
                "buylink": ""
            },
            {
                "title": "unknown",
                "name": "Fallout Boy",
                "picture": ["albumfalloutboy.jpg"],
                "price": "$14.99",
                "buylink": ""
            },
            {
                "title": "unknown",
                "name": "Foo Fighters",
                "picture": ["albumfoo.jpg"],
                "price": "$14.99",
                "buylink": ""
            },
            {
                "title": "unknown",
                "name": "Gnarls Barkley",
                "picture": ["albumgnarls.jpg"],
                "price": "$14.99",
                "buylink": ""
            },
            {
                "title": "unknown",
                "name": "The Academy Is...",
                "picture": ["albumgreenday.jpg"],
                "price": "$14.99",
                "buylink": ""
            },
            {
                "title": "unknown",
                "name": "The Academy Is...",
                "picture": ["albumincubus.jpg"],
                "price": "$14.99",
                "buylink": ""
            },
        ]
    }
});