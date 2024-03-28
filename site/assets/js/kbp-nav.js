$(document).ready(function(){
	/* Add plus decoration */
	$('li').each(function(){
		if($(this).find('ul').length > 0){
			$(this).addClass('hasChildren');
		}
	})

	/* Expand menu */
	$("header nav>ul>li.hasChildren>.menuItem").on("click", function(){
		$("header nav>ul>li.hasChildren ul").slideUp("fast").attr("aria-hidden", true).parent('li').removeClass("expanded");
		if($(this).siblings('ul').is(":hidden")){
			$(this).siblings('ul').slideDown("fast").attr("aria-hidden", false).parent('li').addClass('expanded');
			$(this).focus();
			$(document).activeElement;
		} else {
			$(this).siblings('ul').slideUp("fast").attr("aria-hidden", true).parent('li').removeClass('expanded');
		}
		return false;
	});

	/* Expand current menu on page load */
	$("header nav>ul>li.hasChildren .currentPage").parent("ul").slideDown("fast").attr("aria-hidden", false).parent('li').addClass('expanded');

	/* Show responsive menu */
	$("#navToggle").on('click', function(){
		if($("header nav>ul").is(":hidden")){
			$("header nav>ul").slideDown("fast");
		} else {
			$("header nav>ul").slideUp("fast");
		}
	});

	$("#mosaic").nanogallery2({
		galleryTheme: {
			thumbnail : { background: '#fff', borderColor: '#fff' }
		},
		viewerGallery: 'bottom',
		thumbnailDisplayTransition: 'scaleUp',
		thumbnailHoverEffect2: 'image_scale_1.00_1.05|labelAppear',
		thumbnailGutterWidth: 20,
		thumbnailGutterHeight: 20,
		thumbnailBorderHorizontal: 0,
		thumbnailBorderVertical: 0,
		thumbnailWidth:   600,
		thumbnailHeight:  'auto',
		thumbnailBaseGridHeight : 400,
		thumbnailLabel: { displayDescription: false, align: 'left' },
		viewerTools: {
			topLeft:    'pageCounter, playPauseButton',
			topRight:   'fullscreenButton, closeButton'
		}
	});
});

