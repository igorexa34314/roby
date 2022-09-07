import * as myFunctions from "./modules/functions.js";

import { InitSlider } from "./init-slider.js";
import { burger } from "./burger.js";
import { Animation } from "./animation.js";


myFunctions.isWebp();


$(document).ready(function () {

	// Перенапраправление на главную при нажатии на лого
	$('.logo').click(function () {
		location.href = "index.html";
	});

	burger();
	Animation();

	// Draw stats (percent)
	$('.stats__item').each(function (index, element) {
		const value = $(element).children().next().text();
		$(element).children().last().css("width", value);
	});

	InitSlider($('.slider'));

});