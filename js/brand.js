$(document).ready(function(){
    $(window).scroll(function(){
        //스크롤바의 상단좌표를 담는 변수
        var sTop = $(window).scrollTop();

        $('#subContents > section').each(function(index){
            var sectionTop = $(this).offset().top;
            if(sTop > sectionTop - 500){ 
                $(this).find('span').addClass('active');
                $(this).find('img').addClass('active');
                $(this).find('h4').addClass('active');
                $(this).find('h5').addClass('active');
                $(this).find('p').addClass('active');
                $(this).find('.conWrap').addClass('active');
                $(this).find('.blackTitle').addClass('active');
            }
        });
    });
    
    $(window).trigger('scroll');
});