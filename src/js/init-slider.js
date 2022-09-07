import { ItcSlider } from "./modules/slider.min.js";

// Init slider
export function InitSlider(sliderWrapper) {
	const slider = new ItcSlider('.slider', {
		swipe: true,
		loop: true,
		autoplay: true,
		interval: 4000,
	});
}