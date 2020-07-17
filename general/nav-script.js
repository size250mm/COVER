
$(document).ready(function(){
    
    $('html, body').css({'overflow': 'hidden', 'height': '100%'});
    $('.open-hide1').stop().animate({
        left:'-100'+'%'
    },1000)
     $('.open-hide2').stop().animate({
        left:'-100'+'%'
    },1200)
    setTimeout(function(){
	$('html, body').css({'overflow': 'auto', 'height': 'auto'});
      },2500);
    $('.sub-open').stop().animate({left:-100+'%'},100,function(){
        $('.sub-open-pr').animate({left:-100+'%'})
    })

})





var ham_num = 0;
$('.ham-group').click(function(){
    ham_num++;
    ham_num=ham_num%2;
    console.log(ham_num);
    if(ham_num == 1){
    $('.ham-wrap').find('span').eq(0).css({transform:'rotate(45deg) translate(0,1.5px)'})
     $('.ham-wrap').find('span').eq(1).css({display:'none'})
    $('.ham-wrap').find('span').eq(2).css({transform:'rotate(-45deg) translate(0,-1.5px)'})
    $('.ham-list').animate({left:'0',width:'100%'},100,function(){
         $('.ham-list-wrap').animate({left:'0',width:'80%'},500)
    })
   
    }
    $('.line').css({background:'#000'})
    $('.ham-wrap').find('span').css({background:'#000'})
    $('.page-indi').find('a').css({color:'#000'})
    
    
    if(ham_num == 0){
    $('.ham-wrap').find('span').eq(0).css({transform:'rotate(0deg) translate(0,-5px)'})
     $('.ham-wrap').find('span').eq(1).css({display:'block'})
    $('.ham-wrap').find('span').eq(2).css({transform:'rotate(0deg) translate(0,5px)'})
    $('.ham-list').css({left:'-100'+'%'})
    $('.line').css({background:'#fff'})
    $('.ham-wrap').find('span').css({background:'#fff'})
    $('.page-indi').find('a').css({color:'#fff'})
        
         $('.ham-list').animate({left:'-100'+'%',width:'80%'},function(){
         $('.ham-list-wrap').animate({left:'-100'+'%',width:'100%'})
    })
        
    }
})


