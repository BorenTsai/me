$(document).ready(function() {
	// jQuery Fucntion Number 1 (removeClass)
	$(function() {
		$('body').removeClass('fade-out');
	})
	// jQuery Function Number 2 (click)
	$('.scrollTo').click(function(){
		// jQuery Function Number 3 (attr)
		var getElement = $(this).attr('href');
		if ($(getElement).length){
			// jQuery Function Number 4 (offset)
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
			// jQuery Function Number 5 (scrollTop)
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			if (bottom_of_window > bottom_of_object) {
				$(this).animate({'opacity': '1'},1000);
			}
		});
	});
});