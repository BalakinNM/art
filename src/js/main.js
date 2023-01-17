import sliders from "./modules/sliders";
import modal from "./modules/modal";
import forms from "./modules/forms";
import mask from "./modules/mask";

window.addEventListener('DOMContentLoaded', () => {
'use strict';
sliders('.main-slider-item', 'vertical', '.prev', '.next');
sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
modal();
forms();
mask('[name="phone"]');
});