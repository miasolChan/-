
window.onload = function(){
    //import JSON from './json/zhejiang,json';
    

    //初始化市对象
    cities = getMainJson();
    console.log(cities);
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('zj-map'));

    // 指定图表的配置项和数据
    var option = {
        title: {
        },
        visualMap: {
            show: false,
            min: 0,
            max: 15,
            inRange: {
                color: ['#afddba', '#85d798', '#ffffbf', '#fee090', '#fdae61', '#f4815d', '#e2605a', '#eb6786']
            }
        },

        tooltip: {
            
            trigger: 'item',
            formatter: params => {
                return null;
            }
        },
   
        geo:{
            map:"zhejiang",
            
        },
        series: [{
            type: 'map3D',
            map: '浙江',
            groundPlane: {//平面
                show: true,
                color:'#8fa8b5'
            },
            label: {
                show: true,
                
                emphasis: { // 设置鼠标移上去hover效果
                    show: true,
                    color: '#184252'
                },
                textStyle: { // 标签的字体样式
                    color: '#08131c', // 地图初始化区域字体颜色
                    fontSize: 25, // 字体大小
                    fontWeight: 'bolder',
                    opacity: 1, // 字体透明度
                    backgroundColor: 'rgba(0,23,11,0)' // 字体背景色
                    },
            },
            itemStyle: { // 设置地图块的相关显示信息
                borderWidth: 0,
                color :'#ffffff',
                emphasis: {
                    areaColor: '#184252' // hover效果
                }
                
            },
            postEffect: {//曝光
                enable: true,
            },
            light:{//光源
                main: {
                    intensity: 0.5,
                    shadow: true,
                    alpha: 150,
                    beta: 70
                },
                ambient:{
                    intensity:0,
                },
                ambientCubemap: {
                    diffuseIntensity: 1,
                    texture: '../img/texture/GCanyon.hdr'
                }
            },
            viewControl:{
                zoomSensitivity: 1,//缩放敏感度
            },
            environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { // 配置为垂直渐变的背景
                offset: 0, color: '#6ba9de' //
                }, 
                {
                offset: 0.5, color: '#b0dbff' // 地面颜色
                },
                {
                offset: 0.7, color: '#a4d1f7' // 地面颜色
                },
                {
                offset: 1, color: '#cce8ff' // 地面颜色
                }], false),
            data:[
                {name:'杭州市',value:0},
                {name:'金华市',value:1},
                {name:'衢州市',value:2},
                {name:'丽水市',value:3},
                {name:'绍兴市',value:4},
                {name:'湖州市',value:5},
                {name:'嘉兴市',value:6},
                {name:'舟山市',value:7},
                {name:'宁波市',value:8},
                {name:'台州市',value:9},
                {name:'温州市',value:10}
            ]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    //
    //localStorage.CITYID = 0;
    //鼠标移动到城市地图上
    myChart.on('mouseover', function (params) {
        index = parseInt(params.value);
        localStorage.CITYID = index;
        obj = cities[index];
        changeCity(obj,index);
    });
    // 处理点击事件并且弹出数据名称
    myChart.on('click', function (params) {

        //跳转到杭州主页
        id = parseInt(params.value);
        localStorage.CITYID = id;
        localStorage.TYPE = -1;//主页-1
        window.open("../html/site.html")
    });

    
}


//切换城市
function changeCity(obj,index){
    //城市名
    var title = document.getElementById("city-name");
    title.innerHTML = '<p class="city-anim">'+obj.name+'</p>';
    //介绍
    var intro = document.getElementById("city-intro");
    intro.innerHTML = '<p class="text-left city-anim">'+obj.intro+'</p>';
    //图片
    var imgs = document.getElementsByClassName("spec-item");
    //景点图片
    var spot = imgs[0];
    spot.innerHTML = '<img src="../img/'+index +'/景点/'+obj.spot+'">';
    //食物图片
    var food = imgs[1];
    food.innerHTML = '<img src="../img/'+index +'/食物/'+obj.food+'">';
}

