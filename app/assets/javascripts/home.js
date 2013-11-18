// var Flags = {
// 	populateAllCountries: function() {

// 	},
// 	resetAllCountries: function() {

// 	},
// 	showMoreCountries: function() {

// 	},
// 	infiniteScroll: function() {

// 	}
// };

$(document).ready(function() {
	// $('#populate-all-button').click(Flags.populateAllCountries);
	// $('#reset-button').click(Flags.resetAllCountries);
	// $('#show-more-countries-button').click(Flags.showMoreCountries);
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
      data: { offset: $('#list li').length }
    });
  }
};