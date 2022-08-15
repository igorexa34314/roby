
// menu-burger
const menuBurger = document.querySelector('.burger-menu');
if (menuBurger) {
	const menuBody = document.querySelector('.menu__body')
	menuBurger.addEventListener("click", function () {
		document.body.classList.toggle('_lock');
		menuBurger.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
// Draw stats (percent)
$('.stats__item').each(function (index, element) {
	const value = $(element).children().next().text();
	$(element).children().last().css("width", value);
});