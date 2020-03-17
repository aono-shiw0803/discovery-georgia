
// navbarボタン
$(function(){
  $('#navbar').click(function(){
    $('.header-menu li').slideToggle(500);
  });
});


// main-titleのフェードイン（静止）
$(function(){
  $('.main-image-text').fadeIn(4000);
});


// スムーススクロール
$(function(){
  $('a[href*=#]:not([href=#])').click(function(){
    let target = $($(this).attr('href')).offset().top;
    target -= 40;
    $('html , body').animate({scrollTop:target},1000);
    return false;
  });
});


// フェードイン機能
$(function(){
  $(window).scroll(function (){
     $('.about-site, .what-georgia-text, .what-georgia-title h1, .what-georgia-title p, .what-georgia-data table, .what-georgia-data h2, .attraction-title h1, .attraction-title p, .attraction-point-1, .attraction-point-2, .attraction-point-3, .city-title h1, .city-title p, .tbilisi, .mtskheta, .stepantsminda, .photos-title h1, .photos-title p, button, .photos-images li, .contact-form').each(function(){
         let dummy = $(this).offset().top,
             scroll = $(window).scrollTop(),
             windowHeight = $(window).height();
           if(scroll > dummy - windowHeight + 100){
               $(this).addClass('scroll');
             }
         });
     });
});


// mapの○を点滅させる
$(function(){
  setTimeout('anime()');
});
function anime(){
  $('.what-georgia-map i')
    .animate({ 'opacity' : '1' }, 1000)
    .animate({ 'opacity' : '0' }, 1000);
  setTimeout('anime()', 1000);
}


// フィルタリング機能
$(function(){
  $("button").click(function(){
    let target = $(this).attr("value");
    $(".photos-images li").each(function(){
      $(this).animate({"opacity" : 0}, 500, function(){
        $(this).hide();
        if($(this).hasClass(target) || target == "all"){
          $(this).show().animate({"opacity" : 1}, 1000);
        }
      });
    });
  });
});
