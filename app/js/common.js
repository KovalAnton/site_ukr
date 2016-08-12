$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$(document).ready(function() {

	if (!$("div").is("#main_head")) {
		$("#header").addClass("blue_header");
	}


	function heightDetect() {
		if ($(window).width() < 800) {
			if ($(window).width() < 680 && $(window).width() > 400) {
				$("#main_head").css("height", $(window).height()*0.8);
			} else {
				$("#main_head").css("height", $(window).height()*0.5);
			}
		} else {
			$("#main_head").css("height", $(window).height()*0.8);
		}
	};

	heightDetect();

	$(window).resize(function() {
		heightDetect();
		var res = true;
		dushedContainerHeight(res);
		if (!$(".nav_button").is(":visible")) {
			$(".mobile_navigation").fadeOut();
		};
	});
});
