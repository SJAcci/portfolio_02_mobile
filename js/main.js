//popUp
$(document).ready(function(){
    function setCookie(name, value, expiredays){
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
    }

    var popup = '.popUp';
    var chkbox = '#chk';
    
    $(popup).find('form a').click(function(){ 
        var chk = $(chkbox).prop('checked');
        
        if(chk){ 
            setCookie('exCookie','done',1); 
        }
        
        $(popup).stop().fadeOut(0);
        $('html, body').removeClass('active');
    });
    
    var cookieData = document.cookie;

    if(cookieData.indexOf('exCookie=done') < 0){
        $(popup).fadeIn(0);
        $('html, body').addClass('active');
        
    }else{
        $(popup).fadeOut(0);
        $('html, body').removeClass('active');
    }
});

//main
$(document).ready(function(){
    var swiper = new Swiper('main .swiper-container', {
        navigation: {
        nextEl: 'main .swiper-button-next',
        prevEl: 'main .swiper-button-prev',
        },
        loop: true,
    });
});


//menu
$(document).ready(function(){
    var swiper = new Swiper('#menu .swiper-container', {
        navigation: {
        nextEl: '#menu .swiper-button-next',
        prevEl: '#menu .swiper-button-prev',
        },
        loop: true,
        slidesPerView: 2,
        spaceBetween: 10,
    });
});


//coupon
$(document).ready(function(){
    var swiper = new Swiper('#coupon .swiper-container', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
            el: '#coupon .swiper-pagination',
        },
        centeredSlides: true,
        on: { 
            slideNextTransitionStart: function(){
                $('#coupon .swiper-pagination-bullet-active').css('animation','btnRight 0.3s');
            },
            slidePrevTransitionStart: function(){
                $('#coupon .swiper-pagination-bullet-active').css('animation','btnLeft 0.3s');
            },
        },
    });
});


//event
$(document).ready(function(){
    var swiper = new Swiper('#event .swiper-container', {
        loop: true,
        pagination: {
            el: '#event .swiper-pagination',
            type: 'fraction',
        },
    });
});


//eventActive
$(document).ready(function(){
    $('#event .swiper-pagination').click(function(e){
        e.preventDefault();
        
        $('#eventActive').stop().fadeIn(500);
        $('#eventActive li').addClass('active');
        $('html, body').addClass('active');
    });
    
    $('#closeEvent img').click(function(e){
        e.preventDefault();
        
        $('#eventActive').stop().fadeOut('fast');
        $('#eventActive li').removeClass('active');
        $('html, body').removeClass('active');
    });
});