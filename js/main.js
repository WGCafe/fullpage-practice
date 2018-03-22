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

  // var type = navigator.appName;
  // var lang = 'en';

  // if (type === "Netscape") {
  //   lang = navigator.language
  // } else {
  //   lang = navigator.userLanguage
  // }

  // lang = lang.substr(0, 2);

  // if (lang === "en"){
  //   window.location.href="http://www.populstay.com/index.html"
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

    $('iframe').attr('src', 'https://www.youtube.com/embed/lrWl11R2ar8');
    $('.s2__bg-circle').css('background-image', 'url(./images/circle-3-4-5.gif)');
  };
  // $('.video__mp4').attr('src', './images/');
  // $('.video__webm').attr('src', './images/');


  // FORM VALIDATION
  $("#subscribeSubmit").on('click', function() {

    //email (check if entered anything)
    var email = $("input#subscribeEmail").val();
    var email_base = 'Provide Valid E-mail';
    //email (check if entered anything)

    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    }

    if (email === "") {
        $("input#subscribeEmail").focus();
        $('input#subscribeEmail').attr('placeholder', email_base);
        $('input#subscribeEmail').addClass('error-msg');
        return false;
    } else if (email !== "") { // If something was entered
        if (!isValidEmailAddress(email)) {
            $("input#subscribeEmail").focus();
            $('input#subscribeEmail').val('');
            $('input#subscribeEmail').attr('placeholder', email_base);
            $('input#subscribeEmail').addClass('error-msg');
            return false;
        }
    } else {
      return true;
    }
  });

  $('#subscribeSubmit').on('click', function() {
    console.log($('input[name="receiver"]').val());

    $.ajax({
      type: $("#subscribeform").attr('method'),
      url: $("#subscribeform").attr('action'),
      data: {
        receiver: $('input[name="receiver"]').val(),
        subject: $('input[name="subject"]').val(),
        email: $('input#subscribeEmail').val()
      },
      success: function(data) {
        if (data == 'success') {
          $('#subscribeform').each(function() {
              this.reset();
          });

          $('#subscribeEmail').attr('placeholder', $('#subscribeEmail').data('placeholder'));
          $('#subscribeEmail').removeClass('error-msg');

          $('.subscribe-result').html('Send email!');
          $('.subscribe-result').css('color', 'white');
        } else {
          $('.subscribe-result').html('Server error!');
          $('.subscribe-result').css('color', 'red');
        }
      }
    });
    return false;
  });
})()