var http = require('http');
let example_activities = {
    "using_mobile" : "Мобильные устройства: общие характеристики и функции",
    "internet_ethics" : "Мобильная и Интернет-безопасность. Мобильный этикет.",
    "mail_search" : "Почтовые сервисы и поисковые системы.",
    "social_media" : "Социальные сети и средства мгновенного обмена сообщениями",
    "media_exchange" : "Файлообменные сети. Функции мобильного телефона как офиса",
    "multimedia" : "Мультимедийные возможности мобильного телефона и Интернета",
    "finance" : "Мобильный помощник в финансовы вопросах",
    "goc_uslugi" : "Мобильный помощник в получении государственных услуг",
    "social_uslugi" : "Мобильный помощник в сфере социальных услуг",
    "mobile_ed" : "Мобильный помощник в образовании",
    "mobile_travel" : "Мобильный помощник в путешествиях",
    "mobile_health" : "Мобильный помощник твоего здоровья",
    "mobile_hobby" : "Мобильный помощник для хобби и развлечения",
    "blogs" : "Блогосфера. Форумы. Интернет-реклама",
    "mass_media" : "Интернет-телевидение и радио. Новостные ресурсы"
}
http.createServer(function (req, res) {
    //res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Charset', 'utf-8');
    res.end(JSON.stringify(example_activities , null, 3));
}).listen(8080);


