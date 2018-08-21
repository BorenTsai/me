$(document).ready(function() {
	let pageHeight = $(window).height();
	let distanceFromTop = 0;
	$(window).scroll(function() {
		distanceFromTop = $(window).scrollTop();
		if (distanceFromTop == 0) {
			$(".hero_image").css("transform", "scale(" + 1 + ")");
		}
  		$(".hero_image").css("transform", 'scale(' + (1 + (distanceFromTop/pageHeight)) + ')');
  	});
	$(function() {
		$('body').removeClass('fade-out');
	})
	$('.scrollTo').click(function(){
		var getElement = $(this).attr('href');
		if ($(getElement).length){
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
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			if (bottom_of_window > bottom_of_object) {
				$(this).animate({'opacity': '1'},1000);
			}
		});
	});
	
	$('.icon').hover(function () {
		$(this).css('transform', 'scale(' + (1.05) + ')');
	}, function() {
		$(this).css('transform', 'scale(' + 1 + ')')
	})
});