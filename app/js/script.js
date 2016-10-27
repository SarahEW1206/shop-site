
window.onload = function () {
	prepareGallery();
}

function prepareGallery() {
	var gallery = document.getElementById("imageGallery");
	var links = gallery.getElementsByTagName("a");

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
	var description = document.getElementById("description");

	description.firstChild.nodeValue = text;

	var buynow = document.getElementById("buynow");
	var buylink = whichPic.getAttribute("buylink");

	buynow.setAttribute("href", buylink);


}

