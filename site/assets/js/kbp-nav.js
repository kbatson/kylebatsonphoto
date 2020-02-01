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
		console.log('click me');
		if($("header nav>ul").is(":hidden")){
			$("header nav>ul").slideDown("fast");
		} else {
			$("header nav>ul").slideUp("fast");
		}
	});



});

$(window).on('load', function(){
    console.log('loaded');
    $(".slideshow img").each(function(){
        if($(this).height() >= $(this).width()){
            $(this).parent().addClass("vertical")
        }
    });
});
