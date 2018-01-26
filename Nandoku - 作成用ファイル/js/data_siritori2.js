/*
KANJI[][] = new Array("","","","","",
				  "","","","","",
				  "","","","","",
				  "","","","","");

YOMI[][] = new Array("","","","","",
				  "","","","","",
				  "","","","","",
				  "","","","","");
*/

let KANJI = new Array();
let YOMI = new Array();

let TITLE = "漢字しりとり(仮) - レベル２";
let PAGE_TITLE = "漢字しりとり(仮) レベル２";
let BACKGROUND_URL = "../img/img_home.jpg";

let LEVEL = 2;
let NAME = "フブキ";
let NAME_EN = "pen";
let IMAGE_URL = "t.co/l4dUTmFulK";
let GENRE = "魚介類・海関連のもの";

// 「あ」～「お」

KANJI[0] = new Array("醤蝦","鮑","琵琶魚","銀口魚","海鰻","海驢",
				  "鯇","阿乙呉","相嘗魚","𩺊",
				  "羊駱駝","鱫鱜","雨虎");

YOMI[0] = new Array("あみ","あわび","あんこう","あゆ","あなご","あしか",
				  "あめのうお,あめ","あいご","あいなめ","あら",
				  "アルパカ","あいきょう,あゆ","あめふらし");

KANJI[1] = new Array("鮊子","望潮魚","鶏魚","貽貝","鯆",
				  "鰮","墨魚","竜蝦","魦","鮇",
				  "東南風","鯨","座魚","金糸魚");

YOMI[1] = new Array("いかなご","いいだこ","いさき","いがい","いるか",
				  "いわし","いか","いせえび","いさぎ","いわな",
				  "いなさ","いさな,いさ","いざりうお","いとよりだい,いとより");

KANJI[2] = new Array("霊螺子","桃花魚","鰾","泉海魚","墨西哥鯢",
				  "鱓","鱔");

YOMI[2] = new Array("うに","うぐい","うきぶくろ,うおのふえ","うなぎ","ウーパールーパー",
				  "うつぼ,うみへび","うみへび");

KANJI[3] = new Array("海鷂魚","狗母魚","斉魚","魵",
				  "鰓");

YOMI[3] = new Array("えい","えそ","えつ","えび",
				  "えら");

KANJI[4] = new Array("膃肭臍","海狗","鰲","追河","虎魚",
					 "鰧","鸚鵡貝");

YOMI[4] = new Array("オットセイ","オットセイ","おおがめ,おおうみがめ,おおすっぽん","おいかわ","おこぜ",
					"おこぜ","おうむがい");

// 「か」～「こ」

KANJI[5] = new Array("鰍","旗魚","火魚","梭子魚","川蜷",
				  "魴","王余魚","硴","杜父魚",
				  "鱟","鯑","鱲","鮍",
				  "梅花皮","松魚","鮋");

YOMI[5] = new Array("かじか","かじき","かながしら","かます","かわにな",
				  "かがみだい,かがみたい,かがみうお","かれい","かき","かじか,かくぶつ,かまきり",
				  "かぶとがに","かずのこ","からすみ","かわはぎ",
				  "かいらぎ","かつお","かさご");

KANJI[6] = new Array("鼠頭魚","蚶","細螺","金海鼠","黄鰭","黍魚子");

YOMI[6] = new Array("きす","きさ","きさご","きんこ","きはだ","きびなご");

KANJI[7] = new Array("鮓","烏頬魚");

YOMI[7] = new Array("くらげ","くろだい");

KANJI[8] = new Array();

YOMI[8] = new Array();

KANJI[9] = new Array("鯒","牛尾魚","鮗","鰶","鯯","鮣","氷下魚","胡盧鯛",
				  "小鰭");

YOMI[9] = new Array("こち","こち","このしろ","このしろ","このしろ","こばんざめ","こまい","ころだい",
				  "こはだ");

// 「さ」～「そ」

KANJI[10] = new Array("馬鮫魚","青花魚","十脚","蠆","鯢","青箭魚",
				  "針嘴魚","青串魚");

YOMI[10] = new Array("さわら","さば","さくらえび","さそり","さんしょううお","さごし",
				  "さより","さんま");

