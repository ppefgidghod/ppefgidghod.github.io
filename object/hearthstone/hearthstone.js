$("section.message .wrap .left .top span img:first-of-type").click(function (e) { 
    $("section.message .wrap .left .top>img:first-of-type").show();
    $("section.message .wrap .left .top>img:nth-of-type(2),section.message .wrap .left .top>img:nth-of-type(3)").hide();
});
$("section.message .wrap .left .top span img:nth-of-type(2)").click(function (e) { 
    $("section.message .wrap .left .top>img:nth-of-type(2)").show();
    $("section.message .wrap .left .top>img:nth-of-type(1),section.message .wrap .left .top>img:nth-of-type(3)").hide();
});
$("section.message .wrap .left .top span img:nth-of-type(3)").click(function (e) { 
    $("section.message .wrap .left .top>img:nth-of-type(3)").show();
    $("section.message .wrap .left .top>img:nth-of-type(1),section.message .wrap .left .top>img:nth-of-type(2)").hide();
});
$("section.message .wrap .right .top .dow ul li.ab2").click(function (e) { 
    $("section.message .wrap .right .top .dow ul li.ab2").css("background-position-y",'-179px');
    $("section.message .wrap .right .top .dow span").css("background-position-y",'-141px');
    $("section.message .wrap .right .top .dow ul li.ab1,section.message .wrap .right .top .dow ul li.ab3").css("background-position-y",'2px');
});
$("section.message .wrap .right .top .dow ul li.ab1").click(function (e) { 
    $("section.message .wrap .right .top .dow ul li.ab1").css("background-position-y",'-179px');
    $("section.message .wrap .right .top .dow span").css("background-position-y",'-367px');
    $("section.message .wrap .right .top .dow ul li.ab2,section.message .wrap .right .top .dow ul li.ab3").css("background-position-y",'2px');
});
$("section.message .wrap .right .top .dow ul li.ab3").click(function (e) { 
    $("section.message .wrap .right .top .dow ul li.ab3").css("background-position-y",'-179px');
    $("section.message .wrap .right .top .dow span").css("background-position-y",'-253px'); 
    $("section.message .wrap .right .top .dow ul li.ab1,section.message .wrap .right .top .dow ul li.ab2").css("background-position-y",'2px'); 
});