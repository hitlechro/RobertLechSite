jQuery(document).ready(function ($) {

    $( "#tabs" ).tabs();

	if ($(window).width() > 960) {
		var width = $(window).width();
		var padding_required = ((width - 960)/2) + 25;
		$('.side-padding').css("padding-left", padding_required.toString()+"px");
		$('.side-padding').css("padding-right", padding_required.toString()+"px");
	}
	else if ($(window).width() > 640) {
		$('.side-padding').css("padding-left", "25px");
		$('.side-padding').css("padding-right", "25px");
	}
	else if ($(window).width() < 640) {
		$('.side-padding').css("padding-left", "0px");
		$('.side-padding').css("padding-right", "0px");
	}

	$(window).resize(function() {
		if ($(window).width() > 960) {
		var width = $(window).width();
		var padding_required = ((width - 960)/2) + 25;
		$('.side-padding').css("padding-left", padding_required.toString()+"px");
		$('.side-padding').css("padding-right", padding_required.toString()+"px");
		}
		else if ($(window).width() > 640) {
			$('.side-padding').css("padding-left", "25px");
			$('.side-padding').css("padding-right", "25px");
		}
		else if ($(window).width() < 640) {
			$('.side-padding').css("padding-left", "0px");
			$('.side-padding').css("padding-right", "0px");
		}
	});
});