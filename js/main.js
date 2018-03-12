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
})()