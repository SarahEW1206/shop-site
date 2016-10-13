var gallery = ["/img/newmusic.svg", "/img/greatgifts.svg", "/img/image3.svg"];
var sliderPic = document.getElementById("sliderimage");

	function changePicOne() {
		// sliderPic.src = gallery[1] WHY DOESN'T THIS WORK?
		document.getElementById("sliderimage").src = gallery[0]
	}

	function changePicTwo() {
		document.getElementById("sliderimage").src = gallery[1]
	}

	function changePicThree() {
		document.getElementById("sliderimage").src = gallery[2]
	}

window.onload = function () {
	prepareGallery();
}

function prepareGallery() {
	var gallery = document.getElementById("imageGallery");
	var links = gallery.getElementsByTagName("a");

	showPicOne(links[0]);

	for (var i=0; i < links.length; i++ ) {
		links[i].onclick = function() {
			showPicOne(this, links);
			return false;
		}
	}
}

// function showPicOne(whichPic, links) {
function showPicOne(whichPic) {

	// if(links){

	// 	for (var i=0; i < links.length; i++){

	// 		links[i].parentNode.className = "";
	// 		}
	// 	}

	// whichPic.parentNode.className = 'active';

	var source = whichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	
	placeholder.setAttribute("src",source);
	
	var text = whichPic.getAttribute("title");
	var description = document.getElementById("description");
	
	description.firstChild.nodeValue = text;

	}

