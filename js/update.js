
window.onload = function(){
    var cityId = localStorage["CITYID"];
    //
    //判断是主页、景点、食物

    if(localStorage.TYPE == -1){
        updateSite(cityId);
    }
    if(localStorage.TYPE == 0){
        updateAttraction(cityId);
    }
    if(localStorage.TYPE == 1){
        updateFood(cityId);
    }
}

//根据Id获取城市数据
function getCityDataById(cityId){
    var index = parseInt(cityId);
    var cityData;
    switch (index) {
        case 0:
            cityData = getHangZhouData();
            break;
        case 1:
            cityData = getJinHuaData();
             break;
        case 2:
            cityData = getQuZhouData();
             break;
        case 3:
            cityData = getLiShuiData();
             break;
        case 4:
            cityData = getShaoXingData();
             break;
        case 5:
            cityData = getHuZhouData();
             break;
        case 6:
            cityData = getJiaXingData();
             break;
        case 7:
            cityData = getZhouShanData();
            break;    
        case 8:
            cityData =  getNingBoData();
            break; 
        case 9:
            cityData = getTaiZhouData();
            break; 
        case 10:
            cityData = getWenZhouData();
            break; 
            
    } 
    return cityData;
}
//
//刷新城市主页
function updateSite(cityId){
    var cityData = getCityDataById(cityId);
    console.log(cityData)
    //logo
    var logo = document.getElementById("site-name");
    logo.innerHTML =  '<img src="../img/' + cityId + '/site/'+cityData.site.logo + '" alt="">';
    var str = '<img src="../img/' + cityId + '/site/'+cityData.site.logo + '" alt="">'
    console.log(str)
    //nav诗
    var poem = document.getElementById("site-poem");
    poem.innerHTML = '<img src="../img/' + cityId + '/site/'+cityData.site.poem+ '" alt="">';
    //
    var nameArr = document.getElementsByClassName("eat-name");//名
    var imgArr = document.getElementsByClassName("eat-img");//图
    var textArr = document.getElementsByClassName("box2");//
    //美食
    nameArr[0].innerHTML = '<img src="../img/' + cityId + '/site/' + cityData.site.eat[0] +'">'
    textArr[0].innerHTML = '<img src="../img/' + cityId + '/site/' + cityData.site.eat[1] +'">'
    //游玩
    nameArr[1].innerHTML = '<img src="../img/' + cityId + '/site/' + cityData.site.play[0] +'">'
    textArr[1].innerHTML = '<img src="../img/' + cityId + '/site/' + cityData.site.play[1] +'">'
}
//
//刷新景点界面
function updateAttraction(cityId){
    //获取数据
    var cityData = getCityDataById(cityId);
    //console.log(cityData)
    //banner
    var banner = document.getElementById("atr-box");
    //console.log(banner);
    banner.innerHTML = '<img src="../img/' + cityId + '/景点/'+ cityData.atrBanner + '" alt="">';
    //城市介绍
    var city_intro = document.getElementById("atr-city-intro");
    city_intro.innerHTML = '<p class="text-left">'+ cityData.intro +'</p>';
    //景点
    var buttonArr = document.getElementsByTagName("button");
    var introArr = document.getElementsByClassName("item-intro");
    var imgArr = document.getElementsByClassName("carousel-item");
    var count = 0;
    for(var i=0; i < cityData.attractions.length;i++){
        //景点名
        var name = cityData.attractions[i].name;
        buttonArr[i].innerText = name;
        //景点介绍
        var intro = cityData.attractions[i].intro;
        introArr[i].innerHTML =  '<p class="text-left">'+ intro +'</p>';
        //景点图片
        for(var j=0 ; j < cityData.attractions[i].img.length; j++){
            var pic = cityData.attractions[i].img[j];
            imgArr[count].innerHTML = '<img src="../img/'+ cityId + '/景点/' + pic + '">';
            count++;
        }
    }

}
//刷新食物界面
function updateFood(cityId){
    var cityData = getCityDataById(cityId);
    //console.log(cityData)
    //banner
    var banner = document.getElementById("food-box");
    banner.innerHTML = '<img src="../img/' + cityId +'/食物/' + cityData.foodBanner + '"></img>'
    //食物
    var titleArr = document.getElementsByClassName("food-title");
    var picArr = document.getElementsByClassName("food-img");
    var contentArr = document.getElementsByClassName("food-intro");
    for(var i=0; i<cityData.foods.length;i++){
        titleArr[i].innerHTML = '<img src="../img/' + cityId +'/食物/' + cityData.foods[i].title + '"></img>';
        picArr[i].innerHTML = '<img src="../img/' + cityId +'/食物/' +  cityData.foods[i].img + '"></img>';
        contentArr[i].innerHTML = '<p>'+cityData.foods[i].content + '</p>'
    }
}

