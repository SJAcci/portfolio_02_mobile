//tabBox
$(document).ready(function(){
    var btn = '#subContents .tabBox .btn'; 
    var content = '#subContents .tabBox .conWrap'; 

    $(btn).find('li:first a').addClass('active'); 
    $(content).find('>div:first').fadeIn(0);
    
    $(btn).find('a').click(function(e){
        e.preventDefault(); 

        $(btn).find('a').removeClass('active');
        $(this).addClass('active'); 

        var index = $(this).parent().index();
        
        $(content).find('>div').fadeOut(0); 
        $(content).find('>div').eq(index).fadeIn(0);
    }); 
}); 