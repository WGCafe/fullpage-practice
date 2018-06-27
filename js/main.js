window.onload = function () {
  $('.loading').addClass('hidden');
};

$(function() {
  function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
  }

  $('#subscribeSubmit').on("click", function() {
    var inputValue = $('#subscribeEmail').val();

    $('.subscribe__email-validate-error').remove();

    if (inputValue == '') {
      $('#subscribeEmail').focus();
      $('#subscribeEmail').after('<span class="subscribe__email-validate-error">Mailbox is empty, please enter! </span>');
    } else if (!isValidEmailAddress(inputValue)) {
      $('#subscribeEmail').focus();
      $('#subscribeEmail').after('<span class="subscribe__email-validate-error">Mailbox format error, please re-enter! </span>');
    }
  });
});