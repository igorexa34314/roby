//@prepros-append burger.js
//@prepros-append stats.js
//@prepros-append animation.js

// Init slider
document.addEventListener('DOMContentLoaded', function () {
	const slider = new ChiefSlider('.slider', {
		swipe: true,
		loop: true,
		autoplay: true,
		interval: 4000,
	});
});