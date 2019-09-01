'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import countTimer from './modules/countTimer';
import togglemenu from './modules/togglemenu';
import togglePopUp from './modules/togglePopUp';
import getAnchors from './modules/getAnchors';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changeImg from './modules/changeImg';
import calcValid from './modules/calcValid';
import calc from './modules/calc';
import sendForm from './modules/sendForm';


// таймер (урок 12)    
setInterval(countTimer, 1000, '31 july 2019');
// меню (урок 13)    
togglemenu();
// popup окно
togglePopUp();
// плавная прокрутка (меню + кнопка)
getAnchors();
// табы (урок 14)
tabs();
// слайдер
slider();
// урок 15
// блок с картинками
changeImg();
// калькулятор валидация
calcValid();
// калькулятор (практика 03)
calc(100);
// send-ajax-form
sendForm();