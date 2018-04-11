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
  function checkSubscribe() {
    //email (check if entered anything)
    var email = $('input#subscribeEmail').val();
    var email_base = 'Provide Valid E-mail';
    //email (check if entered anything)

    function isValidEmailAddress(emailAddress) {
      var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
      return pattern.test(emailAddress);
    }

    if (!email || email === '') {
        $('input#subscribeEmail').focus();
        $('input#subscribeEmail').attr('placeholder', email_base);
        $('input#subscribeEmail').addClass('error-msg');
        return false;
    } else if (email !== '') { // If something was entered
        if (!isValidEmailAddress(email)) {
            $('input#subscribeEmail').focus();
            $('input#subscribeEmail').val('');
            $('input#subscribeEmail').attr('placeholder', email_base);
            $('input#subscribeEmail').addClass('error-msg');
            return false;
        }

        return true;
    } else {
      return true;
    }
  }

  function checkContact() {
    //name
    var name = $('input#contactName').val();
    var name_base = 'Provide Valid Name';

    //email (check if entered anything)
    var email = $('input#contactEmail').val();
    var email_base = 'Provide Valid E-mail';
    //email (check if entered anything)

    // title
    var title = $('input#contactTitle').val();
    var title_base = 'Title must not be empty';

    // comments
    var comments = $('textarea#contactMessage').val();
    var comments_base = 'Message must not be empty';

    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    }

    if (!name || name === '') {
      $('input#contactName').focus();
      $('input#contactName').attr('placeholder', name_base);
      $('input#contactName').addClass('error-msg');
      return false;
    } else if (!email || email === '') {
        $('input#contactEmail').focus();
        $('input#contactEmail').attr('placeholder', email_base);
        $('input#contactEmail').addClass('error-msg');
        return false;
    } else if (email !== '') { // If something was entered
        if (!isValidEmailAddress(email)) {
            $('input#contactEmail').focus();
            $('input#contactEmail').val('');
            $('input#contactEmail').attr('placeholder', email_base);
            $('input#contactEmail').addClass('error-msg');
            return false;
        }
    }

    if (!comments || comments === '') {
      $('textarea#contactMessage').focus();
      $('textarea#contactMessage').attr('placeholder', comments_base);
      $('textarea#contactMessage').addClass('error-msg');
      return false;
    }

    if (!title || title === '') {
      $('input#contactTitle').focus();
      $('input#contactTitle').attr('placeholder', title_base);
      $('input#contactTitle').addClass('error-msg');
      return false;
    } else {
      return true;
    }
  }

  $('#subscribeSubmit').on('click', function(e) {
    if(!checkSubscribe()) {
      e.preventDefault();
      e.returnValue = false;

      return false;
    }

    $('#subscribeModal').modal();

    $.ajax({
      type: 'post',
      url: 'http://www.populstay.com/populstay/subscribe',
      dataType: 'json',
      crossDomain: true,
      contentType: 'application/json; charset=utf-8',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      data: JSON.stringify({
        email: $('input#subscribeEmail').val()
      }),
      success: function(data) {
        if (data.status === 'success') {
          $('#subscribeform').each(function() {
              this.reset();
          });

          $('#subscribeEmail').attr('placeholder', $('#subscribeEmail').data('placeholder'));
          $('#subscribeEmail').removeClass('error-msg');

          $('.subscribe-modal').addClass('success');
        } else {
          $('.subscribe-modal').addClass('error');
        }
      }
    });
    return false;
  });

  $('#contactSubmit').on('click', function(e) {
    if(!checkContact()) {
      e.preventDefault();
      e.returnValue = false;

      return false;
    }

    $('#contactModal').modal();

    $.ajax({
      type: 'post',
      url: 'http://www.populstay.com/populstay/contactUs',
      dataType: 'json',
      crossDomain: true,
      contentType: 'application/json; charset=utf-8',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      data: JSON.stringify({
        name: $('input#contactName').val(),
        title: $('input#contactTitle').val(),
        email: $('input#contactEmail').val(),
        message: $('textarea#contactMessage').val()
      }),
      success: function(data) {
        if (data.status === 'success') {
          $('#contactName').attr('placeholder', $('#contactName').data('placeholder'));
          $('#contactTitle').attr('placeholder', $('#contactTitle').data('placeholder'));
          $('#contactEmail').attr('placeholder', $('#contactEmail').data('placeholder'));
          $('#contactMessage').attr('placeholder', $('#contactMessage').data('placeholder'));
          $('#contactEmail, #contactName, #contactTitle, #contactMessage').removeClass('error-msg');

          $('.contact-modal').addClass('success');
        } else {
          $('.contact-modal').addClass('error');
        }
      }
    });
    return false;
  });
})()