KANJI[11] = new Array("青蝦","青竜蝦","鯱","鬼頭魚","犁頭魚","望潮",
				  "鱠残魚","鞋底魚","鮪","四時美");

YOMI[11] = new Array("しばえび","しゃこ","しゃちほこ,しゃち","しいら","しゅもくざめ","しおまねき",
				  "しらうお","したびらめ","しび","しじみ");

KANJI[12] = new Array("鱸","松江魚","助惣鱈","鯳","鯐","鯣");

YOMI[12] = new Array("すずき","すずき","すけそうだら","すけとうだら","すばしり","するめ");

KANJI[13] = new Array();

YOMI[13] = new Array();

KANJI[14] = new Array("曹以","宗太鰹","袖烏賊");

YOMI[14] = new Array("そい","そうだがつお","そでいか");

// 「た」～「と」

KANJI[15] = new Array("大口魚","白帯魚","海馬","海燕","鮉",
				  "鰖","鱮","章魚");

YOMI[15] = new Array("たら,たいこうぎょ","たちうお","たつのおとしご","たこのまくら","たい",
				  "たかべ","たなご","たこ");

KANJI[16] = new Array("鱅","知知武","鱘","海鯽");

YOMI[16] = new Array("ちちかぶり","ちちぶ","ちょうざめ","ちぬ");

KANJI[17] = new Array("鰢","燕魚","鮺");

YOMI[17] = new Array("つくら","つばめうお","つけうお");

KANJI[18] = new Array("天竺鯛");

YOMI[18] = new Array("てんじくだい");

KANJI[19] = new Array("魹","小鮑","止比乎");

YOMI[19] = new Array("とど","とこぶし","とびうお");

// 「な」～「の」

KANJI[20] = new Array("土肉","土笋","鱠","魸","鮀");

YOMI[20] = new Array("なまこ","なまこ","なます","なまず","なまず");

KANJI[21] = new Array("鮸","鰾膠","虹鱒");

YOMI[21] = new Array("にべ","にべ","にじます");

KANJI[22] = new Array("饅鰻");

YOMI[22] = new Array("ぬたうなぎ");

KANJI[23] = new Array();

YOMI[23] = new Array();

KANJI[24] = new Array();

YOMI[24] = new Array();

// 「は」～「ほ」

KANJI[25] = new Array("雷魚","鮠","鱧",
				  "鰚","鰣","魬","鮞");

YOMI[25] = new Array("はたはた","はや,はえ,はい","はも",
				  "はらか","はす","はまち","はららご,はらご");

KANJI[26] = new Array("鰉","海盤車","比目魚","鯷","鰭");

YOMI[26] = new Array("ひがい","ひとで","ひらめ","ひしこ","ひれ");

KANJI[27] = new Array("鱶","鰾","鮐","魨","鮒");

YOMI[27] = new Array("ふか","ふえ","ふぐ","ふぐ","ふな");

KANJI[28] = new Array();

YOMI[28] = new Array();

KANJI[29] = new Array("竹麦魚","老海鼠","梭尾螺","海扇");

YOMI[29] = new Array("ほうぼう","ほや","ほらがい","ほたてがい");

// 「ま」～「も」

KANJI[30] = new Array("蟶","円坊魚","金鎗魚","鱒","鯧","魴");

YOMI[30] = new Array("まて,まてがい","まんぼう","まぐろ","ます","まながつお","まとうだい,まとうお");

KANJI[31] = new Array("水蚤","水松貝","蓑笠子","鼓豆虫","水蛸");

YOMI[31] = new Array("みじんこ","みるがい","みのかさご","みずすまし","みずだこ");

KANJI[32] = new Array("鰘","鱫");

YOMI[32] = new Array("むろあじ","むつ");

KANJI[33] = new Array("赤目魚","麦魚","丁斑魚","撮干魚","青鱂","𩻛","眼撥");

YOMI[33] = new Array("めなだ","めだか","めだか","めだか","めだか","めいただき","めばち");

KANJI[34] = new Array("藻魚","諸子魚");

YOMI[34] = new Array("もうお,もいお","もろこ");

// 「や」～「よ」

