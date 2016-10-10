
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



