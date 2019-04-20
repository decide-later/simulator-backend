'use strict'
let activities = {
    "main": {
        "mobile_travel" : "Мобильный помощник в путешествиях",
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
        "mobile_health" : "Мобильный помощник твоего здоровья",
        "mobile_hobby" : "Мобильный помощник для хобби и развлечения",
        "blogs" : "Блогосфера. Форумы. Интернет-реклама",
        "mass_media" : "Интернет-телевидение и радио. Новостные ресурсы"
    }
};
const getView = (key, level) => {
    if(activities["main"][key]){
        return {
            "title" : activities["main"][key],
            "level" : level || 0,
            "template": "plaintxt"
        }
    }
    return activities["main"]
}

exports.get_activities = function(req, res){
    res.json(activities["main"]);
}

exports.current_view = function (req, res){
    let key = req.query.view || "mobile_travel";
    let level = req.query.level || 0;
    res.json(getView(key, level));
}