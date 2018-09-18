$(document).ready(function(){
	/* Add plus decoration */
	$('li').each(function(){
		if($(this).find('ul').length > 0){
			$(this).addClass('hasChildren');
		}
	})

	/* Expand menu */
	$("header nav>ul>li>a").on("click", function(){
		if($(this).siblings('ul').is(":hidden")){
			$(this).siblings('ul').slideDown("fast").parent('li').addClass('expanded');
		} else {
			$(this).siblings('ul').slideUp("fast").parent('li').removeClass('expanded');
		}
		return false;
	});

	var homeImagesArray = [];
	var homeImages = $("#imageLoader img").each(function(){
		homeImagesArray.push($(this).attr("src"));
	});

	var counter = 0;
	var imagesLoaded = 0;
	
	var totalImages = $("#imageLoader img").length;
	console.log(totalImages);

	$("#imageLoader img").each(function(){
		if(!$(this).prop('loaded')){
			console.log("Waiting to be loaded!");
			
			$(this).on('load', function() {
				console.log("Loaded!");
				$(this).prop('loaded', true);
				console.log("loaded:", $(this).prop('complete'));
				//console.log($(this).complete);
				imagesLoaded ++;
				if(imagesLoaded === totalImages){
					console.log('all loaded!');
					slideshow();
				}
			});
		} else {
			console.log('Already loaded!');
			imagesLoaded ++;
		}
	});

	var slideshow = function(){
		setInterval(function(){
			switchImages(counter);
			if(counter == homeImagesArray.length - 1){
				counter = 0;
				//clearInterval(slideshow);
			} else {
				counter ++;
			}
		}, 5000);
	}

	function switchImages(imageIndex){
		backgroundURL = homeImagesArray[imageIndex];
		console.log('switch image', backgroundURL);
		$('html').attr('style', "background-image: url(" + backgroundURL + ")");
	}
});