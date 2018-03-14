$(document).ready(function() {
  $('#fullpage').fullpage({
    navigation: true,
    navigationColor: '#fff',
    showActiveTooltip: true,
    navigationTooltips: ['Home page']
  });
});

(function() {
  window.onload = function () {
    $('.loading').addClass('hidden');
  };

  $('.s2__bg-circle').css('background-image', 'url(./images/circle-3-4-5.gif)');
})()