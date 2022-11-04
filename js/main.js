//썸네일과 큰이미지가 바뀌는 함수만들기
var oldidx=0;  //기존이미지
var idx=0;  //새로 바뀌는 이미지

function changeImg(idx){  //매개변수가 있는 함수 > idx는 선택되는 이미지 

    if(oldidx!=idx){  //기존의 이미지와 선택된 이미지가 다를때...

        $(".s3_circle li").eq(idx).stop(true,true).fadeIn(300);  //배경 동그라미
        $(".s3_circle li").eq(oldidx).stop(true,true).fadeOut(300);  //배경 동그라미
        $(".thumbs li").eq(idx).css({"opacity":1});  //선택된 썸네일 이미지
        $(".thumbs li").eq(oldidx).css({"opacity":0.3});  //기존의 썸네일 이미지
        $(".largeImg li").eq(idx).stop(true,true).fadeIn(300);  //선택된 이미지 나타남
        $(".largeImg li").eq(oldidx).stop(true,true).fadeOut(300);  //기존 이미지 사라짐
        $(".imgText li").eq(idx).stop(true,true).fadeIn(300);  //선택된 텍스트
        $(".imgText li").eq(oldidx).stop(true,true).fadeOut(300);  //기존 텍스트

    }
    oldidx=idx;  //선택된 이미지는 다시 기존이미지로 저장되어서 Fade Out...

}

$(document).ready(function(){

    //스크롤바가 이동될 때마다 스크롤위치값 나타내기
    $(window).scroll(function(){
        $("#txt1").text($(this).scrollTop());
    });


    // 데스크탑-탑메뉴 오버효과_________________
    $(".gnbmenu li a").hover(function(){
        $(this).find("span").stop(true,true).slideDown(300);
    },function(){
        $(this).find("span").stop(true,true).slideUp(300);
    });


    $(".top_menu").css({"right":"-100%"});

    bb=true;
    $(".mo_menu_btn").click(function(){

        if(bb){
            $(this).addClass("menu-open");
            $(".top_menu").stop(true,true).animate({"right":"0%"});
            bb=false;
        }else{
            $(this).removeClass("menu-open");
            $(".top_menu").stop(true,true).animate({"right":"-100%"});
            bb=true;
        }

    });


    // section3-갤러리_________________

    //썸네일버튼 클릭시...
    $(".thumbs li").click(function(){
        idx=$(this).index();  //0,1,2,...
        changeImg(idx);
    });

});