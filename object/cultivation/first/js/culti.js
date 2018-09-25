
var firsttran = function(){
    $('header .center').css("transform",'scale(1)');
}
var cecondtran = function(){
    $('header .cardbox .card:first-of-type,header .cardbox .card:last-of-type').css("transform",'translateX(0)');
    $('header .cardbox .card:nth-of-type(2),header .cardbox .card:nth-of-type(3)').css("transform",'translateY(0)');
}
firsttran();
cecondtran();
$(function(){
$(document).scroll(function(){
    console.log(window.innerHeight)
    if($(this).scrollTop() >= $('.cont11').offset().top-window.innerHeight-200){
        $('.about .wrap .cont11 img,.about .wrap .cont11 .fr').css({
            "transform": 'translateX(0px)'
        });
    }
    if($(this).scrollTop() >= $('.contentbox .content p').offset().top-window.innerHeight-200){ 
        $('.services .contentbox .content:first-of-type,.services .contentbox .content:last-of-type').css({
            "transform": 'translateX(0px)'
        });
        $('.services .contentbox .content:nth-of-type(2)').css({
            "transform": 'translateY(0px)'
        });
    }

    if($(this).scrollTop() >= $('.work .wrap .title').offset().top-window.innerHeight-200){
        $('.work').css("transform",'scale(1)');
    }

    if($(this).scrollTop() >= $('.news .wrap .cardbox h3').offset().top-window.innerHeight-200){ 
        $('.news .wrap .cardbox:first-of-type,.news .wrap .cardbox:last-of-type').css({
            "transform": 'translateX(0px)'
        });
        $('.news .wrap .cardbox:nth-of-type(2)').css({
            "transform": 'translateY(0px)'
        });
    }

    if($(this).scrollTop() >= $('.message .wrap .bigbox h3').offset().top-window.innerHeight-200){ 
        $('.message .wrap .bigbox:first-of-type,.message .wrap .bigbox:last-of-type').css({
            "transform": 'translateX(0px)'
        });
        $('.message .wrap .bigbox:nth-of-type(2)').css({
            "transform": 'translateY(0px)'
        });
    }

    if($(this).scrollTop() >= $('section.message .wrap .bigbox .box').offset().top-window.innerHeight-200){ 
        $('section.footer .icon,.footer h6').css({
            "transform": 'translateX(0px)'
        });
        $('section.footer .wrap .footer-mid ul').fadeIn('slow');
    }
})
})




