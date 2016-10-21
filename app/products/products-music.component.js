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
                "title": "London Calling",
                "name": "The Clash",
                "picture": ["albumclash.jpg"],
                "price": "$14.99",
                "buylink": ""
            },
            {
                "title": "Infinity on High",
                "name": "Fallout Boy",
                "picture": ["albumfalloutboy.jpg"],
                "price": "$14.99",
                "buylink": ""
            },
            {
                "title": "In Your Honor",
                "name": "Foo Fighters",
                "picture": ["albumfoo.jpg"],
                "price": "$14.99",
                "buylink": ""
            },
            {
                "title": "St. Elsewhere",
                "name": "Gnarls Barkley",
                "picture": ["albumgnarls.jpg"],
                "price": "$14.99",
                "buylink": ""
            },
            {
                "title": "American Idiot",
                "name": "Green Day",
                "picture": ["albumgreenday.jpg"],
                "price": "$14.99",
                "buylink": ""
            },
            {
                "title": "Light Grenades",
                "name": "Incubus",
                "picture": ["albumincubus.jpg"],
                "price": "$14.99",
                "buylink": ""
            },
            {
                "title": "Under the Iron Sea",
                "name": "Keane",
                "picture": ["albumkeane.jpg"],
                "price": "$14.99",
                "buylink": ""
            },
            {
                "title": "Room for Squares",
                "name": "John Mayer",
                "picture": ["albummayer.jpg"],
                "price": "$14.99",
                "buylink": ""
            },

        ]
    }
});