
// - - タイトルの設定 - -

const TITLE = "難読漢字検定 - " + KENTEI_NAME;
let PAGE_TITLE;

if (typeof(CLASS) !== "undefined") {
	PAGE_TITLE = "難読漢字検定 " + KENTEI_NAME;
} else if (typeof(KANKEN) !== "undefined") {
	PAGE_TITLE = KENTEI_NAME;
}

// - - 背景の設定 - -

let BACKGROUND_URL;

if (typeof(CLASS) !== "undefined") {
	BACKGROUND_URL = "../img/img" + CLASS + ".jpg";
} else if (typeof(KANKEN) !== "undefined") {
	BACKGROUND_URL = "../img/img4.jpg";
}

const MAIN_Q_NUM = Q_NUM.length; // 大問の数
const KENTEI_LEVEL = '検定レベル：' + KENTEI_NAME;
const GOKAKU_LINE = '合格ライン：'+ MAX_SCORE +'点中'+ GOKAKU_SCORE +'点以上';
const COOKIE = FILE_NAME;

// - - ジャンルパネルの設定 - -

const GENRE_COLOR_LIST = {"植物"      : "background:linear-gradient(#00FF20,rgba(0,150,55,0.5));", 
						  "魚介類"    : "background:linear-gradient(#05BBFF,rgba(0,80,255,0.5));", 
						  "鳥類"      : "background:linear-gradient(#FFDD33,rgba(255,220,0,0.4));", 
						  "虫"        : "background:linear-gradient(#FFF700, rgba(255,255,0,0.5));",
						  "動物"      : "background:linear-gradient(#FF8000,rgba(255,120,0,0.4));", 
						  "物・現象"  : "background:linear-gradient(#A060FF, rgba(50,0,55,0.6));",
						  "常用熟字訓": "background:linear-gradient(#DDDDDD,rgba(255,255,255,0.4));",
						  "当て字"    : "background:linear-gradient(#FFD700, rgba(255,255,0,0.5));",
						  "外国地名"  : "background:linear-gradient(#FFB000, rgba(200,58,0,0.7));",
						  "音読み"    : "background:linear-gradient(#FFB000, rgba(200,58,0,0.7));",
						  "訓読み"    : "background:linear-gradient(#05BBFF, rgba(0,80,255,0.5));"};

// パネルカラーの設定

let GENRE_COLOR = new Array();

if (typeof(GENRE) !== "undefined") {
	for (let i = 0; GENRE[i]; i++) {
		const color = GENRE_COLOR_LIST[GENRE[i]];
		GENRE_COLOR.push(color);
	}
}

// パネル位置の設定

let GENRE_POSITION = new Array();
let GENRE_FIELD_HEIGHT;

if (typeof(GENRE) !== "undefined") {
	if (typeof(CLASS) !== "undefined") {
		if (GENRE.length === 3) {
			GENRE_POSITION = ["left:6%;", "left:34.5%;", "right:6.5%;"];
		} else if (GENRE.length === 5) {
			GENRE_POSITION = ["top:20%; left:6%;", "top:20%; left:34.5%;", "top:20%; right:6.5%;", "top:57%; left:20%;", "top:57%; right:20%;"];
			GENRE_FIELD_HEIGHT = "470px";
		}
	}
	
	if (typeof(KANKEN) !== "undefined") {
		if (GENRE.length === 2) {
			GENRE_POSITION = ["left:20%;", "right:20%;"];
		}
	}
}

// - - レベルパネルの設定 - -

const LEVEL = ["LEVEL 1", "LEVEL 2", "LEVEL 3"];
const LEVEL_EN = ["level1", "level2", "level3"];
const LEVEL_COLOR = ["background:linear-gradient(#00FF20, rgba(0,150,55,0.5));", 
					 "background:linear-gradient(#05BBFF, rgba(0,80,255,0.5));", 
					 "background:linear-gradient(#FF8000, rgba(255,150,0,0.5));"];
const LEVEL_POSITION = ["left:6%;", "left:34.5%;", "right:6.5%;"];

// - - Twitter用画像の設定 - -

let MEDAL_IMAGE; // 合格したときのTwitter用画像

if (KENTEI_NAME === "六級") {
	MEDAL_IMAGE = {"満点":"t.co/b7KisIGcaG", "合格":"t.co/FtC7ur4IF5", "あと少し":"t.co/AQ3EzUtajU", "不合格":""};
} else if (KENTEI_NAME === "五級") {
	MEDAL_IMAGE = {"満点":"t.co/c4q8AcCcq1", "合格":"t.co/1T9Zqwfx11", "あと少し":"t.co/1jLh7dBZTS", "不合格":""};
} else if (KENTEI_NAME === "四級") {
	MEDAL_IMAGE = {"満点":"t.co/tjACUEMGBz", "合格":"t.co/7r08yfY5AM", "あと少し":"t.co/OREdNhCkRf", "不合格":""};
} else if (KENTEI_NAME === "三級") {
	MEDAL_IMAGE = {"満点":"t.co/qF6L8Kn3Ht", "合格":"t.co/N8Rt9Uied9", "あと少し":"t.co/uZRMsIK03G", "不合格":""};
} else if (KENTEI_NAME === "二級") {
	MEDAL_IMAGE = {"満点":"t.co/tUHG7PxZ9X", "合格":"t.co/sZYPRm4FnU", "あと少し":"t.co/72O9nyL3C9", "不合格":""};
} else if (KENTEI_NAME === "一級") {
	MEDAL_IMAGE = {"満点":"t.co/9aDyZh7mFD", "合格":"t.co/TpRfoOPugx", "あと少し":"t.co/MoO9h6Asmx", "不合格":""};
} else if (KENTEI_NAME === "当て字(漢検１級)") {
	MEDAL_IMAGE = {"満点":"t.co/QrnDArCcWw", "合格":"t.co/HJXxC67et8", "あと少し":"t.co/kKy6SfzxbU", "不合格":""};
} else if (KENTEI_NAME === "熟語の読み(漢検１級)") {
	MEDAL_IMAGE = {"満点":"t.co/DB8BYX6pEN", "合格":"t.co/sLCJD5HsW1", "あと少し":"t.co/EeITdNnXeo", "不合格":""};
} else if (KENTEI_NAME === "熟語の読み(漢検準１級)") {
	MEDAL_IMAGE = {"満点":"t.co/DB8BYX6pEN", "合格":"t.co/sLCJD5HsW1", "あと少し":"t.co/EeITdNnXeo", "不合格":""};
}