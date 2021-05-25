$(document).ready(function(){
    var question = '.conWrap .question';
    var answer = '.conWrap .answer';
    
    
    $(question).click(function(){
        var is = $(this).next().is(':hidden');
        
        if(is){ 
            $(answer).stop().slideUp('fast'); 
            $(this).next().stop().slideDown('0.5s'); 
            $(question).removeClass('active'); 
            $(this).addClass('active'); 
        }else{ 
            $(this).next().stop().slideUp('0.5s'); 
            $(this).removeClass('active'); 
        }
    });

});