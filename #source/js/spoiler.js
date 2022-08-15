// Spoiler Jquery (Landing titles)
jQuery(($) => {
	if ($(window).width() <= 640) {
		$('.graphics-landing__block-text').each(function (index, el) {
			const title = $(this).find('h3');
			$(title).click(function (e) {
				$(this).toggleClass('_active').next().slideToggle(300);
			});
		});
	}
});


// Spoiler Jquery (Reviews)
jQuery(($) => {
	let count = 0;
	const more = $('.reviews__more');
	const reviews = $('.reviews__wrapper');
	const reviewsItem = reviews.children();
	$(more).click(function (e) {
		$(more).toggleClass('_active');
		for (var i = 2; i <= 3; i++) {
			$(reviewsItem[i]).slideToggle(300);
		}
		if (count % 2 == 0) {
			$(more).children().text("Less reviews");
		}
		else {
			$(more).children().text("More reviews");
		}
		count++;
	});
});