///////////////////////////////////////// gnb
$('header .gnb .gnb_btn').click(function () {
  $(this).addClass('underline')
  $(this).siblings().removeClass('underline')
  if ($(".aboutme_btn").hasClass('underline') === true) {
    $(".about_me").addClass("on");
  } else {
    $(".about_me").removeClass("on");
  }
})


///////////////////////////////////////// work_swiper
var swiper = new Swiper('.work .swiper', {
  slidesPerView: "auto",
  spaceBetween: 40,
  mousewheel: true,
  loop: true,
  pagination: {
    el: ".navigation .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.navigation .swiper-button-next',
    prevEl: '.navigation .swiper-button-prev',
  },
});
$('.work').width();


///////////////////////////////////////// skill
draw(70, '.psd', '#98fb98');
draw(70, '.ai', '#98fb98');
draw(90, '.html', '#98fb98');
draw(90, '.css', '#98fb98');
draw(50, '.js', '#98fb98');
draw(70, '.jq', '#98fb98');


function draw(max, classname, colorname) {
  var i = 1;
  var func1 = setInterval(function () {
    if (i < max) {
      color1(i, classname, colorname);
      i++;
    } else {
      clearInterval(func1);
    }
  }, 10);
}
function color1(i, classname, colorname) {
  $(classname).css({
    "background": "conic-gradient(" + colorname + " 0% " + i + "%, #efefef " + i + "% 100%)"
  });
}