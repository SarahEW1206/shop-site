window.onload = function () {
    prepareGallery();
}

function prepareGallery() {
    var musicgallery = document.getElementById("musicGallery");
    var links = musicGallery.getElementsByTagName("a");

    showPicOne(links[0]);

    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            showPicOne(this, links);
            return false;
        }
    }
}

function showPicOne(whichPic, links) {

    if (links) {

        for (var i = 0; i < links.length; i++) {

            links[i].parentNode.className = "";
        }
    }

    whichPic.parentNode.className = 'active';

    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");

    placeholder.setAttribute("src", source);

    var text = whichPic.getAttribute("title");
    var artist = whichPic.getAttribute("artist");
    var description = document.getElementById("description");

    description.firstChild.nodeValue = artist + " - " + text;

    var buyalbum = document.getElementById("buyalbum");
    var buylink = whichPic.getAttribute("buylink");

    buyalbum.setAttribute("href", buylink);

    var price = whichPic.getAttribute("price");
    var albumprice = document.getElementById("albumprice");

    albumprice.firstChild.nodeValue = price;

}