KANJI[35] = new Array("山女魚","魚叉","水蠆");

YOMI[35] = new Array("やまめ","やす","やご");

KANJI[36] = new Array("湯鯉");

YOMI[36] = new Array("ゆごい");

KANJI[37] = new Array("葦登","瓔珞貝");

YOMI[37] = new Array("よしのぼり","ようらくがい");

// 「ら」～「ろ」

KANJI[38] = new Array("蘭鋳","海獺","雷魚");

YOMI[38] = new Array("らんちゅう","らっこ","らいぎょ");

KANJI[39] = new Array("龍宮之遣","陸前海豚");

YOMI[39] = new Array("りゅうぐうのつかい","りくぜんいるか");

KANJI[40] = new Array();

YOMI[40] = new Array();

KANJI[41] = new Array("連魚");

YOMI[41] = new Array("れんぎょ");

KANJI[42] = new Array("海蝲蛄","驢馬","浪人鰺","蝋燭𩸽","露西亜蛽");

YOMI[42] = new Array("ロブスター","ろば","ろうにんあじ","ろうそくぼっけ","ロシアバイ");

// 「わ」

KANJI[43] = new Array("藁素坊","鱷","公魚","草鯝魚","稚鰤");

YOMI[43] = new Array("わらすぼ","わに","わかさぎ","わたか","わらさ");



// 「が」～「ご」

KANJI[44] = new Array();

YOMI[44] = new Array();

KANJI[45] = new Array("黄顙魚","剛腮魚","刻魚","義須","銀馬","義万","剱頭");

YOMI[45] = new Array("ぎぎ","ぎぎ","ぎざみ","ぎす","ぎま","ぎま","ぎんざめ");

KANJI[46] = new Array();

YOMI[46] = new Array();

KANJI[47] = new Array("下足","玄華","挙固","元禄鯛");

YOMI[47] = new Array("げそ,げそく","げんげ","げんこ","げんろくだい");

KANJI[48] = new Array("権瑞","古女","巨頭鯨","胡麻斑海豹","沙蚕",
					  "海黄顙魚","鮴");

YOMI[48] = new Array("ごんずい","ごまめ","ごんどうくじら","ゴマフアザラシ","ごかい",
					 "ごんずい","ごり");

// 「ざ」～「ぞ」

KANJI[49] = new Array();

YOMI[49] = new Array();

KANJI[50] = new Array();

YOMI[50] = new Array();

KANJI[51] = new Array();

YOMI[51] = new Array();

KANJI[52] = new Array();

YOMI[52] = new Array();

KANJI[53] = new Array();

YOMI[53] = new Array();

// 「だ」～「ど」

KANJI[54] = new Array("大王烏賊","獺","啄長魚");

YOMI[54] = new Array("だいおういか","だつ","だつ");

KANJI[55] = new Array();

YOMI[55] = new Array();

KANJI[56] = new Array();

YOMI[56] = new Array();

KANJI[57] = new Array();

YOMI[57] = new Array();

KANJI[58] = new Array("溝貝","鯲","鈍甲");

YOMI[58] = new Array("どぶがい","どじょう","どんこ");

// 「ば」～「ぼ」

KANJI[59] = new Array("海蠃","破家蛤");

YOMI[59] = new Array("ばい","ばかがい");

KANJI[60] = new Array("魚籠","鬢長鮪");

YOMI[60] = new Array("びく","びんながまぐろ");

KANJI[61] = new Array("鰤","大口黒鱒","醜鯛");

YOMI[61] = new Array("ぶり","ブラックバス","ぶだい");

KANJI[62] = new Array("火烏賊","倍良");

YOMI[62] = new Array("ベカ","べら");

KANJI[63] = new Array("蛇頭魚","牡丹蝦");

YOMI[63] = new Array("ぼら","ぼたんえび");

// 「ぱ」～「ぽ」

KANJI[64] = new Array();

YOMI[64] = new Array();

KANJI[65] = new Array();

YOMI[65] = new Array();

KANJI[66] = new Array();

YOMI[66] = new Array();

KANJI[67] = new Array();

YOMI[67] = new Array();

KANJI[68] = new Array();

YOMI[68] = new Array();

