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

const CLASS = 4;
const KENTEI_NAME = "四級";
const FILE_NAME = "4class"; // 「○○.html」などで使用
const GENRE = ["植物", "魚介類", "虫", "動物", "物・現象"];
const Q_NUM = [10, 10, 10, 5]; // 大問ごとの問題数
const UNIT_SCORE = [3, 3, 3, 2]; // 大問ごとにおける一問正解の配点
const MAX_SCORE = 100; // 満点
const GOKAKU_SCORE = 80; // 合格点

let QUESTION_STR = new Array(); // 問題文＋配点
let KANJI = new Array(); // 出題漢字
let YOMI = new Array(); // 正解

// 多次元配列の生成
for (let i=0; i<10; i++) {
	QUESTION_STR[i] = new Array();
	KANJI[i] = new Array();
	YOMI[i] = new Array();
}

// Q1

QUESTION_STR[0][0] = '次の植物を表す漢字の読みを答えなさい。';

KANJI[0][0] = new Array("水綿","紫丁香花","草石蚕","茉莉花(「まつりか」以外で)",
				  "慈姑","罌粟","覇王樹(「はおうじゅ」以外で)","虎杖","鳳尾草","石刁柏",
				  "鰐梨(「わになし」以外で)","羅漢柏(「らかんはく」以外で)","鴨脚樹","杜衡","玉蝉花(「ぎょくせんか」以外で)",
				  "眉児豆","榕樹","洎夫藍","懸鉤子","鶏冠木","玉簪花",
				  "来路花","素馨(「そけい」以外で)","蘿蔔(「らふく」以外で)","八仙花(「はっせんか」以外で)","塘蒿","看麦娘",
				  "海石榴:海柘榴","女無天","鴨脚草","羊蹄","黄蜀葵","水蠟樹","蕺草",
				  "塩膚木","薏苡","地楡","金合歓(「きんごうかん」以外で)","雁来紅(「がんらいこう」以外で)",
				  "地血","覆盆子","了鳳草","翹揺","鉄脚梨","迎春花","海蘊","若榴","防已(「ぼうい」以外で)",
				  "丁翁","七葉樹(「しちようじゅ」以外で)","裙帶菜","虎刺","紫羅欄花");

YOMI[0][0] = new Array("あおみどろ","むらさきはしどい,リラ,ライラック","ちょろぎ,(ちょうろぎ)","ジャスミン",
				  "くわい","けし","サボテン","いたどり","いのもとそう","アスパラガス,(せきちょうはく)",
				  "アボカド","あすなろ","いちょう","かんあおい","はなしょうぶ",
				  "いんげんまめ","がじゅまる","サフラン","きいちご","かえで","ぎぼし,(ぎぼうし),(たまのかんざし)",
				  "サルビア","ジャスミン","すずしろ","あじさい","セロリ","すずめのてっぽう",
				  "つばき","ミント","ゆきのした","ぎしぎし","とろろあおい","いぼたのき","どくだみ,(どくだめ)",
				  "ぬるで","はとむぎ,よくい,(じゅずだま)","われもこう","アカシア","はげいとう",
				  "あかね","いちご","いわがねそう","げんげ","ぼけ","こぶし","もずく","ざくろ","つづらふじ",
				  "あけび","とち,(とちのき)","わかめ","ありどおし","あらせいとう");

QUESTION_STR[0][1] = '次の魚介類を表す漢字の読みを答えなさい。';

KANJI[0][1] = new Array("海鷂魚","狗母魚","蝦虎魚","海扇","鶏魚","鱰:鱪","梅花皮",
				  "斉魚","拶双魚","鱓","鮱","石斑魚","鰄",
				  "竹麦魚","鯢","鯳","海鰻",
				  "鯲","魦","鰶","鱆","章魚","鯇",
				  "鮇","鰛","鱫","鱛","魳","蟶貝",
				  "楚蟹","白帯魚","春告魚","鮊子","望潮魚");

