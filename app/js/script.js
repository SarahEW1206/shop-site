
var gallery = ["/img/newmusic.svg", "/img/greatgifts.svg", "/img/image3.svg"];
var sliderPic = document.getElementById("sliderimage");
var picNav = document.getElementById("slidernav");
var picDotOne = document.getElementById("dot1");

function changePicOne() {
		// console.log(gallery[1]);
		// sliderPic.src = gallery [1] WHY DOESN'T THIS WORK?
		document.getElementById("sliderimage").src = gallery[0]
	}

function changePicTwo() {
		document.getElementById("sliderimage").src = gallery[1]
	}

function changePicThree() {
		document.getElementById("sliderimage").src = gallery[2]
	}



	// window.onload = function () {
	// 	prepareGallery();
	// }

	// function prepareGallery() {
	// 	var gallery = document.getElementById("imageGallery");
	// 	var links = gallery.getElementsByTagName("a");
	// 	// console.log(links.length);
	// 	for ( var i=0; i < links.length; i++ ) {
	// 		// console.log(i);
	// 		links[i].onclick = function() {
	// 			showPicOne(this, links);
	// 			return false;
	// 		}

	// 		links[0].parentNode.className = 'active';
	// 		showPicOne(links[0]);
	// 	}
	// }

	// function showPicOne(whichPic, links) {
	// 	if(links){

	// 	for (var i=0; i < links.length; i++){

	// 		links[i].parentNode.className = "";
	// 		}
	// 	}

	// 	whichPic.parentNode.className = 'active';


	// 	var source = whichPic.getAttribute("href");
	// 	var placeholder = document.getElementById("placeholder");
	// 	placeholder.setAttribute("src",source);
	// 	var text = whichPic.getAttribute("title");
	// 	var description = document.getElementById("description");
	// 	// console.log(description.childNodes[0].nodeValue); 
	// 	description.firstChild.nodeValue = text;
	// }