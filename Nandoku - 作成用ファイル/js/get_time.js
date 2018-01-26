const jikan= new Date();

//年・月・日・曜日を取得する
const year = jikan.getFullYear();
const month = jikan.getMonth()+1;
const week = jikan.getDay();
var time = ""+year+month+week;

//時・分・秒を取得する
const hour = jikan.getHours();
const minute = jikan.getMinutes();
const second = jikan.getSeconds();
time += ""+hour+minute+second;