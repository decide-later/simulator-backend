'use strict'
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const fs = require("fs");

let tracks = {
    "main": {
        "travel" : "Мобильный помощник в путешествиях",
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
    },
    "template": ["buttonlist"],
    "components": [

    ]
};
const exampleViews = JSON.parse(fs.readFileSync("controllers/data.json"));

const getView = (key, level) => {
    console.log(key,level)
    if(tracks["main"][key]){
        let index = exampleViews.findIndex(a => {
            return a.level === Number.parseInt(level) && a.case === key;
        })
        index = (index < 0 )?  2 : index;
        //Math.floor(Math.random() * 10) % exampleViews.length;
        return exampleViews[index];
    }
    return tracks["main"]
}

exports.get_activities = function(req, res){
    res.json(tracks["main"]);
}

exports.current_view = function (req, res){
    let key = req.query.view || "main";
    let level = req.query.level || 0;
    res.json(getView(key, level));
}