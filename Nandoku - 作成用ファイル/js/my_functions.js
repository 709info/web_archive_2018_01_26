// - - 全てのページに関する関数 - -

//ひらがな
var hiragana = "ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをん";

//カタカナ
var katakana = "ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶ";

//JIS 第一水準 漢字
const kanjiStandard1 = "亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕";

//JIS 第二水準 漢字
const kanjiStandard2 = "魵丨彧々弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠堯槇遙瑤凜熙";

// <uni>タグの追加
function Add_uni_tag(kanji) {
	
	// '𩸽のひらき' => ["𩸽", "の", "ひ", "ら", "き"]
	const kanji_array = kanji.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
	const zenkaku = hiragana + katakana + kanjiStandard1 + kanjiStandard2;
	
	let uni_str = "";
	for (let i = 0; kanji_array[i]; i++) {
		//1文字だけチェック 全角だったらtrue
		const moji = kanji_array[i];
		const is_zenkaku_kanji = (zenkaku.indexOf(moji) >= 0);
		
		if (is_zenkaku_kanji) {
			uni_str += moji;
		} else if (typeof NAME === "undefined") {
			// 試験
			uni_str += "<uni>" + moji + "</uni>";
		} else {
			// しりとり
			uni_str += "<uni2>" + moji + "</uni2>";
		}
	}
	
	return uni_str;
}

// 複数の文字列をまとめて置換
function Replace(source, replacers) {
    let replaced = source;
    let replacer;
    for (let i = 0; replacers[i]; i++) {
    	replacer = replacers[i];
        replaced = replaced.replace(replacer[0], replacer[1]);
    }
    
    return replaced;
}

function To_kansuji(num) {
	const txt = new Array("〇","一","二","三","四","五","六","七","八","九");
	return txt[num];
}

// ブラウザの判定・取得
function Get_browser() {
	const userAgent = window.navigator.userAgent.toLowerCase();

	if(userAgent.indexOf('msie') != -1 ||
	   userAgent.indexOf('trident') != -1) {
	    return 'IE';
	} else if(userAgent.indexOf('edge') != -1) {
	    return 'edge';
	} else if(userAgent.indexOf('chrome') != -1) {
	    return 'chrome';
	} else if(userAgent.indexOf('safari') != -1) {
	    return 'safari';
	} else if(userAgent.indexOf('firefox') != -1) {
	    return 'fox';
	} else if(userAgent.indexOf('opera') != -1) {
	    return 'opera';
	}
}


/* Cookie関連 */


// cookieに保存
function Write_cookie(value, name) {
	const expire = new Date();
	expire.setTime( expire.getTime() + 1000 * 3600 * 24 * 365 );
	document.cookie = name + '=' + value + '; path=/; expires=' + expire.toUTCString();
}

// スコアをcookieに保存
function Write_cookie_score(score, name) {
	const highest_score = Number(Get_cookie(name));
	
	// 最高記録更新なら保存
	if (score > highest_score) {
		Write_cookie(score, name);
	}
}

// 満点回数を1回増やす
function Add_cookie_manten(cookie) {
	// 満点回数
    const manten_num = Number(Get_cookie(cookie + '_manten')) + 1;
    Write_cookie(manten_num, cookie + '_manten');
}

// cookieの値の取得
function Get_cookie(name) {
    const cookieName = name + '=';
    const allcookies = document.cookie;
    const position = allcookies.indexOf( cookieName );
    
    let value = null;
    if ( position != -1 ) {
        const startIndex = position + cookieName.length;
        let endIndex = allcookies.indexOf( ';', startIndex );
        
        if ( endIndex == -1 ) {
            endIndex = allcookies.length;
        }

		const substr = allcookies.substring( startIndex, endIndex );
        value = decodeURIComponent(substr);
    }
    
    if (value === "null") {
    	value = null;
    }

    return value;
}


/* 出題関連 */


// IDからジャンルを取得
function Get_genre(elem) {
    genre = Number(elem.id[5]) - 1;
    // class.htmlかkanken.htmlかで分岐
    if (typeof(CLASS) !== "undefined") {
    	Be_on_the_test(); // 出題開始
    } else if (typeof(KANKEN) !== "undefined") {
    	Show_level_panels(); // レベル選択画面へ
    }
}

// レベル選択画面の表示
function Show_level_panels() {

	// 試験モードもしくは
	// レベルがない場合は出題開始
	if (mode === '試験' || KANJI[genre].length < 2) {
		level = 0;
    	Be_on_the_test();
    	return;
    }

	// - - - レベルパネルの構成 - - -
	
    if (typeof(GENRE_FIELD_HEIGHT) !== "undefined") {
        $('#level_field').css("height", GENRE_FIELD_HEIGHT);
    }
    
    // １つずつパネル構成
    let str = "";
    for (let level = 0; level < LEVEL.length; level++) {
        str +=  '<article class="level_panel" style="' + LEVEL_COLOR[level] + ' ' + LEVEL_POSITION[level] + '">' +
	            '	<a id="level' + (level + 1) + '" onclick="Get_level(this);">' +
	            '		<p style="margin-bottom:0px; font-family:sans-serif; font-weight:normal;">' + LEVEL[level] + '</p>' +
	            '		<p id="' + GENRE_EN[genre] + '_' + LEVEL_EN[level] + '_nokori_here" style="font-size:24px;"></p>' +
	            '	</a>' +
	            '</article>';
    }
    $('#level_panels').html(str);

	// 残り登録数の算出
	for (let level = 0; level < LEVEL.length; level++) {
		const num = KANJI[genre][level].length;
		const asked = KANJI_ASKED[genre][level];
        $('#' + GENRE_EN[genre] + '_' + LEVEL_EN[level] + '_nokori_here').html('残り：' + (num - asked));
    }

	// レベル選択画面の表示
    $('#genre_field').fadeOut('normal', function() {
        $('#level_field').fadeIn('normal');
    });
}

// IDからレベルを取得
function Get_level(elem) {
    level = Number(elem.id[5]) - 1;
    
    Be_on_the_test(); // 出題開始
}

