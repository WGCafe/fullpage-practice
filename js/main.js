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
});

(function() {
  window.onload = function () {
    $('.loading').addClass('hidden');
  };

  $('.s2__bg-circle').css('background-image', 'url(./images/circle-3-4-5.gif)');
})()