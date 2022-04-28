$(function () {
  //홈 화면 스크롤 이벤트

  var _home = $("#home");
  var _homeTop = _home.offset().top;
  var _aboutTop = $("#about").offset().top;
  // home_mouse click
  $('#home .scroll').click(function () {
    $('html, body').animate({ scrollTop: _aboutTop }, 600)
  })

  //GNB
  $('#gnb li').click(function () {
    let n = $(this).index()
    $('html, body').animate({
      scrollTop: $('section').eq(n).offset().top
    })
  })

  //GNB 스타일 변경
  // if ($(window).scrollTop() >= $('#about').offset().top) {
  //   $('header').addClass('bg_on')

  // }
  // if ($(window).scrollTop() < $('#about').offset().top) {
  //   $('header').removeClass('bg_on')

  // }     
  $(window).scroll(function () {
    if ($(window).scrollTop() >= $('#about').offset().top) {
      $('header').addClass('bg_on');
    }
    if ($(window).scrollTop() < $('#about').offset().top) {
      $('header').removeClass('bg_on')
    }
  })

  //Web Work
  const swiper = new Swiper('.web_swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'cards',
    // If we need pagination
    pagination: {
      el: '.web_pagination',
      type: 'fraction',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.web_next',
      prevEl: '.web_prev',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.web_scrollbar',
    },
  });

  //Graphic Tabs
  $('#work2 .tabs li').click(function () {
    $(this).addClass('on')
    $('#work2 .tabs li').not(this).removeClass('on');

    let gname = $(this).attr('class').substr(0, 2);
  });
  $('#work2 .work_thumb li').hover(function () {
    $(this).find('span').fadeIn();
  }, function () {
    $(this).find('span').fadeOut()
  })
  let graphic = $('.work_thumb').isotope()

  $('#work2 .tabs li').click(function () {
    let val = $(this).attr('data-filter');
    graphic.isotope({
      filter: val
    })
  })

  lightbox.option({
    fitImagesInViewport: false,
    positionFromTop: 100
  })

  $(window).on('scroll', function () {
    console.log('_aboutTop', _aboutTop)
    console.log('windowTop', $(window).scrollTop())
    console.log("조건", $(window).scrollTop() == _aboutTop)
    if ($(window).scrollTop() == 1000) {
      draw(70, '.psd', '#ddd');
      draw(70, '.ai', '#ddd');
      draw(90, '.html', '#ddd');
      draw(90, '.css', '#ddd');
      draw(50, '.js', '#ddd');
      draw(70, '.jq', '#ddd');
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
          "background": "conic-gradient(" + colorname + " 0% " + i + "%, #000 " + i + "% 100%)"
        });
      }
    }
  })


  // skill
  // $(window).ready(function () {
  //   draw(70, '.psd', '#ddd');
  //   draw(70, '.ai', '#ddd');
  //   draw(90, '.html', '#ddd');
  //   draw(90, '.css', '#ddd');
  //   draw(50, '.js', '#ddd');
  //   draw(70, '.jq', '#ddd');
  // });

  // function draw(max, classname, colorname) {
  //   var i = 1;
  //   var func1 = setInterval(function () {
  //     if (i < max) {
  //       color1(i, classname, colorname);
  //       i++;
  //     } else {
  //       clearInterval(func1);
  //     }
  //   }, 10);
  // }
  // function color1(i, classname, colorname) {
  //   $(classname).css({
  //     "background": "conic-gradient(" + colorname + " 0% " + i + "%, #000 " + i + "% 100%)"
  //   });
  // }

})//ready()
