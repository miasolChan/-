function coverIn(index){
    //黑色背景
    var cover = document.getElementsByClassName("cover")[index];
    console.log(cover);
    //删除淡出
    if(cover.className.indexOf("cover-fadeout")!=-1){
        cover.classList.remove("cover-fadeout")
    }
    //添加淡入
    cover.classList.add("cover-fadein")

}

function coverOut(index){
    var cover = document.getElementsByClassName("cover")[index];
    //删除淡入
    cover.classList.remove("cover-fadein")
    //添加淡出
    cover.classList.add("cover-fadeout")
}