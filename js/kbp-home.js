$(document).ready(function(){
	$("header nav>ul>li>a").on("click", function(){
		if ($(this).siblings('ul').is(":hidden")){
			$(this).siblings('ul').slideDown("fast");
		} else {
			$(this).siblings('ul').slideUp("fast");
		}
		return false;
	});

	var homeImages = [
		"DSC03063.jpg",
		"DSC03065.jpg"
	];

	var baseURL = "images/home/";

	var counter = 0;

	var slideshow = setInterval(function(){
		switchImages(counter);
		if(counter == homeImages.length - 1){
			counter = 0;
			//clearInterval(slideshow);
		} else {
			counter ++;
		}
	}, 5000);

	/*Preload images*/
	for (var i = 0; i < homeImages.length; i++) {
		$("<img />").attr("src", baseURL + homeImages[i]);
	}

	function switchImages(imageIndex){
		backgroundURL = "url(" + baseURL + homeImages[imageIndex] + ")";
		console.log(backgroundURL);
		$('html').css('background-image', backgroundURL);
	}
});