// モード変更を画面上に反映
function Reflect_mode() {
	// ジャンルパネル内の表示
    if (mode === '試験') {
        $('input[name="mode"]').prop("checked", true);
        for (let genre = 0; genre < GENRE.length; genre++) {
            $('#cookie_' + GENRE_EN[genre] + '_here').addClass('anim1');
            $('#' + GENRE_EN[genre] + '_nokori_here').css('display', 'none');
        }
    } else if (mode === 'とことん') {
        $('input[name="mode"]').prop("checked", false);
        for (let genre = 0; genre < GENRE.length; genre++) {
            $('#' + GENRE_EN[genre] + '_nokori_here').addClass('anim1');
            $('#cookie_' + GENRE_EN[genre] + '_here').css('display', 'none');
        }
    }
    
    // 復習リスト内の表示
    if (IS_ALL_LIST_NULL) {
        $("#cookie_fukusyuu_here").html('登録数：--');
        $("#fukusyuu_panel a").css("cursor", "not-allowed");
    } else {
        $("#cookie_fukusyuu_here").html('登録数：' + ALL_LIST_NUM);
    }
}

// モードの切り替え
function Switch_mode() {
    if (mode === 'とことん') {
        mode = '試験';
        for (let genre = 0; genre < GENRE.length; genre++) {
            $('#' + GENRE_EN[genre] + '_nokori_here').css('display', 'none');
            $('#cookie_' + GENRE_EN[genre] + '_here').css('display', 'block');
            $('#cookie_' + GENRE_EN[genre] + '_here').addClass('anim1');
        }
    } else if (mode === '試験') {
        mode = 'とことん';
        for (let genre = 0; genre < GENRE.length; genre++) {
            $('#cookie_' + GENRE_EN[genre] + '_here').css('display', 'none');
            $('#' + GENRE_EN[genre] + '_nokori_here').css('display', 'block');
            $('#' + GENRE_EN[genre] + '_nokori_here').addClass('anim1');
        }
    }

    Write_cookie(mode, 'mode_switch');
}

// ジャンルフィールド構成
function Make_genre_field() {
	
    if (typeof(GENRE_FIELD_HEIGHT) !== "undefined") {
        $('#genre_field').css("height", GENRE_FIELD_HEIGHT);
    }
    
    let str = "";
    
	// １つずつパネル構成
	for (let i = 0; i < GENRE.length; i++) {
		
		let a_contents = "";
		if (typeof(CLASS) !== "undefined") {
		    a_contents = '<p>' + GENRE[i] + '</p>';
		} else if (typeof(KANKEN) !== "undefined") {
	        a_contents = '<div id="medal_' + GENRE_EN[i] + '"></div>' +
			             '<p style="margin-bottom:0px;">' + GENRE[i] + '</p>' +
			             '<p id="cookie_' + GENRE_EN[i] + '_here" style="font-size:24px; opacity:0;"></p>' +
			             '<p id="' + GENRE_EN[i] + '_nokori_here" style="font-size:24px; opacity:0;"></p>';
		}
		
	    str +=  '<article class="genre_panel" style="' + GENRE_COLOR[i] + ' ' + GENRE_POSITION[i] + '">' +
	            '	<a id="genre' + (i + 1) + '" onclick="Get_genre(this);">' +
	            '		' + a_contents +
	            '	</a>' +
	            '</article>';
	}

	$('#genre_panels').html(str);
}

// ジャンル画面内の表示
function Show_genre_data() {
    for (let genre = 0; genre < GENRE.length; genre++) {
    
        // スコアの取得
        let score_cookie = Get_cookie(COOKIE + '_' + GENRE_EN[genre]);
        if (score_cookie === null) score_cookie = "--";

        $('#cookie_' + GENRE_EN[genre] + '_here').html('最高点：' + score_cookie);

		// レベル別残り登録数の表示
		let kanji_num = 0;
		let kanji_asked = 0;
		for (let level = 0; level < LEVEL.length; level++) {
			if (!KANJI[genre][level]) {
				continue;
			}
            kanji_num += KANJI[genre][level].length;
            kanji_asked += KANJI_ASKED[genre][level];
        }
        $('#' + GENRE_EN[genre] + '_nokori_here').html('残り：' + (kanji_num - kanji_asked));

        if (score_cookie === "--") continue;

        // メダル画像の表示
        Show_medal_on_genre('#medal_' + GENRE_EN[genre], score_cookie, MAX_SCORE, GOKAKU_SCORE);
    }
}

// パネル上のメダル表示
function Show_medal_on_genre(id, score_cookie, manten, gokaku) {
    if (score_cookie == manten) {
        $(id).html('<img src="../img/gold.png" class="medal_on_genre">');
    } else if (score_cookie >= gokaku) {
        $(id).html('<img src="../img/silver.png" class="medal_on_genre">');
    } else if (score_cookie >= gokaku - 30) {
        $(id).html('<img src="../img/bronze.png" class="medal_on_genre bronze_on_genre">');
    }
}

// とことん紹介ページの表示・非表示
function Show_intro() {
    $('#genre_field').fadeOut('normal', function() {
        $('#about_tokoton_field').fadeIn('normal');
    });
}
function Hide_intro() {
    $("html").animate({
        scrollTop: 0
    });
    $('#about_tokoton_field').fadeOut('normal', function() {
        $('#genre_field').fadeIn('normal');
    });
}

