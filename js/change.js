//跳转到景点
function changeToAtr(){
    localStorage.TYPE = 0;//景点0
    window.open("../html/attractions.html");
}

function changeToFood(){
    localStorage.TYPE = 1;//食物1
    window.open("../html/food.html");
}