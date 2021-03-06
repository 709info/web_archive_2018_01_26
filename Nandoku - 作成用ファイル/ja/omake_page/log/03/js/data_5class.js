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

var KANJI = new Array();
KANJI[0] = new Array();
KANJI[1] = new Array();
KANJI[2] = new Array();
KANJI[3] = new Array();
KANJI[4] = new Array();
KANJI[5] = new Array();

var YOMI = new Array();
YOMI[0] = new Array();
YOMI[1] = new Array();
YOMI[2] = new Array();
YOMI[3] = new Array();
YOMI[4] = new Array();
YOMI[5] = new Array();

var QUESTION_STR = new Array();
QUESTION_STR[0] = new Array ();
QUESTION_STR[1] = new Array ();
QUESTION_STR[2] = new Array ();
QUESTION_STR[3] = new Array ();
QUESTION_STR[4] = new Array ();
QUESTION_STR[5] = new Array ();

// Q1

QUESTION_STR[0][0] = '<h4 style="padding:20px">[一] 次の物・部位を表す漢字を<u>訓読みで</u>答えなさい。（3点×10問）</h4>';

KANJI[0][0] = new Array("鉄漿","塵箱","蝋燭","箍","御御御付け",
				  "吃逆","雀斑","旋毛","黒子","御神籤",
				  "睫毛","障泥","飛白","帷子","鏝","七五三縄",
				  "賽子","笊","鋤","三和土","束子",
				  "鑿","長押","梃子","鉈","暖簾",
				  "発条","抽斗","鑢","坩堝","轆轤",
				  "弾機","鉞");
				  
YOMI[0][0] = new Array("おはぐろ:かね","ごみばこ","ろうそく","たが","おみおつけ",
				  "しゃっくり:きつぎゃく","そばかす","つむじ","ほくろ","おみくじ",
				  "まつげ:しょうもう","あおり","かすり","かたびら","こて","しめなわ",
				  "さいころ","ざる","すき","たたき","たわし",
				  "のみ","なげし","てこ","なた","のれん",
				  "ばね","ひきだし","やすり","るつぼ","ろくろ",
				  "ばね","まさかり");
				  
QUESTION_STR[0][1] = '<h4 style="padding:20px">[一] 次の動物を表す漢字を<u>平仮名で</u>答えなさい。（3点×10問）</h4>';

KANJI[0][1] = new Array("海驢","蜥蜴","鼈","鯆",
				  "海狸","蝙蝠","膃肭臍","鰐","玉筋魚",
				  "蒿雀","花鶏","鸊鷉",
				  "金糸雀","騾馬","羊駝","驢馬","豪猪",
				  "鷦鷯","告天子","鸛","翡翠","鵲",
				  "鵺","鴫","鷂","朱鷺","鴻",
				  "冬眠鼠");
				  
YOMI[0][1] = new Array("あしか","とかげ:せきえき","すっぽん","いるか",
				  "びーばー","こうもり","おっとせい","わに","いかなご",
				  "あおじ","あとり","かいつぶり",
				  "かなりあ","らば","らま","ろば","やまあらし",
				  "みそさざい","ひばり","こうのとり","かわせみ:ひすい","かささぎ",
				  "ぬえ","しぎ","はいたか:はしたか","とき","おおとり:ひしくい",
				  "やまね");

QUESTION_STR[0][2] = '<h4 style="padding:20px">[一] 次の植物を表す漢字を<u>平仮名で</u>答えなさい。（3点×10問）</h4>';

KANJI[0][2] = new Array("石蓴","水綿","藜","菖蒲","薊",
				  "紫羅欄花","海髪","苜蓿","巻耳","牛膝",
				  "鳶尾","酢漿草","酸漿","薇","薺","紫薇",
				  "満天星","朮","馬酔木","木通",
				  "慈姑","罌粟","紫雲英","羊歯","仙人掌",
				  "繁縷","浅葱","映日果","公孫樹","犬榧",
				  "車前草","莎草","落葉松","楠","胡頽子",
				  "甘藷","香蕈","生薑","山葵","栂",
				  "玉蜀黍","蕃茄","薯蕷芋","瞿麦","楢",
				  "大蒜","韮","鹿尾菜","水雲","蓬",
				  "辣韮","蕨","蕃椒","草石蚕","石榴");

YOMI[0][2] = new Array("あおさ","あおみどろ","あかざ","あやめ:しょうぶ","あざみ",
				  "あらせいとう","いぎす","うまごやし:もくしゅく","おなもみ","いのこずち:ごしつ",
				  "いちはつ:えんび","かたばみ:そじょうそう","ほおずき","ぜんまい:のえんどう","なずな:はまびし","さるすべり:しび",
				  "どうだんつつじ:どうだん:まんてんせい","おけら:うけら:もちあわ","あせび:あしび","あけび",
				  "くわい","けし","げんげ","しだ","さぼてん",
				  "はこべ:はこべら","あさつき","いちじく","いちょう","いぬがや",
				  "おおばこ","かやつりぐさ:ささめ","からまつ","くすのき:くす","ぐみ",
				  "さつまいも","しいたけ","しょうが","わさび","つが",
				  "とうもろこし","とまと:ばんか","とろろいも","なでしこ","なら",
				  "にんにく:おおびる:おおにんにく","にら","ひじき","もずく","よもぎ",
				  "らっきょう","わらび","とうがらし","ちょろぎ","ざくろ");

