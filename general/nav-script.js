
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

function mouse_effOn(){
    $('.cursor-eff1').addClass('eff1')
    $('.cursor-eff2').addClass('eff2')
}
function mouse_effOff(){
    $('.cursor-eff1').removeClass('eff1')
    $('.cursor-eff2').removeClass('eff2')
}









$('a').mouseenter(function(){
    mouse_effOn();
})
$('a').mouseleave(function(){
    mouse_effOff();
})

$('.head-bottom').mouseenter(function(){
    mouse_effOn();
})

$('.head-bottom').mouseleave(function(){
    mouse_effOff();
})

$('.ham-group').mouseenter(function(){
    mouse_effOn();
})

$('.ham-group').mouseleave(function(){
    mouse_effOff();
})

$('#cover').mouseenter(function(){
    $('.cursor-text').text('cover me 3')
})
$('#cover').mouseleave(function(){
    $('.cursor-text').text('')
})

$('#about').mouseenter(function(){
    $('.cursor-text').text('me?')
})
$('#about').mouseleave(function(){
    $('.cursor-text').text('')
})

$('#works').mouseenter(function(){
    $('.cursor-text').text('my works :D')
})
$('#works').mouseleave(function(){
    $('.cursor-text').text('')
})
$('#contact').mouseenter(function(){
    $('.cursor-text').text('find me X')
})
$('#contact').mouseleave(function(){
    $('.cursor-text').text('')
})