YOMI[0][1] = new Array("えい","えそ","はぜ","ほたてがい","いさき","しいら","かいらぎ",
				  "えつ","さっぱ","うつぼ,(ごまめ),(かわへび)","おおぼら,(ぼら)","うぐい","かいらぎ,うぐい,(さめ)",
				  "ほうぼう","さんしょううお","すけとうだら","あなご",
				  "どじょう","いさざ","このしろ","たこ","たこ","あめのうお",
				  "いわな","いわし","むつ","えそ","かます","まてがい",
				  "ずわいがに","たちうお","にしん","いかなご","いいだこ");

QUESTION_STR[0][2] = '次の虫を表す漢字の読みを答えなさい。';

KANJI[0][2] = new Array("竜蝨","蠹魚","飛蛩(「ひきょう」以外で)","吉丁虫","夜光","豹脚蚊",
				  "竹節虫","歩行虫","蛭","蝸牛被","茅蜩:晩蟬","蜱:蟎",
				  "蚋","蜈蚣","水爬虫","寒蝉(「かんせん」以外で)","磯蚯蚓","蛹",
				  "蟾蜍(「せんじょ」以外で)","蝌蚪(「かと」以外で)","蠹","水黽",
				  "金鐘児(「きんしょうじ」以外で)","埋葬虫","隠翅虫","蛁蟟","水蠟樹蠟虫",
				  "小灰蝶","蟪蛄(「けいこ」以外で)","叩頭虫","螽(かな３文字で)");

YOMI[0][2] = new Array("げんごろう,(りょうしつ)","しみ,(とぎょ)","いなご","たまむし","ほたる","やぶか",
				  "ななふし","おさむし,(ごみむし)","ひる","まいまいかぶり","ひぐらし","だに",
				  "ぶゆ,ぶよ,(ぶと)","むかで","たがめ","つくつくぼうし","いそめ","さなぎ",
				  "ひきがえる,ひき,がまがえる,がま","おたまじゃくし","きくいむし,しみ","あめんぼ",
				  "すずむし","しでむし","はねかくし","みんみんぜみ","いぼたろうむし",
				  "しじみちょう","にいにいぜみ,(つくつくぼうし)","こめつきむし,ぬかずきむし,ぬかづきむし","いなご");

QUESTION_STR[0][3] = '次の動物を表す漢字の読みを答えなさい。';

KANJI[0][3] = new Array("更格廬","羊駱駝","避役","桃花鳥","朱雀(かな３文字で)",
				  "魚狗(「ぎょく」以外で)","白頭鳥:鵯","鵤:斑鳩","鶍:交喙","鶚:雎鳩",
				  "鵇","鯆","雀鷂:雀鷹","鶩","鶸","珠鶏",
				  "鷦鷯(「しょうりょう」以外で)","鶲","鶤鶏","軍鶏(「ぐんけい」以外で)",
				  "山原水鶏","蚊母鳥","鷽","伽藍鳥(「がらんちょう」以外で)","春告鳥");

YOMI[0][3] = new Array("カンガルー","アルパカ","カメレオン","とき","すざく",
				  "かわせみ","ひよどり:ひよどり,ひよ","いかる,いかるが","いすか","みさご",
				  "とき,つき","いるか","つみ","あひる","ひわ","ほろほろちょう",
				  "みそさざい,(さざい),(さざき)","ひたき","とうまる","しゃも",
				  "やんばるくいな","よたか","うそ","ペリカン","うぐいす");
				  
QUESTION_STR[0][4] = '次の物・現象を表す漢字の読みを答えなさい。';

KANJI[0][4] = new Array("鞦","箍","日照雨","筧","犢鼻褌",
				  "障泥(「しょうでい」以外で):泥障","飛白(「ひはく」以外で):絣","帙","襖","鏃",
				  "靨","黶","雀斑:雀卵斑","黥(かな４文字で)","鬮","襷",
				  "黴","鏨","橇","硯","匕首","環(かな３文字で)",
				  "韋","鎺","篝火","楔","小鉤:鞐",
				  "燧石(「すいせき」以外で)","烽火(「ほうか」以外で)","襤褸","面繫","衾","龕",
				  "眉尖刀","母衣:袰","褞袍(かな３文字で):縕袍(かな３文字で)","御襁褓","裲襠","髢",
				  "髫髪","勾欄(「こうらん」以外で)","框","貫緡","糀",
				  "胡籙(「ころく」以外で):胡簶(「ころく」以外で)","箙","畚","鞴",
				  "襯(かな３文字で)","褥:茵","行縢","鞅");