QUESTION_STR[0][3] = '<h4 style="padding:20px">[一] 次の虫を表す漢字を<u>平仮名で</u>答えなさい。（3点×10問）</h4>';

KANJI[0][3] = new Array("虻","鳳蝶","薄翅蜉蝣","馬大頭","蜻蛉",
				  "蟷螂","椿象","天牛","螽斯",
				  "蟋蟀","蜘蛛","螻蛄","金亀子","虱",
				  "胡蜂","紅娘","飛蝗","豆娘","浮塵子",
				  "大蚊","蝸牛","沙蚕","蠍","条虫",
				  "蛞蝓","蜩","水蚤","蚯蚓","馬陸",
				  "壁蝨");

YOMI[0][3] = new Array("あぶ","あげはちょう","うすばかげろう","おにやんま","とんぼ:かげろう:せいれい",
				  "かまきり:とうろう","かめむし","かみきりむし","きりぎりす:しゅうし",
				  "こおろぎ:きりぎりす:しっしゅつ","くも:ちしゅ","おけら:けら:ろうこ","こがねむし","しらみ",
				  "すずめばち","てんとうむし","ばった","いととんぼ","うんか",
				  "ががんぼ","かぶとむし","ごかい","さそり","さなだむし",
				  "なめくじ","ひぐらし","みじんこ","みみず","やすで",
				  "だに");

QUESTION_STR[0][4] = '<h4 style="padding:20px">[一] 次の魚介類を表す漢字を<u>平仮名で</u>答えなさい。（3点×10問）</h4>';

KANJI[0][4] = new Array("年魚","嘉魚","海鷂魚","狗母魚","虎魚",
				  "杜父魚","松魚","梭子魚","鰈","鱚",
				  "牛尾魚","石伏魚","鰆","鱸","大口魚",
				  "蝦虎魚","鰰","鱧","鱶","鯔","海扇",
				  "鱒","翻車魚","石決明","玉筋魚","鶏魚",
				  "石首魚","石斑魚","斉魚","旗魚","河貝子",
				  "水母","鮗","拶双魚","溝貝","鰊",
				  "海盤車","竹麦魚","海鞘","海松貝",
				  "鱓","鮱","鮠","青花魚","柔魚");

YOMI[0][4] = new Array("あゆ","いわな","えい","えそ","おこぜ",
				  "かじか","かつお","かます","かれい","きす",
				  "こち","ごり","さわら","すずき","たら",
				  "はぜ","はたはた","はも","ふか","ぼら","ほたてがい",
				  "ます","まんぼう","あわび","いかなご","いさき",
				  "いしもち","うぐい","えつ","かじき","かわにな",
				  "くらげ","このしろ","さっぱ","どぶがい","にしん:かど",
				  "ひとで","ほうぼう","ほや","みるがい",
				  "うつぼ","おおぼら","はや:はい:はえ","さば","いか");

// Q2

QUESTION_STR[1][0] = '<h4 style="padding:20px">[二] 次の漢字一文字を<u>訓読みで</u>答えなさい。（3点×10問）</h4>';

KANJI[1][0] = new Array("丫","痂","嚏","黴","黶","靄","鎹",
				  "瘋","拇","皸","熱","飆","運","閂","簪",
				  "鳧","鱟","孑","屍","謀","愈","颪","古",
				  "抑","羹","閨","鉄","銅","秤","脛","瞼",
				  "鼾","諱","嗽","項","裃","叢","転","軍",
				  "兵","英","永","塒","砌","跫");
				  
YOMI[1][0] = new Array("あげまき:つのがみ","かさぶた","くしゃみ","かび","ほくろ","もや","かすがい",
				  "ずつう","おやゆび","あかぎれ","ほとぼり","つむじかぜ:かぜ","さだめ","かんぬき","かんざし",
				  "けり:かも","かぶとがに","ぼうふら","しかばね","はかりごと","いよいよ","おろし","いにしえ",
				  "そもそも","あつもの","ねや","くろがね","あかがね","はかり","すね:はぎ","まぶた",
				  "いびき","いみな","うがい","うなじ","かみしも","くさむら","くるり","いくさ",
				  "つわもの","はなぶさ","とこしえ","とぐろ:とや:ねぐら","みぎり","あしおと");
	
QUESTION_STR[1][1] = '<h4 style="padding:20px">[二] 次の漢字の読みを<u>送り仮名も含めて</u>答えなさい。（3点×10問）</h4>';