// 編集ページの表示・非表示
function Show_edit() {

	// 記録テーブル構成
	let is_undef = false;
    let str = "";
    str +=  '<table class="edit_table" border="1" style="margin-bottom:40px;">' +
			'	<tr>' +
			'		<th>すべての分野・レベルの総出題数</th>' +
			'		<th style="width:70px;"><span id="th_all_asked">'+ALL_ASKED_NUM+'</span></th>' +
			'	</tr>' +
			'	<div class="reset_panel" style="position:absolute; left:77%;">' +
    		'		<a id="all_asked" onClick="Reset_asked(this);">' +
    		'			<p style="font-size:17px;">リセット</p>' +
    		'		</a>' +
    		'	</div>' +
			'</table>';
	const position = [["left:68%;", "left:68%; top:17.1%;", "left:68%; top:20%;"], 
					  ["left:68%; top:24.5%;","left:68%; top:27.5%;","left:68%; top:30.5%;"]];
	for (let genre = 0; genre < GENRE.length; genre++) {
		str +=  '<table class="edit_table" border="1">';
        for (let level = 0; level < LEVEL.length; level++) {
        	if (typeof KANJI_ASKED[genre][level] === "undefined") {
        		is_undef = true;
        		break;
        	}
        	let genre_str = "";
        	if (level === 0) genre_str = '<th rowspan="3" style="width:170px;">'+GENRE[genre]+'</th>';
	        str +=  '	<tr>' +
					'		'+genre_str+'<th>レベル'+(level+1)+'</th><th style="width:70px;"><span id="th_asked_g'+(genre+1)+'l'+(level+1)+ '">'+KANJI_ASKED[genre][level]+'</span></th>' +
					'	</tr>' +
					'	<div class="reset_panel" style="position:absolute; '+position[genre][level]+'">' +
	        		'		<a id="asked_g'+(genre+1)+'l'+(level+1)+'" onClick="Reset_asked(this);"><p style="font-size:17px;">リセット</p></a>' +
	        		'	</div>';
        }
        str +=  '</table>';
    }
    $('#edit_table_here').html(str);

	// 記録テーブル構成
	let plus = 0;
	if (!is_undef) plus = 6;
    str = "";
    str +=  '<table class="edit_table" border="1" style="margin-bottom:40px;">' +
			'	<tr>' +
			'		<th>すべての分野・レベルの復習問題数</th><th style="width:70px;"><span id="th_all_fukusyuu">'+ALL_LIST_NUM+'</span></th>' +
			'	</tr>' +
			'	<div class="reset_panel" style="position:absolute; left:78%;">' +
    		'		<a id="all_fukusyuu" onClick="Reset_fukusyuu(this);"><p style="font-size:17px;">消去</p></a>' +
    		'	</div>' +
			'</table>';
	const position2 = [["left:68%;", "left:68%; top:"+(52+plus)+"%;", "left:68%; top:"+(55+plus)+"%;"], 
	["left:68%; top:"+(59.5+plus)+"%;","left:68%; top:"+(62.5+plus)+"%;","left:68%; top:"+(65.5+plus)+"%;"]];
	for (let genre = 0; genre < GENRE.length; genre++) {
		str +=  '<table class="edit_table" border="1">';
        for (let level = 0; level < LEVEL.length; level++) {
        	if (!KANJI[genre][level]) break;
        	if (!LIST_NUM[genre][level]) {
        		LIST_NUM[genre][level] = 0;
        	}
        	let genre_str = "";
        	if (level === 0) genre_str = '<th rowspan="3" style="width:170px;">'+GENRE[genre]+'</th>';
	        str +=  '	<tr>' +
					'		'+genre_str+'<th>レベル'+(level+1)+'</th><th style="width:70px;"><span id="th_fukusyuu_g'+(genre+1)+'l'+(level+1)+ '">'+LIST_NUM[genre][level]+'</span></th>' +
					'	</tr>' +
					'	<div class="reset_panel" style="position:absolute; '+position2[genre][level]+'">' +
	        		'		<a id="fukusyuu_g'+(genre+1)+'l'+(level+1)+'" onClick="Reset_fukusyuu(this);"><p style="font-size:17px;">消去</p></a>' +
	        		'	</div>';
        }
        str +=  '</table>';
    }
    $('#edit_table2_here').html(str);

    $('#genre_field').fadeOut('normal', function() {
        $('#edit_field').fadeIn('normal');
    });
}
function Hide_edit() {
	Data_set();
	Show_genre_data();
	Reflect_mode();
	
    $("html").animate({
        scrollTop: 0
    });
    $('#edit_field').fadeOut('normal', function() {
        $('#genre_field').fadeIn('normal');
    });
}

// kanji_askedのリセット
function Reset_asked(elem) {
    if (!confirm("一度リセットしたデータは復元できません。\n本当によろしいですか?")) {
        return;
    }
    
    if (elem.id === "all_asked") {
		for (let genre = 0; genre < GENRE.length; genre++) {
            for (let level = 0; level < LEVEL.length; level++) {
        		Write_cookie(0, COOKIE + '_' + GENRE_EN[genre] + '_'+LEVEL_EN[level]+'_asked');
        		$('#th_asked_g'+(genre+1)+'l'+(level+1)).html(0);
        		$('#th_asked_g'+(genre+1)+'l'+(level+1)).css("display","none");
        		$('#th_asked_g'+(genre+1)+'l'+(level+1)).fadeIn("normal");
        	}
    	}
    	$('#th_all_asked').html(0);
        $('#th_all_asked').css("display","none");
        $('#th_all_asked').fadeIn("normal");
    	return;
    }
    
    genre = Number(elem.id[7]) - 1;
    level = Number(elem.id[9]) - 1;

    const asked = Get_cookie(COOKIE + '_' + GENRE_EN[genre] + '_'+LEVEL_EN[level]+'_asked');
    ALL_ASKED_NUM -= asked;
    $('#th_all_asked').html(ALL_ASKED_NUM);
    $('#th_all_asked').css("display","none");
    $('#th_all_asked').fadeIn("normal");
    Write_cookie(0, COOKIE + '_' + GENRE_EN[genre] + '_'+LEVEL_EN[level]+'_asked');
    $('#th_asked_g'+(genre+1)+'l'+(level+1)).html(0);
    $('#th_asked_g'+(genre+1)+'l'+(level+1)).css("display","none");
    $('#th_asked_g'+(genre+1)+'l'+(level+1)).fadeIn("normal");
}