//主页json转Js对象
function getMainJson(){
    var city = [
        {
            "name":"杭州市",
            "intro":"杭州，简称“杭”，古称临安、钱塘，是浙江省省会、副省级市、杭州都市圈核心城市，国务院批复确定的中国浙江省省会和全省经济、文化、科教中心、长江三角洲中心城市之一。地处中国华东地区、钱塘江下游、东南沿海、浙江北部、京杭大运河南端，是环杭州湾大湾区核心城市、沪嘉杭G60科创走廊中心城市 、国际重要的电子商务中心 。杭州人文古迹众多，西湖及其周边有大量的自然及人文景观遗迹，具代表性的有西湖文化、良渚文化、丝绸文化、茶文化，以及流传下来的许多故事传说。",
            "spot":"西湖0.jpg",
            "food":"西湖醋鱼.jpg"
        }, 
        {
            "name":"金华市",
            "intro":"金华，古称婺州，浙江省地级市，长江三角洲中心区27城之一 [1]  ，自秦王政二十五年（前222年）建县，因其“地处金星与婺女两星争华之处”得名金华，简称金，古称婺州；金华地处金衢盆地东段，为浙中丘陵盆地地区，地势南北高、中部低。“三面环山夹一川，盆地错落涵三江”是金华地貌的基本特征。",
            "spot":"双龙洞2.jpg"
            ,"food":"金华火腿.jpg"
        },
        {
            "name":"衢州市",
            "intro":"衢州南接福建南平，西连江西上饶、景德镇，北邻安徽黄山，东与省内金华、丽水、杭州三市相交，有“四省通衢，五路总头”之称。衢州是一座历史文化名城。始建于东汉初平三年（192），有六千多年的文明史、一千八百多年的建城史，1994年被命名为国家历史文化名城，文脉绵延流长，有江南地区保存最好的古代州级城池衢州府城、全国重点文物保护单位衢州府城墙，复建的天王塔院、文昌阁等历史文化古迹。衢州是圣人孔子后裔的世居地和第二故乡，是儒学文化在江南的传播中心，历史上儒风浩荡、人才辈出，素有“东南阙里、南孔圣地”的美誉。",
            "spot":"龙游石窟2.jpg",
            "food":"衢州麻饼.jpg"
        },
        {
            "name":"丽水市",
            "intro":"丽水，古称处州，浙江省辖陆地面积最大的地级市；水被誉为“浙江绿谷”。2005年1月，丽水市被命名为第三批国家级生态示范区；2009年12月，相继被命名为“中国优秀旅游城市”、“中国优秀生态旅游城市”。2010年12月23日，浙江省关注森林组委会正式发文授予丽水“浙江省森林城市”称号。丽水获评首批国家级生态保护与建设示范区。丽水人属江浙民系使用吴语，丽水文化属吴越文化。",
            "spot":"古堰画乡1.jpg",
            "food":"缙云烧饼.jpg"
        },
        {
            "name":"绍兴市",
            "intro":"绍兴，简称“越”，古称越州，地处中国华东地区、浙江省中北部、杭州湾南岸，东连宁波市，南临台州市和金华市，西接杭州市，北隔钱塘江与嘉兴市相望，是长三角城市群重要城市，也是著名的水乡、桥乡、酒乡、书法之乡、名士之乡。绍兴素称“文物之邦、鱼米之乡”。著名的文化古迹有兰亭、禹陵、鲁迅故里、沈园、柯岩、蔡元培故居、周恩来祖居、秋瑾故居、马寅初故居、王羲之故居、贺知章故居等。",
            "spot":"鲁迅故里2.jpg",
            "food":"嵊州榨面.jpg"
        },
        {
            "name":"湖州市",
            "intro":"湖州是一座具有2300多年历史的江南古城，地处浙江省北部，东邻嘉兴，南接杭州，西依天目山，北濒太湖，与无锡、苏州隔湖相望，是环太湖地区因湖而得名的城市。处在太湖南岸，东苕溪与西苕溪汇合处。建制始于战国，有众多的自然景观和历史人文景观，如莫干山、南浔古镇等。湖州是国家历史文化名城、国家森林城市、国家园林城市、国家卫生城市，有双渎雪藕、太湖百合等土特产品，同时也是近代湖商的发源地。",
            "spot":"莫干山1.jpg",
            "food":"千张包子.jpg"
        },
        {
            "name":"嘉兴市",
            "intro":"嘉兴，别称禾城，是浙江省地级市，长江三角洲中心区27城之一，嘉兴是国家历史文化名城，建制始于秦，有两千多年人文历史，自古为繁华富庶之地，素有“鱼米之乡”、“丝绸之府”美誉。嘉兴名人辈出，涌现出茅盾、徐志摩、金庸、王国维、丰子恺、张乐平等名家大师。嘉兴自然风光以潮、湖、河、海并存驰誉江南，拥有南湖、乌镇、西塘三个5A级景区，以及盐官（钱江潮）、南北湖、绮园、月河历史街区、梅花洲、九龙山、东湖、茅盾故居、徐志摩故居等著名景点，构成江南水乡特色；中共一大在嘉兴胜利闭幕，是中国共产党诞生地，成为中国近代史上重要的革命纪念地。",
            "spot":"南湖1.jpg",
            "food":"嘉兴粽子.jpg"
        },
        {
            "name":"舟山市",
            "intro":"舟山市，位于浙江省东北部，东临东海、西靠杭州湾、北界上海市。舟山背靠上海、杭州、宁波等大中城市和长江三角洲等辽阔腹地，面向太平洋，具有较强的地缘优势，踞中国南北沿海航线与长江水道交汇枢纽，是长江流域和长江三角洲对外开放的海上门户和通道，与亚太新兴港口城市呈扇形辐射之势，境内拥有由国务院批准设立的大宗商品交易管理与监督中心。",
            "spot":"东极2.jpg",
            "food":"大烤目鱼.jpg"
        },
        {
            "name":"宁波市",
            "intro":"宁波地处中国华东地区、东南沿海，大陆海岸线中段，长江三角洲南翼，东有舟山群岛为天然屏障，宁波属于典型的江南水乡兼海港城市，是中国大运河南端出海口、“海上丝绸之路”东方始发港。宁波是国家历史文化名城，公元前2000多年的夏代，宁波的名称为“鄞”，春秋时为越国境地，秦时属会稽郡的鄞、鄮、句章三县，唐时称明州。唐朝长庆元年（821年），明州州治迁到三江口，并筑内城，标志着宁波建城之始。明洪武十四年（1381年），取“海定则波宁”之义，改称宁波，一直沿用至今，是中国著名的院士之乡。",
            "spot":"天一阁1.jpg",
            "food":"宁波年糕.jpg"
        },
        {
            "name":"台州市",
            "intro":"台州地处中国华东地区、浙江中部沿海，东濒东海，北靠绍兴市、宁波市，南邻温州市，西与金华市和丽水市毗邻，依山面海。台州是江南水乡，水穿城过。历史上台州“河网密布、港汊交纵”，水乡风韵不亚于苏杭，有“走遍苏杭、不如温黄”之说。台州素以佛宗道源享誉海内外，是佛教天台宗和道教南宗的发祥地。天台山以其深邃的文化内涵孕育出了博大精深的“和合文化”。台州是浙江“七山一水两分田”的缩影，是山、海、水和谐的生态福地。",
            "spot":"琼台仙谷2.jpg",
            "food":"八大碗.jpg"
        },
        {
            "name":"温州市",
            "intro":"温州地处中国华东地区、浙江东南部、瓯江下游南岸，东濒东海、南毗福建、西及西北部与丽水市相连、北和东北部与台州市接壤，是中国数学家的摇篮、中国南戏的故乡、中国海鲜鸡蛋之乡、中国鞋都，温州人被国人称之为东方犹太人。温州是国家历史文化名城 ，素有“东南山水甲天下”之美誉。温州古为瓯地，也称东瓯，公元323年建郡，为永嘉郡，传说建郡城时有白鹿衔花绕城一周，故名鹿城。唐朝时（公元675年）始称温州 ，至今已有2000余年的建城历史。温州是中国民营经济发展的先发地区与改革开放的前沿阵地，在改革开放初期，以“南有吴川，北有温州”享誉全国。",
            "spot":"雁荡山2.jpg",
            "food":"黄金卷.jpg"
        }];
    return city;
}

