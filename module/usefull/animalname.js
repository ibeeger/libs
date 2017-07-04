/*
* @Author: ibeeger
* @Date:   2017-01-04 17:00:38
* @Last Modified by:   ibeeger
* @Last Modified time: 2017-01-05 09:51:56
*/

'use strict';

//哺乳类
var mammals = ["狗","猫","大象","狮子","鲸鱼","黑猩猩","大熊猫","老鼠","蝙蝠","马","猪","猴子","海豚","老虎","牛","兔子","狼","长颈鹿","北极熊","仓鼠","羊","犀牛","龙猫","猛犸象","猩猩","熊","虎鲸","狐狸","松鼠","驯鹿","大猩猩","骆驼","袋鼠","伊犁鼠兔","藏獒","河马","刺猬","豹子","裸鼹鼠","野猪","猕猴","浣熊","穿山甲","猎豹","蓝鲸","白鲸","山羊","豪猪","棕熊","座头鲸","长毛象","白犀牛","熊猫","树懒","海牛","海象","羚羊","河狸","麋鹿","吉娃娃","水獭","泰迪","蛔虫","小熊猫","巨猿","豹猫","鬣狗","狐猴","逆戟鲸","负鼠","狨猴","水牛","飞猫","斑马","灰熊","冈比亚鼠","安第斯眼镜熊","北美负鼠","白兔","缅因猫","南美洲栗鼠","沟齿鼩","貉","蜜獾","龙王鲸","安哥拉兔","苏格兰牧羊犬","田猫狸","家兔","猫猴","普尔加托里猴","驴","赛马","灰鲸","貘","大角羊","旅鼠","江豚","长须鲸","犰狳","雕齿兽","斑驴","野骆驼","彩蝠","三趾树懒","黄鼬","非洲刺毛鼠","赤狐","白足鼠","独角鲸","蛇獴","侏儒狨","袋獾","金毛","布偶猫","斯瓦尔巴驯鹿","亚洲象","东北虎","云猫","大鼠","鼷鹿","羊驼","角岛鲸","香猪","倭河马","毛丝鼠","吸血蝙蝠","婆罗洲犀牛"]
var bird = ["鸡","鹦鹉","鸽子","乌鸦","猫头鹰","麻雀","企鹅","翠鸟","斑胸草雀","鸭子","燕子","啄木鸟","海鸥","火鸡","鸵鸟","老鹰","火烈鸟","信鸽","鹰","母鸡","候鸟","军舰鸟","秃鹫","杜鹃","白颊林莺","布谷鸟","海燕","喜鹊","遗鸥","画眉","小蓝企鹅","渡渡鸟","非洲灰鹦鹉","震旦鸦雀","鸊鷉","犀鸟","盔犀鸟","四川短翅莺","啄羊鹦鹉","戴胜","大雁","长耳鸮","弥曼始今鸟","猎鹰","燕八哥","伯劳","白头鹫","红树林树雀","日本大山雀","椋鸟","白鹳","旅鸟","壮丽细尾鹩莺","孔雀","灰雁","夜鹭","恐鸟","留鸟","栗冠弯嘴鹛","加拿大黑雁","红嘴相思鸟","小葵花凤头鹦鹉","羞死鸟","黄鹂","蓝极乐鸟","红腹灰雀","白腰文鸟","白颊山雀"]
var fish = ["鲨鱼","金鱼","食人鱼","海马","电鳗","锯鳐","河豚","非洲肺鱼","三文鱼","秋刀鱼","锤头鲨","鲶鱼","中华鲟","孔雀鱼","美人鱼","月鱼","六须鲶鱼","草鱼","杜兹肺鱼","淡水鱼","双髻鲨","魟鱼","金龙鱼","翻车鱼","娃娃鱼","射水鱼","大银鱼","假鳃鳉鱼","腔棘鱼","查菲窄尾魟","大鲵","多鳍鱼","口袋鲨","切蛋鱼","条纹斑竹鲨","鳄雀鳝","前口蝠鲼","鮟鱇","壶瓶山鮡","小丑鱼","刀鱼","蝠鲼","豹纹鲨","虾虎鱼","弹涂鱼","水滴鱼","泥鳅","虾","云斑尖嘴丽鱼","观赏鱼","垩鮨","沙丁鱼"]
var reptilia = ["恐龙","蛇","鳄鱼","乌龟","蜥蜴","蟒蛇","变色龙","眼镜蛇","海龟","象龟","壁虎","斑鳖","霸王龙","暴龙","奇翼龙","始祖鸟","雷龙","果壳綦江龙","穴居沙龟","绿鬣蜥","智利龙","甲鱼","黄金蟒","刺背鳄蜥","巨颊龙","王蛇","两头蛇","中华花龟","鱼龙","绿毛龟"]
var amphibian = ["青蛙","海蟾蜍","蝾螈","红点齿蟾","蝌蚪","玻璃蛙","奇异多指节蛙","阿马乌童蛙","新疆北鲵","牛蛙","变形蛙","透明鱼","墨西哥钝口螈","越南棱皮树蛙","角蛙","黄金箭毒蛙","伊比利亚山蛙","山鸡细趾蟾","树蛙","蚓螈","魔鬼蛙"]
var insect = ["蚊子","蚂蚁","蜜蜂","蟑螂","苍蝇","蝉","蝴蝶","萤火虫","蜻蜓","果蝇","知了","蚕","螳螂","蟋蟀","屎壳郎","白蚁","黑脉金斑蝶","冬虫夏草","金蝉","飞蛾","虎头蜂","大黄蜂","切叶蚁","跳蚤","蚜虫","虱子","臭虫","德国蜚蠊","兰花螳螂","美洲蜚蠊","隐尾蠊","虫","灶马","褐飞虱","突灶螽","枯叶蝴蝶","旌蛉","地中海实蝇","吸血虫","蚊蝎蛉","复变甲","螳水蝇","钩翅石蛾","蛾子","椿象","寇蛛","草蛉","壁蜂","乌桕大蚕蛾","埋葬虫","竹节虫","弓背蚁","阴虱","麦蚜","放屁虫","巨脉蜻蜓","陷阱颚蚁","齿猛蚁","毛毛虫","射炮步甲"]
module.exports = {
	mammals:mammals, //哺乳
	bird:bird,//鸟类
	fish:fish,//鱼类
	reptilia:reptilia,//爬行
	amphibian:amphibian,//两栖
	insect:insect,//昆虫

};