// 復習リストのリセット
function Reset_fukusyuu(elem) {
    if (!confirm("一度消去したデータは復元できません。\n本当によろしいですか?")) {
        return;
    }
    
    if (elem.id === "all_fukusyuu") {
		for (let genre = 0; genre < GENRE.length; genre++) {
            for (let level = 0; level < LEVEL.length; level++) {
        		Write_cookie(null, COOKIE + '_' + GENRE_EN[genre] + '_'+LEVEL_EN[level]+'_list');
        		$('#th_fukusyuu_g'+(genre+1)+'l'+(level+1)).html(0);
        		$('#th_fukusyuu_g'+(genre+1)+'l'+(level+1)).css("display","none");
        		$('#th_fukusyuu_g'+(genre+1)+'l'+(level+1)).fadeIn("normal");
        	}
    	}
    	$('#th_all_fukusyuu').html(0);
        $('#th_all_fukusyuu').css("display","none");
    	$('#th_all_fukusyuu').fadeIn("normal");
    	return;
    }
    
    genre = Number(elem.id[10]) - 1;
    level = Number(elem.id[12]) - 1;

    const list = Get_cookie(COOKIE + '_' + GENRE_EN[genre] + '_'+LEVEL_EN[level]+'_list');
    ALL_LIST_NUM -= list.split(",").length;
    $('#th_all_fukusyuu').html(ALL_LIST_NUM);
    $('#th_all_fukusyuu').css("display","none");
    $('#th_all_fukusyuu').fadeIn("normal");
    Write_cookie(null, COOKIE + '_' + GENRE_EN[genre] + '_'+LEVEL_EN[level]+'_list');
    $('#th_fukusyuu_g'+(genre+1)+'l'+(level+1)).html(0);
    $('#th_fukusyuu_g'+(genre+1)+'l'+(level+1)).css("display","none");
    $('#th_fukusyuu_g'+(genre+1)+'l'+(level+1)).fadeIn("normal");
}

// 「戻る」パネルの移動
function Move_back_panel(BACK_PANEL_ID) {
    for (let i = 0; i < BACK_PANEL_ID.length; i++) {
		const initPosition = $(BACK_PANEL_ID[i]).offset().top;
		
	    $(window).scroll(function() {
		    const scroll = $(document).scrollTop();
		 
		    // 移動後ポジション
		    let movePosition = initPosition + scroll - 100;

		    if (movePosition < 0) movePosition = 0;
		    $(BACK_PANEL_ID[i]).animate({
		        top : movePosition + "px"
		    }, {
		        duration : 800,
		        queue : false
		    });
	    });
    }
}

// 試験・とことんページへの切り替え
function Go_to_test_page() {
	
	// - - 難読検定モード - -
	
	if (typeof CLASS !== "undefined") {
        $('#genre_field').fadeOut('normal', function() {
            $('.genre_panel').css('display', 'none');
            $('#test_field').fadeIn('normal');
            if (typeof(GENRE) !== "undefined") {
        		$('.zoom_up').css('position', 'relative');
        	}
            $('#kentei_level').addClass('anim1');
            $('#gokaku_line').addClass('anim1');
        });
        
        return;
	}
	
	// - - 漢検モード - -
	
	if (mode === '試験' || mode === 'とことん') {
	    let field_id;
		if (mode === '試験' || KANJI[genre].length < 2) {
			field_id = '#genre_field';
	    } else if (mode === 'とことん') {
			field_id = '#level_field';
			
            $("#button_saiten").css("display", "block");
            $("#button_next").css("display", "none");
            $("#button_finish").css("display", "none");

            if (is_tokoton_second) {
                document.getElementById('forms').innerHTML = null;
                $("#tokoton_kekka").css('display', 'none');
                $("#clear_num").removeClass('anim1');
                $("#tokoton_texts").css("display", "block");
                $("#tokoton_text").css('display', 'block');
                $("#tokoton_text2").css('display', 'block');
            }

			$('.kensaku_panel').css('display', 'none');
		    $('.kensaku_panel').css('opacity', '0');
		}
		
	    $(field_id).fadeOut('normal', function() {
	        $('#test_field').fadeIn('normal');
	    	$('.zoom_up').css('position', 'relative');
	        if (mode === '試験') {
	            $('#kentei_level').addClass('anim1');
	            $('#gokaku_line').addClass('anim1');
	            $('#genre_text').addClass('anim1');
	            $('#tokoton_text').css('display', 'none');
	            $('#tokoton_text2').css('display', 'none');
	        } else if (mode === 'とことん') {
	            $('#kentei_level').css('display', 'none');
	            $('#gokaku_line').css('display', 'none');
	            $('#genre_text').css('display', 'none');
	            $('#tokoton_text').addClass('anim1');
	            $('#tokoton_text2').addClass('anim1');
	        }
	    });
	} else if (mode === "復習") {
	    $('#genre_field').fadeOut('normal', function() {
	        $('#fukusyuu_field').fadeIn('normal');
	        $('#fukusyuu_text').addClass('anim1');
	        $(".genre_panel").css("display", "none");
	        $("#button_all_answer").css("display", "block");
	    });
	}
}

// 試験についてのテキストの表示
function Show_kentei_texts() {
	if (mode === "試験") {
	    $("#kentei_level").html(KENTEI_LEVEL);
	    $("#gokaku_line").html(GOKAKU_LINE);
	    if (typeof KANKEN !== "undefined") $("#genre_text").html("試験分野：" + GENRE[genre]);
	} else if (mode === "とことん") {
	    $("#tokoton_text").html("とことんモード　登録数：" + kanji_num + "問");
	    $("#tokoton_text2").html("ここまでの出題数：" + kanji_asked + "問 / 残り" + (kanji_num - kanji_asked) + "問");
	}
}

