jQuery(document).ready(function ($) {

    $( "#tabs" ).tabs();

	if ($(window).width() > 960) {
		var width = $(window).width();
		var padding_required = ((width - 960)/2) + 25;
		$('.side-padding').css("padding-left", padding_required.toString()+"px");
		$('.side-padding').css("padding-right", padding_required.toString()+"px");
		$('.top-padding').css("padding-top", "2em");
		$('span.tab').css("font-size", "100%");
		$('a.tab').css("padding", ".5em 1em");
		$('img.about-me').css("float", "right");
	}
	else if ($(window).width() > 640) {
		$('.side-padding').css("padding-left", "25px");
		$('.side-padding').css("padding-right", "25px");
		$('.top-padding').css("padding-top", "2em");
		$('span.tab').css("font-size", "100%");
		$('a.tab').css("padding", ".5em 1em");
		$('img.about-me').css("float", "right");
	}
	else if ($(window).width() < 640) {
		$('.side-padding').css("padding-left", "0px");
		$('.side-padding').css("padding-right", "0px");
		$('.top-padding').css("padding-top", "0em");
		$('span.tab').css("font-size", "90%");
		$('a.tab').css("padding", ".5em 0.75em");
	}

	$(window).resize(function() {
		if ($(window).width() > 960) {
			var width = $(window).width();
			var padding_required = ((width - 960)/2) + 25;
			$('.side-padding').css("padding-left", padding_required.toString()+"px");
			$('.side-padding').css("padding-right", padding_required.toString()+"px");
			$('.top-padding').css("padding-top", "2em");
			$('span.tab').css("font-size", "100%");
			$('a.tab').css("padding", ".5em 1em");
		}
		else if ($(window).width() > 640) {
			$('.side-padding').css("padding-left", "25px");
			$('.side-padding').css("padding-right", "25px");
			$('.top-padding').css("padding-top", "2em");
			$('span.tab').css("font-size", "100%");
			$('a.tab').css("padding", ".5em 1em");
		}
		else if ($(window).width() < 640) {
			$('.side-padding').css("padding-left", "0px");
			$('.side-padding').css("padding-right", "0px");
			$('.top-padding').css("padding-top", "0em");
			$('span.tab').css("font-size", "90%");
			$('a.tab').css("padding", ".5em 0.75em");
		}
	});
});