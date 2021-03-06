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

const CLASS = 2;
const KENTEI_NAME = "二級";
const FILE_NAME = "2class"; // 「○○.html」などで使用
const Q_NUM = [20, 10, 5]; // 大問ごとの問題数
const UNIT_SCORE = [3, 3, 2]; // 大問ごとにおける一問正解の配点
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

QUESTION_STR[0][0] = '次の当て字の読みを答えなさい。';

KANJI[0][0] = new Array("珠穆朗瑪","皮卡丘","目前(かな３文字で)","紫荊(かな４文字で)","淡把菰",
				  "乙醇","係蹄","結黄","老少年","六月菊","金松",
				  "看一","扣土","巨句麦","扣子","了得","番木鼈",
				  "二十日草","聊爾","休留","兀子","毛茛","続命縷",
				  "台湾鶩","土肉","云号","常春藤","巴蛇","烏臼","野菰",
				  "馬勃","壁生草","石竜牙草","矮柏","白英",
				  "天竺花","千秋","石長生","君府","垣衣",
				  "滴滴金","鶗鴂","酴釄醁","火踏子","天青地白","褻稲",
				  "千金藤","斑黄牛","魚肆","繡竹","刺槐","時辰鵲",
				  "臙脂菜","樹蛤","海鮹子","石胡萎","東海美人",
				  "金銀蓮花","一日花","棘甲贏","馬脊瘡","牡蒿",
				  "油身魚","養花天","砕米菜","蹲鴟","婆婆納",
				  "車前葉","紫羅蘭","加拿林雀","金蓮花","淫羊藿","牛宿",
				  "磚子苗(かな２文字で)","哯吐","蒙鳩","車鼇","葩煎","茯苓","漁翁","泥胡菜",
				  "目翳","夜尿","末殺","鴾母","半首","匹如身","父母(「か」から始めて)",
				  "変若水","奠稲","白痢(かな２文字で)","牙儈","熟瓜","草本威霊仙",
				  "天麻裏","山馬蝗(かな６文字で)","裏海(かな５文字で)","分疏(かな４文字で)","搗蒜齏",
				  "鳳了草","蠁子","欒樹","海黄顙魚","拙老婆","鶺鴒(かな５文字で)",
				  "桑鳲","墜子","天麻","海鯽","火烏賊","鷓鴣菜","石敲","鶴頂草",
				  "金衣公子","鶊鶬","冬燕","鴘鵲","焠児","折傷木","小竜仙",
				  "白魚蟫","楓蛾","遊行女児","満天星(かな６文字で)","矰繳");

YOMI[0][0] = new Array("チョモランマ","ピカチュウ","まさか","すおうき","たばこ",
				  "エタノール","わな","みつまた","はげいとう","みやまよめな","こうやまき,まき",
				  "ちょっと","たたき","なでしこ","ぼたん","さすが","マチン",
				  "ぼたん","かりそめ","いいとよ","ごし","うまのあしがた,きんぽうげ","くすだま,しょくめいる",
				  "バリケン","なまこ","いいなずけ","いつまでぐさ,つた","うわばみ","なんきんはぜ","なんばんぎせる",
				  "ほこりたけ","いつまでぐさ","いしもちそう","はいびゃくしん","ひよどりじょうご",
				  "はぎ","いわひば","はこねそう","コンスタンチノープル","しのぶぐさ",
				  "おぐるま","ほととぎす","どぶろく","こたつ","ちちこぐさ","けしね",
				  "はすのはかずら","あめまだら","いさば","なでしこ","アカシア","カナリア",
				  "あかざ","あまがえる","たこ","ちどめぐさ","いがい",
				  "ががぶた","とろろあおい","うに","たこ","おとこよもぎ",
				  "いたちうお","はなぐもり","げんげ","いもがしら","いぬのふぐり",
				  "かたくり","かきつばた","カナリア","のうぜんはれん","いかりそう,うむきな","いなみぼし",
				  "くぐ","つだみ","みそさざい","おおはまぐり","はぜ","まつほど","むらぎみ","きつねあざみ",
				  "ひ","よばり","うらごけ","ふなしうずら","はつむり,はつぶり","するすみ,(するつみ)","かぞいろは,かぞいろ",
				  "おちみず","くましね","なめ","すあい","ほぞち,(ほそじ)","くがいそう",
				  "あじさい","ぬすびとはぎ","カスピかい","いいわけ","ひるつき",
				  "いわおもだか","さし","もくげんじ,むくれんじのき","ごんずい","うそ","にわたたき",
				  "いかる","いわ","おにのやがら","ちぬ","ベカ","まくり","せきれい","あかざ",
				  "うぐいす","ひばり","ちどり","あとり","マッチ","むくろじ","しらびそ",
				  "しみ","しらがたろう","あそびめ","はくちょうげ","いぐるみ");

// Q2

QUESTION_STR[1][0] = '次の漢字の読みを<u>訓読みで(送り仮名も含めて)</u>答えなさい。';