// 解答フォームの構成・表示
function Make_forms(id) {
	let str = "";
	if (typeof CLASS !== "undefined") {
	    for (let main_q = 0; main_q < MAIN_Q_NUM; main_q++) {
	        str +=  '<form name="Q' + (main_q + 1) + '">' +
	            	'	<question id="question_Q' + (main_q + 1) + '" style="float:left; margin:10px 0;"></question>' +
	                '	<div id="testQ' + (main_q + 1) + '_here"></div>' +
	                '</form>';
	    }
	} else if (typeof KANKEN !== "undefined") {
		if (mode === "試験" || mode === "とことん") {
		    for (let main_q = 0; main_q < MAIN_Q_NUM; main_q++) {
		    	if (!KANJI[genre][main_q]) break;
		    	
		    	str +=  '<form name="Q'+ (main_q + 1) +'">' +
		            	'	<question id="question_Q' + (main_q + 1) + '" style="float:left; margin:10px 0;"></question>' +
		    			'	<div id="testQ'+ (main_q + 1) +'_here"></div>' +
		    			'</form>';
		    			
		    	if (mode === 'とことん') break;
		    }
		} else if (mode === "復習") {
		    for (let genre_f = 0; genre_f < GENRE.length; genre_f++) {
		    	for (let level_f = 0; level_f < LEVEL.length; level_f++) {
		    		if (!LIST[genre_f][level_f]) continue;
		    		
		    		str +=  '<form name="Q' + (genre_f + 1) + 'L'+(level_f+1)+'_f">' +
		            		'	<question id="question_Q' + (genre_f + 1) + 'L'+(level_f+1)+'_f" style="float:left; margin:10px 0;"></question>' +
		    				'	<div id="fukusyuuQ' + (genre_f + 1) + 'L'+(level_f+1)+'_here"></div>' +
		    				'</form>';
		    	}
		    }
		}
	}
	
	// フォームの表示
	$(id).html(str);
}

// 問題文の構成・表示
function Make_question(data1, data2) {
	if (typeof CLASS !== "undefined") {
		const main_q = data1;
		
		const kansuji = To_kansuji(main_q + 1); // 大問の番号
		const question = QUESTION_STR[main_q][genre]; // 問題文
		const score = UNIT_SCORE[main_q]; // 配点
		const q_num = Q_NUM[main_q]; // 問題数
		
	    const str = '[' + kansuji + '] ' + question + '(' + score + '点×' + q_num + '問)';
	    
	    $("#question_Q" + (main_q + 1)).html(str);
	} else if (typeof KANKEN !== "undefined") {
		if (mode === "試験" || mode === "とことん") {
			const main_q = data1;
			
		    let text = QUESTION_STR[genre];
		    if (mode === '試験') {
		    	// 配点
		    	if (KANJI[genre].length < 2) {
		        	text += "("+UNIT_SCORE[main_q]+"点×50問)";
		        } else {
		        	text = "[レベル"+(main_q + 1)+"] " + text;
		        	text += "("+UNIT_SCORE[main_q]+"点×"+Q_NUM[main_q]+"問)";
		        }
		    } else if (mode === 'とことん') {
		    	text = "[レベル"+(level + 1)+"] " + text;
		    }
		    const str = '<toi style="line-height:2; padding:0;">' + text + '</toi>';
		    
			$("#question_Q" + (main_q + 1)).html(str);
		} else if (mode === "復習") {
			const genre_f = data1;
			const level_f = data2;
			const is_level_undef = (KANJI[genre_f].length < 2);
			
		    let text = QUESTION_STR[genre_f].split("（")[0];

			if (is_level_undef) {
		    	text = '[レベル無] ' + text;
		    } else {
		    	text = '[レベル'+(level_f + 1)+'] ' + text;
		    }
		    const str = '<toi style="line-height:2; padding:0;">' + text + '</toi>';
		    
			$("#question_Q" + (genre_f + 1) + "L"+(level_f + 1)+"_f").html(str);
		}
	}
}

// 漢字・読み・条件の取得
function Get_data(main_q, genre, i) {
    let kanji = KANJI[main_q][genre][i];
    let yomi = YOMI[main_q][genre][i];

    // 別表記がある場合はランダムで決定
    if (kanji.split(":").length >= 2) {
        const n = Math.floor(Math.random() * kanji.split(":").length);
        kanji = kanji.split(":")[n];

        if (yomi.split(":").length >= 2) {
            yomi = yomi.split(":")[n];
        }
    }

    // 「漢字」と「条件」を別々に取得
    let condition = "";
    if (kanji.split("(").length === 2) {
        condition = kanji.split("(")[1].split(")")[0]; // 括弧の中身を取り出す
        kanji = kanji.split("(")[0]; // 漢字のみ
    }
    
    return [kanji, yomi, condition];
}

// 試験テーブルの構成
function Make_table(data, double_column, q, data1, data2, data3) {
	const kanji = Add_uni_tag(data[0]);
	const yomi = data[1];
	const condition = data[2];
	let url = "https://www.google.co.jp/search?q="+ kanji + "+" + yomi.split(",")[0];
	url = Replace(url, [
			  [/<uni>/g, ""],
			  [/<\/uni>/g, ""]
		  ]);

	// - - テーブルの構成 - -
	
	let str = "";
	
    if (q === 0) str += '<table class="float_left" style="clear:both">';
    
	// 復習モードか否かでテーブル内容を分岐
	let input_name;
	let answer_id;
	let is_table_end;
	let is_float_right;
	if ((typeof mode !== "undefined") && (mode === "復習")) {
		// 復習モードの場合
		const q_num = data1;
		const genre_f = data2;
		const level_f = data3;
		
	    if (!double_column) return str;
	    
	    is_float_right = (q === Math.ceil(q_num / 2));

		input_name = 'Q' + (genre_f + 1) + 'L'+(level_f+1)+'q' + (q + 1);
		answer_id = 'answer_Q' + (genre_f + 1) + 'L'+(level_f+1)+'q' + (q + 1);
		is_table_end = (q === Math.ceil(q_num / 2) - 1 || q === q_num - 1);
	} else {
		// 復習モード以外の場合
		const q_num = data1;
		const main_q = data2;

		is_float_right = (double_column && q === q_num / 2);
		
		input_name = 'Q' + (main_q + 1) + 'q' + (q + 1);
		answer_id = 'answer_Q' + (main_q + 1) + 'q' + (q + 1);
		is_table_end = (q === q_num / (double_column + 1) - 1);
	}

	// - - テーブルの構成 - -
	
	if (is_float_right) str += '<table class="float_right">';

    str +=  '<tr>' +
            '	<th>' +
            '		<h4><toi>問' + (q + 1) + '</toi><kanji class="zoom_up">' + kanji + '</kanji></h4>' +
            '	</th>' +
            '	<td style="position:relative;">' +
            '		<input type="text" name="' + input_name + '" placeholder="' + condition + '">' +
        	'		<p id="' + answer_id + '" class="answer"></p>' +
        	'		<div class="center kensaku_panel" style="left:65%; top:20%; opacity:0; display:none;">' +
        	'			<a href='+ url +' target="_blank"><p>検索</p></a>' +
        	'		</div>' +
            '	</td>' +
            '</tr>';
    
    if (is_table_end) str += '</table>';
    
	return str;
}


