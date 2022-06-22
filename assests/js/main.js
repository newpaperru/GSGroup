//функция скролла вверх при обновлении страницы
$(function() {
$('html, body').animate({
  scrollTop: 0
}, 1);
});
  
// анимация соц сетей
var plus = document.getElementById('plus');
function plusToggle() {
plus.classList.toggle('plus--active');
}
  
plus.addEventListener('click', plusToggle);

// анимация при скролле настройки:
var skroll = new Skroll()
.add(".anim1",{
        animation:"fadeInUp",
        delay:500,
        duration:600,
        wait:250
})
.add(".anim2",{
        animation:"flipInX",
        delay: 600,
        duration: 1000
})
.add(".anim3",{
        animation:"rotateLeftIn",
        delay:100,
        duration:750
})
.add(".anim4",{
        animation:"slideInLeft",
        delay:600,
        duration: 1000
})
.add(".anim12",{
  animation:"slideInLeft",
  delay:400,
  duration: 300,
  triggerBottom:1
})
.add(".anim10",{
    animation:"slideInRight",
    delay:600,
    duration: 1000,
    triggerBottom:0
})
.add(".anim11",{
  animation:"slideInRight",
  delay:200,
  duration: 300,
  triggerBottom:0
})
.add(".anim5",{
        animation:"growInLeft",
        delay:80,
        duration:500,
        easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)"
})
.add(".anim6",{
        animation:"growInRight",
        delay:80,
        duration:500,
        easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)",
})
.addAnimation("spinIn",{
        start:function(el){
          el.style["transform"] = "rotate(-360deg) scale(.2,.2)";
          el.style["transform-origin"] ="50% 50%";
          el.style["opacity"] = 0;
   },
   end:function(el){
       el.style["transform"] = "rotate(0deg) scale(1,1)";
       el.style["opacity"] = 1;
   }
})
.add(".anim7",{
        animation:"spinIn",
        delay:500,
        duration:500,
        easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)"
})
.add(".anim8",{
        animation:"fadeInDown",
        delay:500,
        duration:1000,
        triggerBottom:0,
        easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)"
})
.add(".anim13",{
  animation:"fadeInDown",
  delay:800,
  duration:300,
  triggerBottom:1,
  easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)"
})
.add(".anim9",{
        animation:"fadeInDown",
        delay:300,
        duration:800,
        triggerBottom:0,
        easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)",
        triggerBottom:0
})
.init();
