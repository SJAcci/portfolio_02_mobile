//tabbar
$(document).ready(function(){
    //문서객체를 변수에 담기
    var btn = '.pizzaBox .btn';
    var content = '.pizzaBox .conWrap';
    
    //초기실행 - 첫번째 버튼 활성, 첫번째 컨텐츠 보이게 처리
    $(btn).find('li:first a').addClass('active'); 
    $(content).find('> div:first').fadeIn(0);
    
    
    //json데이터를 ajax로 가져오기
    $.ajax({
        url: "/js/pizza.json", //데이터를 수신할 파일 연결
        dataType: "json", //데이터형식 작성
        success: function(data){ //데이터 수신성공했을때
            var data01 = data.all;
            var data02 = data.fondue;
            var data03 = data.premium;
            var data04 = data.special;
            var data05 = data.classic;
            
            var dataArray = [data01,data02,data03,data04,data05];
            
            function dataPrint(index){ //데이터를 가져오기 위한 배열 번호 처리
                
                if(dataArray[index].length > 0){ //데이터가 있다면
                    //ul태그를 동적생성
                    var ul = $('<ul class="list" />'); //시작태그와 종료태그 한번에 생성
                    
                    //? li태그가 반복 ?
                    for(var i in dataArray[index]){
                        //json의 데이터를 각각 담는 변수
                        var $name = dataArray[index][i].name;
                        var $price01 = dataArray[index][i].price01;
                        var $price02 = dataArray[index][i].price02;
                        var $descript = dataArray[index][i].descript;
                        var $image = dataArray[index][i].image;
                        
                        var priceList = $('<ul />');
                        
                        if($price02 == null){
                            $price02 = '';
                        }
                        
                        priceList.append(
                            $('<li class="price01" />').text($price01),
                            $('<li class="price02" />').text($price02)
                        );
                        
                        var textBox = $('<div class="textBox" />');
                        
                        textBox.append(
                            $('<h5 />').text($name),
                            priceList,
                            $('<p class="descript" />').text($descript)
                        );
                        
                        //li태그를 담는 변수
                        var li = $('<li />');
                        
                        //li의 자손으로 데이터 삽입
                        li.append(
                            $('<li class="imgBox" />'),
                            textBox
                        ); 
                        
                        //ul의 자손으로 삽입
                        ul.append(li);
                        
                        //imgBox에 자손으로 이미지 삽입
                        li.find('.imgBox').append(
                            $('<img />').attr({
                                src: $image,
                                alt: '이미지' + (i + 1)
                            })
                        );
                    }
                    
                    
                    $('.pizzaBox .conWrap > div').append(ul);
                }
            }
            
            //초기실행
            dataPrint(0);
            
            //클릭이벤트
            $(btn).find('a').click(function(e){
                e.preventDefault(); //기본이벤트 제거 - 클릭시 위로 올라가는 것 방지

                //버튼활성화
                $(btn).find('a').removeClass('active');
                $(btn).find('li:after').removeClass('active');
                $(this).addClass('active');
                

                var index = $(this).parent().index();

                $(content).find('> div').stop().fadeOut('fast');
                $(content).find('> div').eq(index).stop().fadeIn('fast');
                
                $('.pizzaBox .list').remove(); //문서객체를 제거
                
                dataPrint(index);
            });
            
        },
        error: function(){ //데이터 수신 오류시
            $('.pizzanBox .conWrap').after('데이터를 가져오지 못했습니다. 관리자에게 문의해주세요.');
        }
    });
    
    
});







