

jQuery.fn.submitOnClick = function () {
  this.find('input[type=submit]').remove();
  this.find('input[type=button]').click(function () {
    $(this).parent('form').submit();
  });  
  return this;
};