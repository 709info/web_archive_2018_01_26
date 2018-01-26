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

const CLASS = 1;
const KENTEI_NAME = "一級";
const FILE_NAME = "1class"; // 「○○.html」などで使用
const Q_NUM = [40]; // 大問ごとの問題数
const UNIT_SCORE = [5]; // 大問ごとにおける一問正解の配点
const MAX_SCORE = 200; // 満点
const GOKAKU_SCORE = 180; // 合格点

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

QUESTION_STR[0][0] = '次の漢字の読みを<u>送り仮名も含めて</u>答えなさい。';

KANJI[0][0] = new Array("丿乀","尨蹄子","数(かな３文字で)","癙","草血竭","乑つ",
				  "盡(かな７文字で)","薛(かな６文字で)","蹔する","彎う","鯸鮧魚","𨑕",
				  "丯する","丰(かな３文字で)","厸(かな３文字で)","鰢","女匠桃虫",
				  "騳る","𡵅","夵む","嶲(かな５文字で)","金布公子","鵞毛玉鳳花",
				  "公爹菜","苕(かな７文字で)","卣(かな４文字で)","丮據",
				  "仙人指甲蘭","唁唁","囟(かな４文字で)","海州骨砕補","冃(かな３文字で)",
				  "夢卜子","多葉郁李","囙る","甴曱","土酥","烏蘞苺(「うれんばい」以外で)",
				  "檐不帰","粆","桃葉衛矛","天女花","豳風","鬌",
				  "白前","猴刺脱","山菉豆","叵る",
				  "秦吉了","軟条海棠","蓚山大黄","䔍魯馬",
				  "紫参","魚児牡丹","紫花地丁","会最","石薄荷",
				  "当門","禾菁","谿蓀","菝葜","随軍茶","拳参",
				  "国香","螇鹿","莎鶏","啽囈","芣苡","以丁堡",
				  "車下李","邪蒿","巌桂","黄精葉鉤吻","繃標烏",
				  "噪天","土青木香","馬蹄急就草","牻手児苗",
				  "龐太我刺私","龔察洛夫","斉斉哈爾","蠟嘴",
				  "黄雀","麦哲倫","麿蘢","蒼鸇","雪客","襪雀",
				  "韋柏","韋白斯特","鱅","禾葉土麦冬","蘛る",
				  "乁れる","异げる","骪く","旖く","繄",
				  "鐿","夃く","彘","賏(かな５文字で)","讆",
				  "氹","灕む","藼","觹","魗む",
				  "冎ける","哧","啝う","眾い","罿",
				  "氐(かな３文字で)","堲(かな４文字で)","崽(かな３文字で)","蟈(かな５文字で)",
				  "厏う","惢う","痧","瘋(かな４文字で)","蟱",
				  "蠃","蠲","亗","茝(かな５文字で)","嘬る",
				  "祘える","僝る","匫","匭る","蘸す",
				  "黲い","丵","舃","乚れる","匼う",
				  "夗","嬽い","卝い","丿る","乜","冂い",
				  "夨ける","勼める","厃ぐ","巿(「シ」とは別字)",
				  "朩しい","凥る","冭らか","匄める",
				  "厇く","囜い","戹い","丠","丢つ",
				  "乪","吕","奻う","她る","㞮る",
				  "佡い","兏い","吪く","吲む","玈弓",
				  "乴る","冞","䅩䅓","瓝槊","奊詬",
				  "虺尵","斲輪","齾々","頮面","屉",
				  "隳廃","虣虐","竵扁法","喌々","㱎干",
				  "骪骳","決讞","讞く","颬々","褎然",
				  "馵足","黼冔","擤齈","盭夫","乾癟",
				  "阿閦","晷漏","凳","彧々","勻円",
				  "宺㝗","奭ん","隉寪","㫃蹇","鯪",
				  "釙(かな５文字で)","釔","囤","儱(かな４文字で)",
				  "蠼螋(かな５文字で)","黄伯労","博黍","鵞耳櫪",
				  "麪櫧","畾地","畾(かな３文字で)","閿る",
				  "闝れる","閞(かな８文字で)","靎");

