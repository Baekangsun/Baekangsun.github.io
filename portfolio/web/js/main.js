$(function() {
  //홈 화면 스크롤 이벤트

  var _home = $("#home");
  var _homeTop = _home.offset().top;
  var _aboutTop = $("#about").offset().top;
  // home_mouse click
  $('#home .scroll').click(function() {
    $('html, body').animate({scrollTop : _aboutTop}, 600)
  })

  //GNB
  $('#gnb li').click(function() {
    let n = $(this).index()
    $('html, body').animate({
      scrollTop : $('section').eq(n).offset().top
    })
  })

  //GNB 스타일 변경
  if($(window).scrollTop() >= $('#about').offset().top) {
    $('header').addClass('bg_on')
  }
  if($(window).scrollTop() < $('#about').offset().top) {
    $('header').removeClass('bg_on')
  }
  $(window).scroll(function() {
    if($(window).scrollTop() >= $('#about').offset().top) {
      $('header').addClass('bg_on')
    }
    if($(window).scrollTop() < $('#about').offset().top) {
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
  $('#work2 .tabs li').click(function() {
    $(this).addClass('on')
    $('#work2 .tabs li').not(this).removeClass('on');
    
    let gname = $(this).attr('class').substr(0,2);
  });
  $('#work2 .work_thumb li').hover(function() {
    $(this).find('span').fadeIn();
  }, function() {
    $(this).find('span').fadeOut()
  })
  let graphic = $('.work_thumb').isotope()

  $('#work2 .tabs li').click(function() {
    let val = $(this).attr('data-filter');
    graphic.isotope({
      filter : val
    })
  })

  lightbox.option({
    fitImagesInViewport : false,
    positionFromTop : 100
  })


  
  $('#about .skill li.psd').circleProgress({
    value: 0.7,
    size: 100,
    fill: { color: 'rgba(200, 200, 200, 1)' },
    emptyFill: "0,0,0,1"
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(stepValue.toFixed(2).substr(1));
  });
  $('#about .skill li.ai').circleProgress({
    value: 0.7,
    size: 100,
    fill: { color: 'rgba(200, 200, 200, 1)' },
    emptyFill: "0,0,0,1"
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(stepValue.toFixed(2).substr(1));
  });
  $('#about .skill li.html').circleProgress({
    value: 0.9,
    size: 100,
    fill: { color: 'rgba(200, 200, 200, 1)' },
    emptyFill: "0,0,0,1"
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(stepValue.toFixed(2).substr(1));
  });
  $('#about .skill li.css').circleProgress({
    value: 0.9,
    size: 100,
    fill: { color: 'rgba(200, 200, 200, 1)' },
    emptyFill: "0,0,0,1"
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(stepValue.toFixed(2).substr(1));
  });
  $('#about .skill li.js').circleProgress({
    value: 0.5,
    size: 100,
    fill: { color: 'rgba(200, 200, 200, 1)' },
    emptyFill: "0,0,0,1"
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(stepValue.toFixed(2).substr(1));
  });
  $('#about .skill li.jq').circleProgress({
    value: 0.7,
    size: 100,
    fill: { color: 'rgba(200, 200, 200, 1)' },
    emptyFill: "0,0,0,1"
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(stepValue.toFixed(2).substr(1));
  });

})//ready()
