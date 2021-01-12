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
		loop: true,
		dots: false,
		URLhashListener:true,
    startPosition: 'URLHash',
    onInitialized: selectItem
	});


	$(document).keyup(function(e) {
		if (e.keyCode == 37) { // Left arrow
			owl.trigger('prev.owl.carousel');
		}
		if (e.keyCode == 39) { // Right arrow
			owl.trigger('next.owl.carousel');
		}
	});

	owl.on('changed.owl.carousel', function(event) {
		onChanged: selectItem(event);
	});

	// owl.on('initialized.owl.carousel', function(event) {
	// 	onInitialized: selectItem(event);
	// });

	owl.on('translated.owl.carousel', function(event) {
		onTranslated: selectItem(event);
	});

	function selectItem(event){
		$('.slide').attr('aria-hidden', true);
		$('.slide').each(function(){
			$(this).find('.buyPrint').attr('tabindex', '-1');
		});
		var currentSlide = $('.owl-item').eq(event.item.index).children('.slide');
		currentSlide.attr('aria-hidden', false);
		currentSlide.find('.buyPrint').attr('tabindex', '0');
		var carouselIndex = currentSlide.attr('data-hash');

		$('.thumbnail').removeClass('active');
		$(`.thumbnail[href="#${carouselIndex}"]`).addClass('active');
	}

	function toggleTheater(e){
		$('body').toggleClass('theater');
		owl.trigger('refresh.owl.carousel');
		
		if($('body').hasClass('theater')){
			$('#theaterToggle').text('Exit Fullscreen').attr('aria-pressed', true);
		} else {
			$('#theaterToggle').text('Enter Fullscreen').attr('aria-pressed', false);
		}
	}

	$('#theaterToggle').on('click', function(e){
		toggleTheater(e);
	});
});

