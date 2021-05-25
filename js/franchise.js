$(document).ready(function(){
    $(window).scroll(function(){
        //스크롤바의 상단좌표를 담는 변수
        var sTop = $(window).scrollTop();

        $('#subContents > div').each(function(index){
            var divTop = $(this).offset().top;
            if(sTop > divTop - 500){ 
                $(this).find('h4').addClass('active');
                $(this).find('p').addClass('active');
                $(this).find('.conWrap > .text').addClass('active');
                $(this).find('.conWrap').addClass('active');
                $(this).find('table').addClass('active');
            }
        });
    });
    
    $(window).trigger('scroll');
});