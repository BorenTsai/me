$(document).ready(function() {
	$('.scrollTo').click(function(){
		var getElement = $(this).attr('href');
		(console.log(getElement.length))
		if ($(getElement).length){
			var getOffset = $(getElement).offset().top;
			$('html,body').animate({
				scrollTop: getOffset
			}, 500);
		}
		return false
	})
});