$(document).ready(function () {

    $('.title').eq(0).stop().animate({top: '0'}, 1000)
})
$('.open').delay(5000).animate({top: '100' + '%'})
var page = 0;
win_height=$(window).height()


var slide_num=0;
$('html').on('mousewheel',function(event){
       var delta=event.originalEvent.wheelDelta;
       var has_animate=$('.div').is(':animated');
        console.log(page+'= page');
        console.log(slide_num+'= slide_num');
       



})

function ttt(){
    $('.title').eq(slide_num).stop().animate({top: '0'},5000);
    $('.title').not($('.title').eq(slide_num)).stop().animate({top: '100' + '%'});
   
}
slide_in(0);
function slide_in(page){
    win_height      =$(window).height()
    win_width       =$(window).width()
    slide           = $('.slide');
    active          = slide.eq(slide_num);
    active_cont     = active.find(".content");
    

    //
    if(slide_num==0 || slide_num == 1 || slide_num == 2 || slide_num == 3 || slide_num == 4){
        $(".slide-back").stop().animate({height:win_height},function(){
            $(this).animate({width:win_width*0.6,height:50+'%'})
        })
        
    }

    //
    active.css({height:200,right:-win_width})
    $('.slide-back').eq(slide_num).css({height:200,left:-win_width})
    $('.slide-back').eq(slide_num).animate({left:'0'})
    active.stop().animate({right: '0'},  function () {
    


        $(this).stop().animate({height: win_height*0.5 + 200},  function () {
            $(this).find('.box-in').stop().animate({top:win_height*0.5 + 200},1000);
            $('.slide-back').eq(slide_num).find('.box-in').stop().animate({top:-win_height},1500);
            $(".slide").removeClass("aa");
            $(".slide-back").removeClass("bb");
            $(".slide").eq(slide_num).addClass("aa");
            $(".slide-back").eq(slide_num).addClass("bb");
        })
    })
}



function slide_out(page,callback){
    win_height     =$(window).height()
    win_width      =$(window).width()
    $('.aa').height(win_height*0.5 + 200)
    $('.bb').height(win_height*0.2 + 200).animate({top:200})
    $('.bb').find(".box-in").stop().animate({top: '0'},1000)
    $('.aa').find(".box-in").stop().animate({top: '0'},1000,function(){
        $('.bb').stop().animate({height:200});
        $('.aa').stop().animate({height:200},function(){
            $('.bb').animate({left:-win_width},1000)
            $('.aa').animate({right:-win_width*1.2},1000,function(){
                if(typeof callback=="function"){
                    slide_in(slide_num)
                    return slide_num;
                }
            });
        })
    });

}
var slide_num=0;
$('*').on('mousewheel', function (event) {
        event.preventDefault()
        delta = event.originalEvent.wheelDelta
        has_animate = $("div").is(':animated');
        //console.log(page)
//
//        if (!has_animate && delta < 0 && page < 4) {
//            page++;
//            slide_out(page,slide_in)
//            ttt()
//        } else if (!has_animate && delta > 0 && page > 0) {
//            page--
//            slide_out(page,slide_in)
//            ttt()
//        }
//    
          $('.pro-up').css({width:page+'%'})
      if(!has_animate && delta<0 && page<100){
          page++;
        
          
         
      }else if(!has_animate && delta>0 && page>0){
           page--;
        
      } if(page == '0' && !has_animate){
              slide_num='0';
              ttt();
              slide_out(page,slide_in)
          }
          if(page == '25' && !has_animate){
              slide_num='1';
              ttt();
              slide_out(page,slide_in)
              
          }if(page == '50' && !has_animate){
              slide_num='2';
              ttt();
              slide_out(page,slide_in)
              
          }if(page == '75' && !has_animate){
              slide_num='3';
              ttt();
              slide_out(page,slide_in)
          }if(page == '100' && !has_animate){
              slide_num='4';
              ttt();
              slide_out(page,slide_in)
          } 

    }
)





















