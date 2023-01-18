import sliders from "./modules/sliders";
import modal from "./modules/modal";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";


window.addEventListener('DOMContentLoaded', () => {
'use strict';
let calcObj = {};
calc("#size", '#material', '#options', '.promocode', '.calc-price', calcObj);
sliders('.main-slider-item', 'vertical', '.prev', '.next');
sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
modal();
forms(calcObj);
mask('[name="phone"]');
checkTextInputs('[name="message"]');
checkTextInputs('[name="name"]');
showMoreStyles('.button-styles', '.styles > div > div');

});