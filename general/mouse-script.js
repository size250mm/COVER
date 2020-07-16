$(window).mousemove(function(){
 mouse_X=event.clientX;
 mouse_Y=event.clientY;
    $('.cursor-base').css({top:mouse_Y,left:mouse_X})
})