$(window).mousemove(function(){
 mouse_X=event.clientX;
 mouse_Y=event.clientY;
    $('.cursor-base').css({top:mouse_Y,left:mouse_X})
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

//$('#cover').mouseenter(function(){
//    $('.cursor-text').text('cover me 3')
//})
//$('#cover').mouseleave(function(){
//    $('.cursor-text').text('')
//})
//
//$('#about').mouseenter(function(){
//    $('.cursor-text').text('me?')
//})
//$('#about').mouseleave(function(){
//    $('.cursor-text').text('')
//})
//
//$('#works').mouseenter(function(){
//    $('.cursor-text').text('my works :D')
//})
//$('#works').mouseleave(function(){
//    $('.cursor-text').text('')
//})
//$('#contact').mouseenter(function(){
//    $('.cursor-text').text('find me X')
//})
//$('#contact').mouseleave(function(){
//    $('.cursor-text').text('')
//})



$('.next-cover').mouseenter(function(){
    $('.cursor-text').text('COVER ME');
    $('.left-box').stop().css({transform:'scale(1.1)',background:'#3DFF92'})
    mouse_effOn();
});

$('.next-cover').mouseleave(function(){
    $('.cursor-text').text('');
    $('.left-box').stop().css({transform:'scale(1)',background:'#47FF9C'})
    mouse_effOff();
});

$('.next-works').mouseenter(function(){
    $('.cursor-text-left').text('MY WORKS');
    $('.cursor-text').text('');
    $('.left-box').stop().css({transform:'scale(1.1)',background:'#3DFF92'})
    mouse_effOn();
});

$('.next-works').mouseleave(function(){
    $('.cursor-text-left').text('');
    $('.cursor-text').text('');
    $('.left-box').stop().css({transform:'scale(1)',background:'#47FF9C'})
    mouse_effOff();
});

$('.next-about').mouseenter(function(){
    $('.cursor-text-left').text('ME');
    $('.cursor-text').text('');
    $('.left-box').stop().css({transform:'scale(1.1)',background:'#3DFF92'})
    mouse_effOn();
});

$('.next-about').mouseleave(function(){
    $('.cursor-text').text('');
    $('.cursor-text-left').text('');
    $('.left-box').stop().css({transform:'scale(1)',background:'#47FF9C'})
    mouse_effOff();
});

$('.next-contact').mouseenter(function(){
    $('.cursor-text').text('CONTACT ME');
    $('.left-box').stop().css({transform:'scale(1.1)',background:'#3DFF92'});
    mouse_effOn();
});

$('.next-contact').mouseleave(function(){
    $('.cursor-text').text('');
    $('.left-box').stop().css({transform:'scale(1)',background:'#47FF9C'});
    mouse_effOff();
});



$('.next-cover').click(function(){
     $('.left-box-wipe-pr').stop().animate({left:'0'},100,function(){
         $('.left-box-wipe').stop().animate({left:'0'});
     });
     setTimeout(function() {
     window.open('https://size250mm.github.io/COVER/.','_self');
     },3000);
});

$('.next-works').click(function(){
     $('.left-box-wipe-pr').stop().animate({left:'0'},100,function(){
     $('.left-box-wipe').stop().animate({left:'0'});
     });
     setTimeout(function() {
     window.open('https://size250mm.github.io/WORKS/.','_self');
     },3000);
});

$('.next-about').click(function(){
     $('.left-box-wipe-pr').stop().animate({left:'0'},100,function(){
         $('.left-box-wipe').stop().animate({left:'0'});
     });
     setTimeout(function() {
     window.open('https://size250mm.github.io/ABOUT/.','_self');
     },3000);
});
$('.next-contact').click(function(){
     $('.left-box-wipe-pr').stop().animate({left:'0'},100,function(){
         $('.left-box-wipe').stop().animate({left:'0'});
     })
     setTimeout(function() {
     window.open('https://size250mm.github.io/CONTACT/.','_self');
     },3000);
});





$('.next-nikon').click(function(){
     $('.left-box-wipe-pr').stop().animate({left:'0'},100,function(){
         $('.left-box-wipe').stop().animate({left:'0'});
     })
     setTimeout(function() {
     window.open('https://size250mm.github.io/PRE-NIKON/.','_self');
     },3000);
});


$('.next-tr').click(function(){
     $('.left-box-wipe-pr').stop().animate({left:'0'},100,function(){
         $('.left-box-wipe').stop().animate({left:'0'});
     })
     setTimeout(function() {
     window.open('https://size250mm.github.io/PRE-TR/.','_self');
     },3000);
});


$('.next-cgv').click(function(){
     $('.left-box-wipe-pr').stop().animate({left:'0'},100,function(){
         $('.left-box-wipe').stop().animate({left:'0'});
     })
     setTimeout(function() {
     window.open('https://size250mm.github.io/PRE-CGV/.','_self');
     },3000);
});


$('.next-prugio').click(function(){
     $('.left-box-wipe-pr').stop().animate({left:'0'},100,function(){
         $('.left-box-wipe').stop().animate({left:'0'});
     })
     setTimeout(function() {
     window.open('https://size250mm.github.io/PRE-PRUGIO/.','_self');
     },3000);
});


$('.next-hanssam').click(function(){
     $('.left-box-wipe-pr').stop().animate({left:'0'},100,function(){
         $('.left-box-wipe').stop().animate({left:'0'});
     })
     setTimeout(function() {
     window.open('https://size250mm.github.io/PRE-HANSSAM/.','_self');
     },3000);
});

