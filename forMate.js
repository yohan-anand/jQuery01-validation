(function ( $ ) {
  $.fn.validateForm = function() {
    $('input').each( function(e){
      if($(this).val()===''){
        $(this).addClass('my-warning');
        $(this).removeClass('my-danger');
        $(this).parent().find('.error').remove();
        $(this).parent().append('<p class="error">Error - Empty field<p>');
      } else {
        if($(this).attr('type')=='password'){
          if(!isValidPassword($(this).val())){
            $(this).removeClass('my-warning');
            $(this).addClass('my-danger');
            $(this).parent().find('.error').remove();
            $(this).parent().append('<p class="error">Error - Invalid Password<p>');
          } else {
            $(this).removeClass('my-warning');
            $(this).removeClass('my-danger');
            $(this).parent().find('.error').remove();
          }
        }
        if($(this).attr('type')=='email'){
          if(!isValidEmail($(this).val())){
            $(this).removeClass('my-warning');
            $(this).addClass('my-danger');
            $(this).parent().find('.error').remove();
            $(this).parent().append('<p class="error">Error - Invalid '+ $(this).attr('type') +'<p>');
          } else {
            $(this).removeClass('my-warning');
            $(this).removeClass('my-danger');
            $(this).parent().find('.error').remove();
          }
        }
      }
    });
  }
})(jQuery);


function isValidEmail(emailText){
  var emailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(emailText);
}


function isValidPassword(passText){
  var passRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  return passRegex.test(passText);
}
