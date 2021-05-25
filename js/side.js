$(document).ready(function(){
    $.ajax({
        url:"/js/side.json",
        dataType: "json",
        success: function(data){
            var useData = data.side;
            
            function dataPrint(){
                if(useData.length > 0){
                    var ul = $('<ul class="list" />');
                    var num = 1;
                    
                    for(var i in useData){
                        var $name = useData[i].name;
                        var $price01 = useData[i].price01;
                        var $descript = useData[i].descript;
                        var $image = useData[i].image;
                        
                        //
                        var priceList = $('<ul />');
                        priceList.append(
                            $('<li class="price01" />').text($price01)
                        );
                        
                        var textBox = $('<div class="textBox" />');
                        textBox.append(
                            $('<h5 />').text($name),
                            priceList,
                            $('<p class="descript" />').text($descript)
                        );
                        
                        var li = $('<li />');
                        li.append(
                            $('<li class="imgBox" />'),
                            textBox
                        );
                        
                        li.find('.imgBox').append(
                            $('<img />').attr({
                                src: $image,
                                alt: '이미지' + (i + 1)
                            })
                        );
                        ul.append(li);
                        num++;
                        
                        //
                    }
                    
                    $('.conWrap > div').append(ul);
                }
            }
            dataPrint();
        }, 
        error: function(){ 
            $('.conWrap').after('데이터를 가져오지 못했습니다. 관리자에게 문의해주세요.');
        }
    });
});