YOMI[0][4] = new Array("しりがい,(しりがき)","たが","そばえ","かけひ,かけい","ふんどし",
				  "あおり","かすり","ふまき","ふすま,(あお),(おう)","やじり",
				  "えくぼ","ほくろ,(あざ)","そばかす","いれずみ","くじ","たすき",
				  "かび","たがね","そり,かんじき","すずり","あいくち","たまき",
				  "なめしがわ,(おしかわ)","はばき","かがりび","くさび,(ほうだて)","こはぜ",
				  "ひうちいし","のろし","ぼろ,らんる","おもがい","ふすま","ずし,(れい),(もこし)",
				  "なぎなた","ほろ","どてら","おむつ","うちかけ","かもじ",
				  "うない,(うないがみ)","てすり","かまち","かんざし","こうじ",
				  "やなぐい","えびら,(やなぐい)","もっこ,ふご,(もっこう)","ふいご",
				  "はだぎ","しとね,(とこしき),(にく):しとね","むかばき","むながい,(はらおび)");

// Q2

QUESTION_STR[1][0] = '次の漢字の読みを<u>訓読みで(送り仮名も含めて)</u>答えなさい。';

KANJI[1][0] = new Array("凝と","悄然る","駭く","辷る","斃す","斃る",
				  "爨ぐ","点頭く","綰ねる","備に","発く",
				  "讒う","擲つ","噦り","燕ぐ","潜く","嘔吐く","禁める",
				  "煩瑣い","密着く","孅い","垂とする","畷","遠離る","齟う","決れる",
				  "互に","誣る","足労れる","彷徨く","饑い","諷る",
				  "遽しい","逡巡う","抉る","饕る","欹てる","霾る","遉に",
				  "翹てる","熙ぶ","不可ない","不平す","縢る","低頭く",
				  "齬う","跼まる","銜える","挿頭す","颯と","俛首れる","壊る","慥か",
				  "狡猾い","痙攣る","聳つ","寝穢い","焦燥る",
				  "右ける","易る","横れる","音り",
				  "岸つ","逆め","苦だ","集く",
				  "原ねる","孤く","撮む","主る","庶幾う:冀う","纔か",
				  "中てる","同に","白す","非る","文る","力める","関る(「かかわる」以外で)","激る","甚振る",
				  "明明地に","猶予う","泥濘る","感染れる:気触れる");

YOMI[1][0] = new Array("じっと","しょげる","おどろく","すべる","たおす","くたばる",
				  "かしぐ","うなずく","たがねる,わがねる","つぶさに","あばく,(ひらく)",
				  "へつらう","なげうつ","しゃっくり","くつろぐ","かずく","えずく","いさめる",
				  "うるさい","ひっつく","かよわい","なんなんとする","なわて","とおざかる","くいちがう","しゃくれる",
				  "かたみに","そしる","くたびれる","うろつく","ひだるい","あてこする",
				  "あわただしい","ためらう","えぐる","むさぼる","そばだてる","つちふる","さすがに",
				  "つまだてる","よろこぶ","いけない","こぼす","かがる","うつむく",
				  "くいちがう","せぐくまる","くわえる","かざす","さっと","うなだれる","やぶる","たしか",
				  "ずるい","ひきつる","そばだつ","いぎたない","あせる",
				  "たすける","あなどる","あふれる","たより",
				  "かどだつ","あらかじめ","はなはだ","すだく",
				  "たずねる","そむく","つまむ","つかさどる","こいねがう","わずか",
				  "あてる","ともに","もうす","そしる","かざる","つとめる","あずかる","たぎる","いたぶる",
				  "あからさまに","いざよう,たゆたう","ぬかる","かぶれる");

