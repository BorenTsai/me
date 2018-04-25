$(document).ready(function() {
	// jQuery Function Number 1 (click)
	$('.scrollTo').click(function(){
		// jQuery Function Number 2 (attr)
		var getElement = $(this).attr('href');
		if ($(getElement).length){
			// jQuery Function Number 3 (offset)
			var getOffset = $(getElement).offset().top;
			$('html,body').animate({
				scrollTop: getOffset
			}, 500);
		}
		return false
	})
	
	$(window).scroll(function() {
		$('.pic').each( function(i) {
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			// jQuery Function Number 4 (scrollTop)
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			if (bottom_of_window > bottom_of_object) {
				$(this).animate({'opacity': '1'},1000);
			}
		});
	});
});