KANJI[1][1] = new Array("嘶く","苟も","蔑む","潤びる","穿つ",
				  "隠る","誂える","革める","燻る","衒う","寛ぐ",
				  "鑑みる","慮る","逞しい","屈む","悴む","窶れる",
				  "姦しい","窘める","軋む","辷る","嘯く","齎す",
				  "疼く","蹲る","魘される","惟る","匿う",
				  "翳す","炊ぐ","忝い","躱す","際疾い","蹌踉ける",
				  "具に","嗾ける","蓋し","狡い",
				  "拗れる","拵える","囀る","攫う","萎びる",
				  "撓やか","饐える","頗る","誑かす","暈ける");

YOMI[1][1] = new Array("いななく","いやしくも","さげすむ","ほとびる","うがつ",
				  "こもる","あつらえる","あらためる","いぶる","てらう","くつろぐ",
				  "かんがみる","おもんぱかる","たくましい","かがむ:こごむ","かじかむ","やつれる",
				  "かしましい","たしなめる","きしむ","すべる","うそぶく","もたらす",
				  "うずく","うずくまる","うなされる","おもんみる","かくまう",
				  "かざす","かしぐ","かたじけない","かわす","きわどい","よろける",
				  "つぶさに","けしかける","けだし","ずるい:こすい",
				  "こじれる","こしらえる","さえずる","さらう","しなびる",
				  "しなやか","すえる","すこぶる","たぶらかす","ぼける");

// Q3

QUESTION_STR[2][0] = '<h4 style="padding:20px">[三] 次の熟語の読みを<u>音読みで</u>答えなさい。（3点×10問）</h4>';

KANJI[2][0] = new Array("嚢中","歪曲","女衒","蹂躙","軋轢","範疇","琴瑟",
				  "癲癇","齟齬","寂寞","静謐","瀟洒","辟易","跋扈",
				  "逼塞","猥褻","饒舌","贔屓","罵詈","兀々",
				  "讒謗","猜疑","憔悴","慇懃","霹靂","吝嗇",
				  "矍鑠","耄碌","狡猾","甲冑","灌漑","忸怩",
				  "艱難","研鑽","誤謬","弛緩","塵芥","拈華微笑",
				  "燦々","穿孔","鼠蹊部","蹲踞","躊躇",
				  "投擲","独擅場","咄嗟","反芻","狼藉");

YOMI[2][0] = new Array("のうちゅう","わいきょく","ぜげん","じゅうりん","あつれき","はんちゅう","きんしつ",
				  "てんかん","そご","せきばく","せいひつ","しょうしゃ","へきえき","ばっこ",
				  "ひっそく","わいせつ","じょうぜつ","ひいき","ばり","こつこつ",
				  "ざんぼう","さいぎ","しょうすい","いんぎん","へきれき","りんしょく",
				  "かくしゃく","もうろく","こうかつ","かっちゅう","かんがい","じくじ",
				  "かんなん","けんさん","ごびゅう","しかん","じんかい","ねんげみしょう",
				  "さんさん","せんこう","そけいぶ","そんきょ:そんこ","ちゅうちょ",
				  "とうてき","どくせんじょう","とっさ","はんすう","ろうぜき");

// Q4

QUESTION_STR[3][0] = '<h4 style="padding:20px">[一] 次の当て字を<u>カタカナで</u>答えなさい。（3点×10問）</h4>';

KANJI[3][0] = new Array("扁桃","拉麺","沈菜","凝乳","乾酪","卵糖",
				  "牛酪","貯古齢糖","麺麭","乾蒸餅","雲呑","食蛇獣",
				  "火酒","混合酒","三鞭酒","曹達","葡萄酒",
				  "手風琴","土瀝青","混凝土","酒精","越列機",
				  "極光","橄欖","風琴","自鳴琴","瓦斯","大熊猫",
				  "骨牌","甘藍","秋桜","酒杯","木栓",
				  "円規","朱欒","襯衣","洋袴","鬱金香",
				  "哨吶","庭球","隧道","仮漆","洋銀",
				  "口風琴","提琴","鳳梨","籠球","甘蕉",
				  "万寿果","排球","手巾","送球","洋琴",
				  "風信子","撞球","天鵞絨","黒死病","喞筒",
				  "檬果","莫大小","豚脂","角灯","洋灯");

YOMI[3][0] = new Array("アーモンド","ラーメン","キムチ","クリーム","チーズ","カステラ",
				  "バター","チョコレート","パン","ビスケット","ワンタン","マングース",
				  "ウイスキー:ブランデー","カクテル","シャンパン:シャンペン","ソーダ","ワイン",
				  "アコーディオン","アスファルト","コンクリート","アルコール","エレキ",
				  "オーロラ","オリーブ","オルガン","オルゴール","ガス","パンダ",
				  "カルタ","キャベツ","コスモス","コップ","コルク",
				  "コンパス","ザボン","シャツ","ズボン","チューリップ",
				  "チャルメラ","テニス","トンネル","ニス","ニッケル",
				  "ハーモニカ","バイオリン:ヴァイオリン","パイナップル:パインアップル","バスケットボール","バナナ",
				  "パパイア:パパイヤ","バレーボール","ハンカチ","ハンドボール","ピアノ",
				  "ヒヤシンス","ビリヤード","ビードロ","ペスト","ポンプ",
				  "マンゴー","メリヤス","ラード","ランタン","ランタン");
