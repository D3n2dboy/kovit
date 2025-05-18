// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

$(function () {
    $('.marquee').marquee({
        duration: 30000,
        startVisible: true,
        duplicated: true,
        delayBeforeStart: 0,
        gap: 50
    });
});