QUESTION_STR[1][1] = '次の漢字一文字の読みを<u>訓読みで</u>答えなさい。';

KANJI[1][1] = new Array("歯(かな３文字で)","釉(かな５文字で)","往(かな４文字で)","影(かな４文字で)","台(かな３文字で)",
				  "磧(かな３文字で)","漣(かな４文字で)","擅(かな５文字で)","誄(かな５文字で)","刑(かな３文字で)",
				  "医(かな３文字で)","違(かな４文字で)","韻(かな３文字で)","艦(かな５文字で)",
				  "材(かな３文字で)","況(かな４文字で)","菌(かな３文字で)");
				  
YOMI[1][1] = new Array("よわい","うわぐすり","いにしえ","まぼろし","うてな,(しもべ)",
				  "かわら,(さばく)","さざなみ","ほしいまま","しのびごと,いのりごと","しおき",
				  "くすし","よこしま","ひびき","いくさぶね",
				  "まるた","ありさま","きのこ");

// Q3

QUESTION_STR[2][0] = '次の熟語の読みを<u>音読みで</u>答えなさい。';

KANJI[2][0] = new Array("俊乂","俾倪","兌換","狂飆","聚斂","讒謗","猜疑","靉靆",
				  "咫尺","暗翳","萎靡","街衢","雲鬟","船檣","兀々","瀰漫","烏鵲",
				  "撫恤","瀛海","倏忽","山墅","戯謔","瀟洒:瀟灑","稼穡","膏腴",
				  "砌下","縹緲","羸瘦","抃躍","涓滴","層霄","巨擘",
				  "耋艾","垢膩","褫奪","検覈","謹飭","螽斯","円顱",
				  "覬覦","贏輸","汨没","愧赧","誄文","芟除",
				  "醯醢","韜略","餒虎","縉紳","月鼈","瑪瑙","瑕疵","崔嵬","仄日",
				  "飫聞","髫齔","鹵莽","匕鬯","掉尾","巉厳","蛇蠍",
				  "熙笑","麤鹵","龕灯","鎖鑰","猖獗","虹霓","草莽","縟瘡",
				  "庠序","白堊","渺漫","馥郁","峰巒","和煦","午餉","爨室","微恙",
				  "緇衣","酒醴","書肆","羶肉","竃煙","懐孕","曩祖","爺娘","溷濁",
				  "澆漓","警蹕","闕下","冀求","醵金","羈縻","跼蹐","蹉躓","奢侈","馘首",
				  "掣肘","贍給","綢繆","瀦溜","闖入","擺脱","跋扈","蹣跚",
				  "蠱惑","出廬","蒼氓","禁遏","譎詐","燮理","悖戻","干戈","勍敵",
				  "戍卒","佩剣","兵燹","艟艨","游弋","薀藉","狷介","慳貪","訥朴",
				  "貪婪","放埒","怡々","瑩徹","剴切","危殆","倥偬","毫釐",
				  "荏苒","駘蕩","稠密","鄙俗","澎湃","戞々","溘焉","虧盈","軒輊",
				  "嚠喨","砥礪","操觚","燔書","錫杖","賻儀","夭逝",
				  "瓔珞","延袤","啓蟄","権輿","肯綮","大逵","卓犖","壊疽","灰燼",
				  "芥蔕","改刪","蟻冢","鞠躬如","薫蕕","啓迪","喧囂",
				  "忸怩","胡狄","螫毒","袒裼","兵站","屯蹇","摶飯","鏖殺");

