$(document).ready(function() {
    
    //YTPlayer
    $("#background").YTPlayer();

    //slick
    $(".spring-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: $(".prevArrow"),
        nextArrow: $(".nextArrow"),
    });

    $(".autumn-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: $(".prevArrow_"),
        nextArrow: $(".nextArrow_"),
    });

    //poster
    var width = $('.post img').width();
    $('.post .txt').css("width",width);

    //menu
    $("#gnb .menu").click(function(){
        $(this).toggleClass("active");
        if($(this).hasClass("active")){
            $("#menu").show();
            $("#gnb .line3").hide();
            $("#gnb .line1, #gnb .line2").addClass("close");
        } else {
            $("#menu").hide();
            $("#gnb .line3").show();
            $("#gnb .line1, #gnb .line2").removeClass("close");
        }
    });
    //social
    $(window).resize(function(){ 
        if (window.innerWidth < 768) {
            $("#menu .menu-wrap .right .top-area .social").appendTo("#menu .menu-wrap .right")
        }else {
            $("#menu .menu-wrap .right .social").prependTo("#menu .menu-wrap .right .top-area")
        }
    }).resize(); 
    //color change
    $(window).scroll(function(event){
        if($(document).scrollTop() > $("#contents .wrap").offset().top){
            $("#gnb .menu span").css("background","#000");
        }else {
            $("#gnb .menu span").css("background","#fff");
        }
    });
    
    //여백
    var target = $("#contents .footer");
    var targetTwo = $("#contents .overview")
    var foundation = $("#contents");
    var value = foundation.css("padding-left").replace(/[^0-9]/g,"");
    target.css("margin-right",value+"px");
    targetTwo.css("padding-right",value+"px");
});