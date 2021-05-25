//agree 
$(document).ready(function(){
    $('#allChk').change(function(){
        var chk = $(this).prop('checked');
        if(chk){
            $('.checkBox input').prop('checked',true);
        }else{
            $('.checkBox input').prop('checked',false);
        }
    });
    $('.checkBox input').change(function(){
        var chk01 = $('#agreeChk01').prop('checked');
        var chk02 = $('#agreeChk02').prop('checked');
        var chk03 = $('#agreeChk03').prop('checked');

        if(chk01 && chk02 && chk03){
            $('#allChk').prop('checked',true);
        }else{
            $('#allChk').prop('checked',false);
        }
    });
});


//birth
$(document).ready(function(){
    var yOutput = '';
    var mOutput = '';
    var dOutput = '';
    
    var today = new Date();
    var tYear = today.getFullYear();
    
    for(var i=tYear;i>=1900;i--){
        yOutput += '<option>' + i + '</option>';
    }
    for(var i=1;i<=12;i++){
        mOutput += '<option>' + i + '</option>';
    }
    
    $('#birth01').html(yOutput);
    $('#birth02').html(mOutput);
    
    function dateList(y,m){
        dOutput = ''; 
        
        var mArray = [31,28,31,30,31,30,31,31,30,31,30,31];
        
        if((y % 4 == 0 && y % 100 != 0) || y % 400 == 0){
            mArray[1] = 29;
        }
        
        for(var i=1;i<=mArray[m-1];i++){
            dOutput += '<option>' + i + '</option>';
        }
        
        $('#birth03').html(dOutput);
    }
    
    dateList(tYear,1);
    
    $('#birth01, #birth02').change(function(){
        var y = $('#birth01').val();
        var m = $('#birth02').val();
        
        dateList(y,m);
    });
});


//회원가입 전송 미처리 및 데이터 확인
$(document).ready(function(){
    $('#joinForm').submit(function(e){
        e.preventDefault(); 
        
        //아래 코드는 정답이 아님 - 페이지 이동 확인하라고 적음
        location.href = 'join_complete.html';
    });
    
    $('#pwChk').blur(function(){
        var pw01 = $('#joinPw').val();
        var pw02 = $(this).val();
        
        if(pw01 != pw02){
            $('.joinBox .red').fadeIn(0);
        }else{
            $('.joinBox .red').fadeOut(0);
        }
    });
});