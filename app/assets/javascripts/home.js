var Flags = {
  loading: false,

	infiniteScroll: function() {
    if($('#list li').length < 272) {
      var win = $(window);
      if(win.height() + win.scrollTop() >= $(document).height()) {
        Flags.populateCountries();
      }
    }
  },
  populateCountries: function() {
    if (Flags.loading === false) {
      Flags.loading = true;
      $.ajax({
        url: '/load',
        data: { offset: $('#list li').length, limit: 20 }
      });
    }
    Flags.loading = false;
  },
  clear: function() {
    $('#list').html('');
  },
  load_all: function() {
    $.ajax({
      url: '/load',
      data: { offset: $('#list li').length, limit: 255 }
    });
  }
};

$(document).ready(function() {
  $('#load_all').click(Flags.load_all);
  $('#clear').click(Flags.clear);
  $('#load_20').click(Flags.populateCountries);
  $(window).scroll(Flags.infiniteScroll);
});
