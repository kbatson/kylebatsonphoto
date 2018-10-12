$(document).ready(function(){
	var flag = false;
	var totalImages = $("#imageLoader img").length;
	console.log("totalImages", totalImages);
	var image;
	var i = 0;

	function changeImage(){
		image = $("#imageLoader img")[i];
		var imageSrc = $(image).attr("src");
		if($(image).naturalWidth === 0){
			flag = false;
			$('body').addClass('loading')
			window.setTimeout(function(){
				changeImage(image);
			}, 100);
		} else {
			$('body').removeClass('loading');
			flag = true;
			console.log('changeImage image', imageSrc);
			imageSwap(imageSrc);
		}
	}
	changeImage();

	
	function imageSwap(image){
		
		console.log('image', image);
		if(i == 0){
			$('body').attr('style', "background-image: url(" + image + ")");
			i++;
			changeImage();
		} else {
			window.setTimeout(function(){
				$('body').attr('style', "background-image: url(" + image + ")");
				if(i == totalImages){
					i = 0;
				} else {
					i++;
				}

				changeImage();
			}, 5000);
		}
	}
});