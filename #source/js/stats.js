// Draw stats (percent)
$('.stats__item').each(function (index, element) {
	const value = $(element).children().next().text();
	$(element).children().last().css("width", value);
});