/* 採点関連 */


// 正誤判定
// answer  : 受検者の解答と一致した答え
// answers : 別解も含む答え一式
function Check_answer(input, yomi) {

    let is_correct = false;

    // 空白類を取り除く・カナをひらがなに変換
    input = input.replace(/\s+/g, "");
    input = Kana_to_hira(input);

    // 別解ごとに配列に格納
    yomi = yomi.replace(/[()]/g, ""); // 括弧を削除
    yomi = Kana_to_hira(yomi);
    const answers = yomi.split(",");

    // 正誤判定(別解を一つずつチェック)
    let answer;
    for (let i = 0; i < answers.length; i++) {
        if (input === answers[i]) {
            is_correct = true;
            answer = answers[i];
            break;
        }
    }

    return [is_correct, answer, answers];
}

// フィールド内のカラーリング
function Coloring_field(is_correct, field_name) {
	const input_name = 'input[name="' + field_name + '"]';
	
    if (is_correct) {
        // 正解なら赤色に
        $(input_name).css('background-color', 'coral');
    } else {
        // 不正解なら青色に
        $(input_name).css('background-color', 'cornflowerblue');
    }
}

// 正解・別解の表示
function Show_answers(data, yomi, field_name) {
    const is_correct = data[0];
    const answer = data[1];
    const answers = data[2];
	const elem = document.getElementById('answer_' + field_name);
	
    if (!(is_correct)) {
        // 不正解のとき 正解の書き込み
        elem.innerHTML = yomi;
    } else if (answers.length >= 2) {
        // 別解があるとき 別解の書き込み
        elem.innerHTML = "別解:" + Replace(yomi, [
            [answer + ",", ""],
            ["," + answer, ""],
            ["(" + answer + "),", ""],
            [",(" + answer + ")", ""]
        ]);
    } else {
    	return;
    }

    // 正解・別解の表示
    $('input[name="' + field_name + '"]').css('margin-top', '20px');
    $('#answer_' + field_name).css('display', 'block');
}

// アニメーションでカウントアップ
function Count_up(score) {
    let num = 0;
    const target = score;
    const speed = 20;

    setInterval(function() {
        if (num === target) {
            $('#hantei').addClass('anim1');
            $('#a_tweet').addClass('anim1');
            if (judge === "満点") {
                $("#result_gold").fadeIn('normal');
            } else if (judge === "合格") {
                $("#result_silver").fadeIn('normal');
            } else if (judge === "あと少し") {
                $("#result_bronze").fadeIn('normal');
            }
        }
        if (num <= target) {
            $('#count_up').html(num + "点");
            num++;
        }
    }, speed);
}

// 採点結果をtwitterボタンに反映
function Set_tweet_button(score) {
	let id;
	let twitter_url;
	let twitter_text;

	if (mode === "試験") {
		id = "#a_tweet";
        twitter_text = encodeURI("【" + KENTEI_NAME + "】採点結果：あなたの得点は"+score+"点/"+ MAX_SCORE +"点です。\n「難読漢字検定」" + MEDAL_IMAGE[judge]);
	} else if (mode === "とことん") {
		id = "#a_tweet_tokoton";
        twitter_text = encodeURI("【"+KENTEI_NAME+"】"+GENRE[genre]+"を合計" + kanji_clear + "問クリアしました。");
	} else if (mode === "復習") {
		id = "#a_tweet_fukusyuu";
        twitter_text = encodeURI("【復習】"+KENTEI_NAME+"を" + score + "問克服しました。");
	}
	
    twitter_url = 'https://twitter.com/share?url=https://se130054.web.fc2.com' +
                  '&text=' + twitter_text +
                  '&hashtags=' + encodeURI("難読漢字検定,フリーゲーム") +
                  '&count=none&lang=ja';

    if (mode === "復習") $(id).css("display", "block");
    $(id).attr('href', twitter_url);
    if (mode === "とことん" || mode === "復習") $(id).addClass('anim1');
}

// 復習リストに追加
function Add_to_list(add_index, cookie) {
	let list = Get_cookie(cookie);
	
	if (list) {
		list += ",";
	} else {
		list = "";
	}
    list += String(add_index);
    
    Write_cookie(list, cookie);
}

// 復習リストからの削除
function Remove_from_list(q, cleared, remove_index, cookie) {
	let list = Get_cookie(cookie);
	
	// 最後の1個ならnullを格納(＝空にする)
    if (list.split(",").length === 1) {
    	Write_cookie(null, cookie);
    	return;
    }
    
    // 削除する番号の位置で分岐
    const position = q - cleared;
	if (position === 0) {
		// 先頭の場合
    	list = list.replace(remove_index +",", "");
    } else if (position === list.split(",").length - 1) {
    	// 末尾の場合
    	list = list.replace(","+ remove_index, "");
    } else {
    	// 間の場合
    	list = list.replace(","+ remove_index +",", ",");
    }
    
    Write_cookie(list, cookie);
}