YOMI[2][0] = new Array("しゅんがい","へいげい","だかん","きょうひょう","しゅうれん","ざんぼう","さいぎ","あいたい",
				  "しせき","あんえい","いび","がいく","うんかん","せんしょう","こつこつ","びまん","うじゃく",
				  "ぶじゅつ","えいかい","しゅっこつ","さんしょ","ぎぎゃく","しょうしゃ","かしょく","こうゆ",
				  "せいか","ひょうびょう","るいそう","べんやく","けんてき","そうしょう","きょはく",
				  "てつがい","こうじ,くに","ちだつ","けんかく","きんちょく","しゅうし","えんろ",
				  "きゆ","えいしゅ,(えいゆ)","こつぼつ","きたん","るいぶん","さんじょ,せんじょ",
				  "けいかい","とうりゃく","だいこ","しんしん","げつべつ","めのう","かし","さいかい","そくじつ",
				  "よぶん","ちょうしん","ろもう,ろぼう","ひちょう","とうび,ちょうび","ざんがん","だかつ",
				  "きしょう","そろ","がんとう","さやく","しょうけつ","こうげい","そうもう,そうぼう","じょくそう",
				  "しょうじょ","はくあ","びょうまん","ふくいく","ほうらん","わく","ごしょう","さんしつ","びよう",
				  "しい","しゅれい","しょし","せんにく","そうえん","かいよう","のうそ","やじょう","こんだく",
				  "ぎょうり","けいひつ","けっか","ききゅう","きょきん","きび","きょくせき","さち","しゃし","かくしゅ",
				  "せいちゅう","せんきゅう","ちゅうびゅう","ちょりゅう","ちんにゅう","はいだつ","ばっこ","まんさん",
				  "こわく","しゅつろ","そうぼう","きんあつ","けっさ","しょうり","はいれい","かんか","けいてき",
				  "じゅそつ","はいけん","へいせん","どうもう","ゆうよく","うんしゃ","けんかい","けんどん","とつぼく",
				  "どんらん","ほうらつ","いい","えいてつ","がいせつ","きたい","こうそう","ごうり",
				  "じんぜん","たいとう","ちゅうみつ","ひぞく","ほうはい","かつかつ","こうえん","きえい","けんち",
				  "りゅうりょう","しれい","そうこ","はんしょ","しゃくじょう","ふぎ","ようせい",
				  "ようらく","えんぼう","けいちつ","けんよ","こうけい","たいき","たくらく","えそ","かいじん",
				  "かいたい","かいさん","ぎちょう","きっきゅうじょ","くんゆう","けいてき","けんごう",
				  "じくじ","こてき","せきどく","たんせき","へいたん","ちゅんけん","たんぱん","おうさつ");

// Q4

QUESTION_STR[3][0] = '次の国名を表す漢字の読みを<u>カタカナで</u>答えなさい。';

KANJI[3][0] = new Array("愛斯蘭","愛蘭","亜弗掩担","阿爾及","亜爾然丁",
				  "英吉利","伊色剌","烏克蘭","宇柳具","埃及",
				  "濠太剌利","墺太利","和蘭","加奈陀","幾肉亜",
				  "玖馬","希臘","哥倫比亜","牙買加","新嘉坡",
				  "瑞西","瑞典","蘇丹","西班牙","泰",
				  "智利","丁抹","独逸","土耳古","新西蘭",
				  "泥婆羅","諾威","巴羅貝","洪牙利","比律賓",
				  "芬蘭","伯剌西爾","仏蘭西","勃牙利","越南",
				  "部屋重良","秘露","白耳義","波蘭","葡萄牙",
				  "羅馬尼亜","墨西哥","露西亜","墓利比亜","莫臥児");

YOMI[3][0] = new Array("アイスランド","アイルランド","アフガニスタン","アルジェリア","アルゼンチン",
				  "イギリス","イスラエル","ウクライナ","ウルグアイ","エジプト",
				  "オーストラリア","オーストリア","オランダ","カナダ","ギニア",
				  "キューバ","ギリシャ","コロンビア","ジャマイカ","シンガポール",
				  "スイス","スウェーデン","スーダン","スペイン","タイ",
				  "チリ","デンマーク","ドイツ","トルコ","ニュージーランド",
				  "ネパール","ノルウェー","パラグアイ","ハンガリー","フィリピン",
				  "フィンランド","ブラジル","フランス","ブルガリア","ベトナム",
				  "ベネズエラ","ペルー","ベルギー","ポーランド","ポルトガル",
				  "ルーマニア","メキシコ","ロシア","ボリビア","モンゴル");