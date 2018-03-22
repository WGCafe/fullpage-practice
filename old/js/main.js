$(document).ready(function() {
  $('#fullpage').fullpage({
    navigation: true,
    navigationColor: '#fff',
    showActiveTooltip: true,
    loopBottom: true,
    navigationTooltips: ['Home page']
  });

  $('#fullpage').on('click', function(){
    $.fn.fullpage.moveSectionDown();
  });

  $('#fullpage a, button, input, textarea').on('click', function(e) {
    e.stopPropagation();
  });

  $('.social__wechat').on('click', function(){
    $('#wechatmodal').modal();
  });

  $('.s5__video').on('click', function(){
    $('#videomodal').modal();
  });

  var type = navigator.appName;
  var lang = 'en';

  if (type === "Netscape") {
    lang = navigator.language
  } else {
    lang = navigator.userLanguage
  }

  lang = lang.substr(0, 2);

  // if (lang === "en"){
  //   window.location.href="http://www.populstay.com/"
  // } else if (lang === "zh"){
  //   window.location.href="http://www.populstay.com/zh.html"
  // }

  // $('#videomodal').on($.modal.OPEN, function() {
  //   var productVideo = document.getElementById('product-video');

  //   setTimeout(() => {
  //     productVideo.loop;
  //     productVideo.play();
  //   }, 700);
  // });

  // $('#videomodal').on($.modal.AFTER_CLOSE, function() {
  //   var productVideo = document.getElementById('product-video');

  //   productVideo.pause();
  //   productVideo.currentTime = 0;
  // });

});

(function() {
  window.onload = function () {
    $('.loading').addClass('hidden');
  };

  $('.s2__bg-circle').css('background-image', 'url(./images/circle-3-4-5.gif)');
  $('.video__mp4').attr('src', './images/flowers.mp4');
  $('.video__webm').attr('src', './images/flowers.webm');
})()