// お疲れページの表示
function Show_otsukare_page() {
	
    const is_level_undef = (KANJI[genre].length < 2);
    if (is_level_undef) level = 0;
    
    // 出題する問題が残っていないかを判定
	const asked = KANJI_ASKED[genre][level];
	const len = KANJI[genre][level].length;
	const is_over = (asked >= len);

    if (is_over) {
    	// すべて出題した場合
        let field_id;
        if (is_level_undef) {
			field_id = '#genre_field';
        } else {
			field_id = '#level_field';
        }
        $(field_id).fadeOut('normal', function() {
            $('#test_field').fadeIn('normal');
            $("#button_saiten").css("display", "none");
            $("#clear_line").css("display", "none");
            $("#tokoton_texts").css("display", "none");
            $('#full_tokoton').addClass('anim1');
            $('#a_tweet_tokoton').css("display", "block");
            $('#a_tweet_tokoton').addClass('anim1');
        });
        $("#full_tokoton").css("display", "block");
        $('#full_tokoton').addClass('anim1');
        $('#otsukare').addClass('anim1');
    } else {
    	// 中断の場合
        $("#full_tokoton").css("display", "none");
        $('#otsukare').addClass('anim1');
    }

    $("#tokoton_kekka").css("display", "none");
    $("#forms").css("display", "none");
    $("#button_next").css("display", "none");
    $("#button_finish").css("display", "none");
    $("#finish_kekka").css("display", "block");
    $('#finish_kekka').addClass('anim1');
    $('#finish_kekka a').addClass('anim1');
    $("#button_home").css("display", "block");
}



// - - kanken~.html - - 



// 漢検データの格納
function Data_set() {
	IS_ALL_LIST_NULL = true;
	ALL_LIST_NUM = 0; // 総登録数
	ALL_ASKED_NUM = 0; // 総出題数

	for (let genre = 0; genre < GENRE.length; genre++) {
        for (let level = 0; level < LEVEL.length; level++) {
        
        	const cookie = COOKIE + '_' + GENRE_EN[genre] + '_'+LEVEL_EN[level];
        	
        	// LIST格納
        	const list = Get_cookie(cookie + '_list');
    		LIST[genre][level] = list;
    		
        	// LIST_NUM ALL_LIST_NUM格納
            if (list !== null) {
            	const num = list.split(",").length;
            	LIST_NUM[genre][level] = num;
            	ALL_LIST_NUM += num;
				IS_ALL_LIST_NULL = false;
			}

			if (!KANJI[genre][level]) continue;
			
			// KANJI_CLEAR格納
			const clear = Number(Get_cookie(cookie + '_clear'));
			KANJI_CLEAR[genre][level] = clear;
			
			// KANJI_ASKED格納
			const asked = Number(Get_cookie(cookie + '_asked'));
			KANJI_ASKED[genre][level] = asked;
			ALL_ASKED_NUM += asked;
    	}
    }
}



// - - siritori~.html - - 



/** カタカナをひらがなに変換する関数
 * @param {String} src - カタカナ
 * @returns {String} - ひらがな
 */
function Kana_to_hira(src) {
	return src.replace(/[\u30a1-\u30f6]/g, function(match) {
		const chr = match.charCodeAt(0) - 0x60;
		return String.fromCharCode(chr);
	});
}

/** ひらがなをカタカナに変換する関数
 * @param {String} src - ひらがな
 * @returns {String} - カタカナ
 */
function Hira_to_kana(src) {
	return src.replace(/[\u3041-\u3096]/g, function(match) {
		const chr = match.charCodeAt(0) + 0x60;
		return String.fromCharCode(chr);
	});
}

// 文字列の最後の文字(ひらがな)をインデックス番号に変換
// String.fromCharCode(12354) -> "あ"
// 'あ'.charCodeAt(0) -> 12354
function Hira_to_num(correct_answer) {
	const len = correct_answer.length;
	
	correct_answer = Kana_to_hira(correct_answer);
	hira = correct_answer.slice(len - 1, len);
	
	let num;
	
	if (hira === 'あ') { num = 0;} else if (hira === 'い') { num = 1;} else if (hira === 'う') { num = 2;}
	else if (hira === 'え') { num = 3;} else if (hira === 'お') { num = 4;}
	else if (hira === 'か') { num = 5;} else if (hira === 'き') { num = 6;}
	else if (hira === 'く') { num = 7;} else if (hira === 'け') { num = 8;}
	else if (hira === 'こ') { num = 9;} else if (hira === 'さ') { num = 10;}
	else if (hira === 'し') { num = 11;} else if (hira === 'す') { num = 12;}
	else if (hira === 'せ') { num = 13;} else if (hira === 'そ') { num = 14;}
	else if (hira === 'た') { num = 15;} else if (hira === 'ち') { num = 16;}
	else if (hira === 'つ') { num = 17;} else if (hira === 'て') { num = 18;}
	else if (hira === 'と') { num = 19;} else if (hira === 'な') { num = 20;}
	else if (hira === 'に') { num = 21;} else if (hira === 'ぬ') { num = 22;}
	else if (hira === 'ね') { num = 23;} else if (hira === 'の') { num = 24;}
	else if (hira === 'は') { num = 25;} else if (hira === 'ひ') { num = 26;}
	else if (hira === 'ふ') { num = 27;} else if (hira === 'へ') { num = 28;}
	else if (hira === 'ほ') { num = 29;} else if (hira === 'ま') { num = 30;}
	else if (hira === 'み') { num = 31;} else if (hira === 'む') { num = 32;}
	else if (hira === 'め') { num = 33;} else if (hira === 'も') { num = 34;}
	else if (hira === 'や') { num = 35;} else if (hira === 'ゆ') { num = 36;}
	else if (hira === 'よ') { num = 37;} else if (hira === 'ら') { num = 38;}
	else if (hira === 'り') { num = 39;} else if (hira === 'る') { num = 40;}
	else if (hira === 'れ') { num = 41;} else if (hira === 'ろ') { num = 42;}
	else if (hira === 'わ') { num = 43;} else if (hira === 'が') { num = 44;}
	else if (hira === 'ぎ') { num = 45;} else if (hira === 'ぐ') { num = 46;}
	else if (hira === 'げ') { num = 47;} else if (hira === 'ご') { num = 48;}
	else if (hira === 'ざ') { num = 49;} else if (hira === 'じ') { num = 50;}
	else if (hira === 'ず') { num = 51;} else if (hira === 'ぜ') { num = 52;}
	else if (hira === 'ぞ') { num = 53;} else if (hira === 'だ') { num = 54;}
	else if (hira === 'ぢ') { num = 55;} else if (hira === 'づ') { num = 56;}
	else if (hira === 'で') { num = 57;} else if (hira === 'ど') { num = 58;}
	else if (hira === 'ば') { num = 59;} else if (hira === 'び') { num = 60;}
	else if (hira === 'ぶ') { num = 61;} else if (hira === 'べ') { num = 62;}
	else if (hira === 'ぼ') { num = 63;} else if (hira === 'ぱ') { num = 64;}
	else if (hira === 'ぴ') { num = 65;} else if (hira === 'ぷ') { num = 66;}
	else if (hira === 'ぺ') { num = 67;} else if (hira === 'ぽ') { num = 68;}
	else if (hira === 'ゃ') { num = 35;} else if (hira === 'ゅ') { num = 36;}
	else if (hira === 'ょ') { num = 37;} else if (hira === 'ー') {
		let hira2 = correct_answer.slice(len - 2, len - 1);
		let num2 = Hira_to_num(hira2);
		if (num2 <= 34) {
			return num2 % 5;
		} else if (35 <= num2 && num2 <= 37) {
			return (num2 % 5) * 2;
		} else if (38 <= num2 && num2 <= 42) {
			return (num2 + 2) % 5;
		} else if (num2 === 43) {
			return 0;
		} else if (44 <= num2 && num2 <= 68) {
			return (num2 + 1) % 5;
		} else if (69 <= num2 && num2 <= 68) {
			return (num2 + 1) % 5;
		}
	} else {
		num = -1;
	}
	
	return num;
}