YOMI[0][0] = new Array("へつふつ,へつぽつ","せ","けじめ","ペスト","つた","ならびたつ",
				  "さもあらばあれ","かわらよもぎ","とっしんする","ひきまかなう","ふぐ","はさ",
				  "さんらんする","すがた","となり","つくら,とど","みそさざい",
				  "はしる","ほき","すすむ","ほととぎす","うぐいす","さぎそう",
				  "なずな","のうぜんかずら","さかだる,さけつぼ","けききょ",
				  "なごらん","きゃんきゃん","ひよめき","しのぶぐさ","ずきん",
				  "すずしろ","にわざくら","よる","そうおう","すずしろ","やぶがらし",
				  "たばこ","ミクロン,マイクロメートル","まゆみ","おおやまれんげ","ひんぷう","すずしろ",
				  "すずめのおごけ","さるすべり","ぬすびとはぎ","すこぶる",
				  "いんこ,きゅうかんちょう","いとざくら","すいば","すずしろ",
				  "あきのたむらそう","けまんそう","すみれ","すずな","いぶきじゃこうそう",
				　"すずな","すずな","あやめ","さるとりいばら","はぎ","いぶきとらのお",
				  "ふじばかま","にいにいぜみ","きりぎりす","ねごと","おおばこ","エディンバラ",
				  "にわうめ","いぶきぼうふう","きんもくせい","なべわり","ポンペイウス",
				  "ひばり","うまのすずくさ","つわぶき","げんのしょうこ",
				  "ピタゴラス","ゴンチャロフ","チチハル","しめ",
				  "にゅうないすずめ","マゼラン","ゆり","たか","さぎ","みそさざい",
				  "ウェーバー","ウェブスター","ちちかぶり","やぶらん","しげる",
				  "ながれる","あげる","すておく","なびく","ほこばくろ,ほこぶくろ",
				  "イチルビュウム,イチルビウム","しばらく","ぶた","くびかざり","ねごと",
				  "ためいけ","しみこむ","かや,かんぞう","くじり,つのぎり","にくむ",
				  "わける","ものみ","したがう","おおい","むそうあみ",
				  "ふもと","やきつち,もえさし","こども","いさごむし",
				  "くいちがう","うたがう","コレラ","きちがい","くも",
				  "かたつむり","やすで","とし,よわい","よろいぐさ","むさぼる",
				  "かぞえる","ののしる","うつわ","くくる","ひたす",
				  "うすあおぐろい","くさのむらがり","かささぎ","かくれる","こびへつらう",
				  "ころがりうす","みめよい","いとけない","もとる","やぶにらみ","とおい",
				  "かたむける","あつめる","あおぐ","ひざかけ",
				  "ひとしい","おる","なめらか","もとめる",
				  "ひらく","かしこい","せまい","おか","なげうつ",
				  "くま","せぼね","いいあらそう","あざる","でる",
				  "かるい","ながい","うごく","ほほえむ","ろきゅう",
				  "ひねる","ますます","しく","はくさく","けっこう",
				  "かいたい","たくりん","がつがつ","かいめん","ひきだし,かけご",
				  "きはい","ほうぎゃく","かいへんほう","しゅくしゅく","こんかん",
				  "いひ","けつげつ","さばく","かか","ゆうぜん",
				  "しゅそく","ほく","こうどう","れいふ","かんべつ",
				  "あしゅく","きろう","こしかけ","いくいく","いんえん",
				  "こうりょう","さかん","げつぎ","えんけん","せんざんこう",
				  "ポロニウム","イトリウム,イトリュウム","ざる","うやむや",
				  "はさみむし","うぐいす","うぐいす","さわしば",
				  "しらかし","らいち,らいぢ","とりで","みる",
				  "おぼれる","はしらのますがた","つる");



