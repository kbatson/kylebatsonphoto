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

	var owl = $('.owl-carousel');
	owl.owlCarousel({
		items: 1,
		nav: true,
		lazyLoad: true,
		lazyLoadEager: 3,
		URLhashListener:true,
    startPosition: 'URLHash'
	});

	$(document).keyup(function(e) {
		if (e.keyCode == 37) { // Left arrow
			owl.trigger('prev.owl.carousel');
		}
		if (e.keyCode == 39) { // Right arrow
			owl.trigger('next.owl.carousel');
		}
	});

	owl.on('loaded.owl.lazy', function(event) {
		verticalCheck(event.item.index);
	});

	owl.on('changed.owl.carousel', function(event) {
		$(event.currentTarget).attr('aria-live', 'polite');
		$('.owl-item').attr('aria-hidden', 'true');
		$('.owl-item').find('.buyPrint').attr('tabindex', '-1');

		var activeItem = $('.owl-item').eq(event.item.index);
		activeItem.attr('aria-hidden', 'false');
		console.log(activeItem.find('button.buyPrint'));
		activeItem.find('.buyPrint').attr('tabindex', '0');
	});

	function verticalCheck(index){
		var image = $(".slideshow .owl-item").eq(index).find('img');
		if(image.height() >= image.width()){
      image.parent().addClass("vertical");
      window.dispatchEvent(new Event('resize'));
    }
	}
});