// 単語の最後の文字(ひらがな)を返す
function Sirimoji(str) {
	let hira_siri = Kana_to_hira(str.slice(str.length - 1, str.length));
	
    // 「－」などのとき
    if (hira_siri === 'ゃ') {
        hira_siri = 'や';
    } else if (hira_siri === 'ゅ') {
        hira_siri = 'ゆ';
    } else if (hira_siri === 'ょ') {
        hira_siri = 'よ';
    } else if (hira_siri === 'ー') {
    	let num = Hira_to_num(str);
        if (num === 0) {
            hira_siri = 'あ';
        } else if (num === 1) {
            hira_siri = 'い';
        } else if (num === 2) {
            hira_siri = 'う';
        } else if (num === 3) {
            hira_siri = 'え';
        } else if (num === 4) {
            hira_siri = 'お';
        }
    }
    
    return hira_siri;
}

// 分岐ありならis_bunkiはtrue
function Bunki_hantei(answers) {
	
    if (answers.length < 2) {
    	return false;
	}
	
	let is_bunki = false;
	let hira_siri = new Array();
	
	for (let i = 0; i < answers.length; i++) {
		hira_siri[i] = Sirimoji(answers[i]);
	}
	
	for (let i = 0; i < answers.length - 1; i++) {
    	if (hira_siri[i] !== hira_siri[i+1]) {
        	is_bunki = true;
        	break;
        }
    }
    
    return is_bunki;
}

// 最も効果的なひらがなを求める
function Nice_hira(answers) {
	let min_stock = 999;
	let nice_hira;
	for (let i = 0; i < answers.length; i++) {
    	
    	const hira_siri = Sirimoji(answers[i]);
		const num = Hira_to_num(hira_siri);
		
		if (num < 0) continue;
		
		if (min_stock > KANJI[num].length) {
			min_stock = KANJI[num].length;
			nice_hira = hira_siri;
		}
	}
    
    return nice_hira;
}

// HPゲージの配色
function Coloring(your_HP, adv_HP) {

	if (your_HP === 3) {
	    $("#your_mass_1").css("background", "linear-gradient(#00FF00, #DDEE90)");
	    $("#your_mass_2").css("background", "linear-gradient(#00FF00, #DDEE90)");
	    $("#your_mass_3").css("background", "linear-gradient(#00FF00, #DDEE90)");
	} else if (your_HP === 2) {
	    $("#your_mass_1").css("background", "linear-gradient(#FFFF00, #FFFAAA)");
	    $("#your_mass_2").css("background", "linear-gradient(#FFFF00, #FFFAAA)");
	    $("#your_mass_3").css("background", "transparent");
	} else if (your_HP === 1) {
	    $("#your_mass_1").css("background", "linear-gradient(#FF0000, #FFA07A)");
	    $("#your_mass_2").css("background", "transparent");
	    $("#your_mass_3").css("background", "transparent");
	} else if (your_HP <= 0) {
	    $("#your_mass_1").css("background", "transparent");
	    $("#your_mass_2").css("background", "transparent");
	    $("#your_mass_3").css("background", "transparent");
	}

	if (adv_HP >= 21) {
	    $("#adv_mass_1").css("background", "linear-gradient(#00FF00, #99EE90)");
	    $("#adv_mass_2").css("background", "linear-gradient(#00FF00, #99EE90)");
	    $("#adv_mass_3").css("background", "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) " + (30 - adv_HP) * 10 + "%, #00FF00 " + (30 - adv_HP) * 10 + "%, #00FF00 100%)");
	} else if (adv_HP >= 11) {
	    $("#adv_mass_1").css("background", "linear-gradient(#FFFF00, #FFFA66)");
	    $("#adv_mass_2").css("background", "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) " + (20 - adv_HP) * 10 + "%, #FFFF00 " + (20 - adv_HP) * 10 + "%, #FFFF00 100%)");
	    $("#adv_mass_3").css("background", "transparent");
	} else if (adv_HP >= 1) {
	    $("#adv_mass_1").css("background", "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) " + (10 - adv_HP) * 10 + "%, #FF0000 " + (10 - adv_HP) * 10 + "%, #FF0000 100%)");
	    $("#adv_mass_2").css("background", "transparent");
	    $("#adv_mass_3").css("background", "transparent");
	} else if (adv_HP <= 0) {
	    $("#adv_mass_1").css("background", "transparent");
	    $("#adv_mass_2").css("background", "transparent");
	    $("#adv_mass_3").css("background", "transparent");
	}
}
