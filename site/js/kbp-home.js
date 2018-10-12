$(document).ready(function(){
	var homeImagesArray = [];
	var homeImages = $("#imageLoader img").each(function(){
		homeImagesArray.push($(this).attr("src"));
	});

	var counter = 0;
	var imagesLoaded = 0;
	
	var totalImages = $("#imageLoader img").length;
	console.log(totalImages);

	// $("#imageLoader img").each(function(){
	// 	if(!$(this).prop('loaded')){
	// 		console.log("Waiting to be loaded!");
			
	// 		$(this).on('load', function() {
	// 			console.log("Loaded!");
	// 			$(this).prop('loaded', true);
	// 			console.log("loaded:", $(this).prop('complete'));
	// 			$("body").removeClass("loading");
	// 			//console.log($(this).complete);
	// 			imagesLoaded ++;
	// 			if(imagesLoaded === totalImages){
	// 				console.log('all loaded!');
	// 				slideshow();
	// 			}
	// 		});
	// 	} else {
	// 		console.log('Already loaded!');
	// 		imagesLoaded ++;
	// 	}
	// });

	function checkImages() {
		for($i = 0; $i < totalImages; $i++){
			if($("#imageLoader img").naturalWidth === 0){
				console.log('no naturalWidth', imagesLoaded);
			} else {
				console.log('has naturalWidth!', imagesLoaded)
				imagesLoaded++;
			}

			if(imagesLoaded === totalImages){
				console.log('all loaded!');
				$("body").removeClass("loading");
				$('body').attr('style', "background-image: url(" + homeImagesArray[totalImages - 1] + ")");
				clearInterval(checkImageTimer);
				slideshow();
			}
		}
		// $("#imageLoader img").each(function(){
		// 	if($(this).naturalWidth === 0){
		// 		console.log('no naturalWidth');
		// 		return false;
		// 	} else {
		// 		console.log('has naturalWidth!')
		// 		clearInterval(checkImageTimer);
		// 		return true;
		// 	}
		// });
	}
	var checkImageTimer = setInterval(checkImages, 500);
	var slideshow = function(){
		setInterval(function(){
			switchImages(counter);
			if(counter == homeImagesArray.length - 1){
				counter = 0;
				clearInterval(slideshow);
			} else {
				counter ++;
			}
		}, 5000);
	}

	function switchImages(imageIndex){
		backgroundURL = homeImagesArray[imageIndex];
		console.log('switch image', backgroundURL);
		$('body').attr('style', "background-image: url(" + backgroundURL + ")");
	}

	/*
	begin loading all images
	wait for first image to load - loading spinner is visible
	check if first image is loaded
		if loaded: show image, remove loading spinner
	check if next image is loaded
		if not loaded, show loading spinner
		if loaded: show image, removve loading spinner
	
	*/
});