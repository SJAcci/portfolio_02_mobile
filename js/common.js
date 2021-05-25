//panel
$(document).ready(function(){
    var pBtn = '.panelIcon a';
    var panel = '.panel';
    var mainNav = '.topNav';
    var subNav = '.subNav';
    
    $(pBtn).click(function(e){
        e.preventDefault();
        
        $(panel + ', html, body').toggleClass('active');
        $(this).toggleClass('active');
    });
    
    $(mainNav).click(function(){
        var is = $(this).next().is(':hidden');
        
        if(is){ 
            $(subNav).stop().slideUp('fast'); 
            $(this).next().stop().slideDown('fast'); 
            $(mainNav).removeClass('active'); 
            $(this).addClass('active'); 
        }else{ 
            $(this).next().stop().slideUp('fast'); 
            $(this).removeClass('active'); 
        }
    });
});

//searchBox
$(document).ready(function(){
    $('#searchIcon').click(function(e){
        e.preventDefault();
        
        $('.searchBox').stop().fadeIn(500);
        $('.searchBg').fadeIn(500); 
        $('html, body').addClass('active');
    });
    
    $('#closeSearch').click(function(e){
        e.preventDefault();
        
        $('.searchBox').stop().fadeOut(500);
        $('.searchBg').fadeOut(500); 
        $('html, body').removeClass('active');
    });
});


//familySite
$(document).ready(function(){
    var btn = '.family button'; 
    var icon = '.icon';
    var speed = 'fast'; 
    var active = 'active'; 
    
    $(btn).click(function(){
        $(this).next().stop().slideToggle(speed);
        $(this).find(icon).toggleClass(active);
    }); 
    
    $(btn).parent().mouseleave(function(){
        $(this).find('ul').slideUp(speed); 
        $(this).find(icon).removeClass(active); 
    }); 

    $(btn).next().find('li:last a').keydown(function(e){
        if(e.keyCode == 9){
            if(!e.shiftKey){
                $(btn).parent().trigger('mouseleave');
            }
        }
    });

    $(btn).keydown(function(e){
        if(e.keyCode == 9){
            if(e.shiftKey){
                $(this).parent().trigger('mouseleave');
            }
        }
    });
    
}); 


//scrollTop
$(document).ready(function(){
    var btn = '.topBtn a';
    var speed = 1200; 
    var easing = 'easeOutQuart'; 
    
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        var ftop = $('.fBottom p').offset().top;
        var h = $(window).height();
        
        if(top > 200 && top < ftop - h){
            $(btn).parent().fadeIn(600);
        }else{
            $(btn).parent().fadeOut(600);
        }
    });
    
    $(btn).click(function(e){
        e.preventDefault(); 
    
        $('html, body').animate({
            scrollTop: 0 
        },speed,easing);
    });
});