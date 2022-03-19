$(function() {
  // pc_srech
  $('.search_wrap .search_btn').click(function() {
    $('.search_wrap .search_box').after().show()
  })
  $('.search_wrap .search_close_btn').click(function() {
    $('.search_wrap .search_box').hide()
  })

  // pc_allmenu
  $('.all_open_btn').click(function() {
    $('.allmenu_box').show()
    $('.allmenu_wrap').addClass('allmenu_bg')
  })
  $('.allmenu_box .all_close_btn').click(function() {
    $('.allmenu_box').hide()
    $('.allmenu_wrap').removeClass('allmenu_bg')
  })

  // pc_gnb_bg
  $('.g1').hover(function() {
    $('header').addClass('gnb_bg')
    $('.g2').show()
    $('.search_wrap .search_box').hide()
  }, function() {
    $('header').removeClass('gnb_bg')
    $('.g2').hide()
  })

  
// pc-visual_wrap_swiper
  $('.visual_box ul').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  })

  


// pc-product_wrap_swiper
const swiper = new Swiper('.product_wrap .content', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 10,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.mo_prod_next',
    prevEl: '.mo_prod_prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.prod_slider',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});


  // pc-mian_event_wrap slick
  $('.event_wrap ul').slick({
    autoplay: true,
    // autoSpeed : 5000,
    slidesToShow : 3,
    prevArrow : $('.event_wrap .event_btn .event_prve'),
    nextArrow : $('.event_wrap .event_btn .event_next'),
    zIndex : 100,
    dots : true,
    centerMode : true,
    centerPadding : 0,
    responsive : [
      {
        breakpoint : 1200,
        settings : {
          slidesToShow : 2
        }
      },
      {
        breakpoint :721,
        settings : {
          slidesToShow : 1,
          dots : false,
          centerMode : false
        }
      }
    ]
  });

  // mob allmenu
  $('.allmenu_box .a1').first().css({'margin-top' : '90px'})
  $('.allmenu_box .a1>li').has('ul').addClass('dep1');
  $('.allmenu_box .a2>li').has('ul').addClass('dep2');

   // mob allmenu click
  $('.allmenu_wrap .allmenu_box .a1>li>a').click(function() {
    $(this).next().slideToggle();
    $(this).parent('li').siblings().children('.a2').slideUp()
    // $('.allmenu_box .a2>li>a').children().show();
    // $('.allmenu_box .dep1>a').css({'transform' : 'rotate(45deg)'}) +표시 회전
  })

  // mob-quickmenu_slick
  $('.quickmenu_wrap ul').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: false,
    responsive : [
      {
        breakpoint : 1200,
        settings : {
          slidesToShow : 4
        }
      },
      {
        breakpoint :721,
        settings : {
          slidesToShow : 2
        }
      }
    ]
  })
//window.alert($('.familysite_wrap ul').outerHeight(true))
  // footer 패밀리 사이트 모르겠음
  $('.fam_btn button').click(function() {
    //$('.familysite_wrap ul').animate({'height' : '248px'})
    $('.familysite_wrap ul').slideToggle(500)
    $(this).toggleClass('on')
    $('.familysite_wrap .fam_btn button span').css({'transform' : 'rotate(-90deg)'})
  })
  // $('.fam_btn button').click(function() {
  //   $('.familysite_wrap ul').slideToggle()
  //   if($('.familysite_wrap ul').slideDown()) {
  //     $('.fam_btn button').css({'border-radius' : '36px'})
  //   }
  //   else {$('.fam_btn button').css({'border-radius' : 'none'})}
  // //   $(this).css({'border-radius' : '0'})
  // //   $('.familysite_wrap ul').slideDown()
  // })
}) //ready()