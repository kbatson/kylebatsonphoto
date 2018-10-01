$(document).ready(function(){
	/* Add plus decoration */
	$('li').each(function(){
		if($(this).find('ul').length > 0){
			$(this).addClass('hasChildren');
		}
	})

	/* Expand menu */
	$("header nav>ul>li.hasChildren>a").on("click", function(){
		if($(this).siblings('ul').is(":hidden")){
			$(this).siblings('ul').slideDown("fast").parent('li').addClass('expanded');
		} else {
			$(this).siblings('ul').slideUp("fast").parent('li').removeClass('expanded');
		}
		return false;
	});
});