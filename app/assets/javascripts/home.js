$(document).ready(function() {
	$('#load_all').click(Flags.load_all);
	$('#clear').click(Flags.clear);
	$('#load_20').click(Flags.populateCountries);
	$(window).scroll(Flags.infiniteScroll);
});

var Flags = {
	infiniteScroll: function() {
    var win = $(window);
    if(win.height() + win.scrollTop() >= $(document).height()) {
      Flags.populateCountries();
    }
  },
  populateCountries: function() {
    $.ajax({
      url: '/load',
      data: { offset: $('#list li').length, limit: 20 }
    });
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