KANJI[1][0] = new Array("緝く","朞り","齠","麾る","餔れ","蹕","鯁",
				  "乖しい","仄る","蹶やか","輜","物多に","魚る",
				  "厖じる","曼る","哘う","亹しい","驀ち","輹",
				  "揉じる","揄す","搦げる","昃ぎ","曁る","餬する","轜","逋",
				  "彳む","倪い","倥る","睥る","韜","讎す",
				  "倚む","儁る","嚔る","笨な","矍る","隕う","陬(かな５文字で)","貊","賽り",
				  "壅る","衍る","煢える","疇に","聿い","馭る","鍖","贏む","跋",
				  "謦い","賁る","贏る","釁い","椒しい","鬥う","蹇","觜(かな５文字で)",
				  "檻い","澆しい","獪い","闥","譎し","裴る",
				  "疚い","癆せる","盪める","睇る","螽(かな６文字で)","褻(かな４文字で)",
				  "鼷(かな６文字で)","棍(かな５文字で)","隍","蠖く","襦(かな４文字で)","資(「も」から始めて)",
				  "綦(かな５文字で)","粉(かな６文字で)","恁","予(かな３文字で)","閹う","匜",
				  "魵","蛞","鮦","鈣","感(かな３文字で)","荅","痤",
				  "圸","墅(かな５文字で)","怎","愿","攸","朸(かな６文字で)","蜿蜿る",
				  "侈","冫","匯","凖","喟","莠(かな６文字で)","觳",
				  "贉す","鞦に","綢う","縵き","繝(かな６文字で)","箝(かな４文字で)","籃(かな５文字で)",
				  "委曲か","蜆(かな４文字で)","係う","規(かな５文字で)","梣","覓ぐ","蹣跚う:蹌踉う",
				  "鮾る","偸閑に","奇に","道う","鱻しい","閻しい");

YOMI[1][0] = new Array("ひかりかがやく","ひとまわり","みそっぱ","ふる","ゆうぐれ","さきばらい","のぎ",
				  "こざかしい","うらがえる","すみやか","ほろぐるま,にぐるま","ものさわに","すなどる",
				  "いりまじる","ひっぱる","さそう","うつくしい","たちまち","とこしばり,よこがみしばり",
				  "いりまじる","ひきだす","しばりあげる","ひるすぎ","いたる","くちすぎする","ひつぎぐるま","おいめ",
				  "たたずむ","かよわい","ぬかる","うかがいみる","ゆごて,ゆみぶくろ","くらべただす",
				  "たのむ","まさる","はなひる","そまつな","はやる","うしなう","かたいなか","えびす","おれいまつり",
				  "さえぎる","はびこる","うれえる","さきに","すばやい","あやつる","まくらぎ","つつむ","おくがき",
				  "せきばらい","かざる","あまる","なかたがい","かぐわしい","たたかう","かたくな","とろきぼし",
				  "いたがこい","かるがるしい","わるがしこい","こもん","とおまわし","たちもとおる",
				  "ながわずらい","おとろえやせる","あらいきよめる","ぬすみみる","はたおりむし","ふだんぎ",
				  "はつかねずみ","ならずもの","ほり,からぼり","しりぞく","チョゴリ","もとで",
				  "もえぎいろ","デシメートル","このような","おいら","こびへつらう","い,はんぞう",
				  "えび","おたまじゃくし","かつお","カルシウム","あわや","あずき","にきび,(にきみ)",
				  "まま","しもやしき","どうして","すなお","ところ","てんびんぼう","うねる,のたくる",
				  "ほしいまま","こおり","かわせ","はなすじ","ためいき","ねこじゃらし,えのころぐさ","さかずき",
				  "あきさす","ふらんに","こみあう","つれびき","にしきもよう","くびかせ","あじろごし",
				  "つばらか","みのむし","かかずらう","ぶんまわし","とねりこ","まぐ","よろぼう",
				  "あざる","あからさまに","あやに","いう","あたらしい","みめうるわしい");

// Q3

QUESTION_STR[2][0] = '次の人名の読みを<u>カタカナで</u>答えなさい。';

KANJI[2][0] = new Array("耶蘇","易卜生","愛迪生","思格尓","康徳",
				  "居利","格勒格力","歌白尼","閣龍",
				  "沙翁","叔伯特","勺旁","斯達林","但丁",
				  "卓別麟","成吉思汗","丁尼生","那波列翁","尼通",
				  "保羅","巴哈","福特","佛蘭格林","倍根",
				  "貝多芬","伯理","麦唐納","馬哈黙","馬克斯",
				  "密爾敦","梅特林克","門得尓","摩西","莫差特",
				  "孟徳斯鳩","約色弗","林肯","列寧","瓦格納",
				  "該撒","瓦的");

YOMI[2][0] = new Array("イエス","イプセン","エジソン","エンゲルス","カント",
				  "キュリー","グレゴリー","コペルニクス","コロンブス",
				  "シェークスピア","シューベルト","ショパン","スターリン","ダンテ",
				  "チャップリン","チンギスハン","テニソン","ナポレオン","ニュートン",
				  "パウロ","バッハ","フォード","フランクリン","ベーコン",
				  "ベートーベン,ベートーヴェン","ペリー","マクドナルド","マホメット","マルクス",
				  "ミルトン","メーテルリンク","メンデル","モーセ","モーツァルト",
				  "モンテスキュー","ヨセフ","リンカーン","レーニン","ワグナー",
				  "シーザー","ワット");
