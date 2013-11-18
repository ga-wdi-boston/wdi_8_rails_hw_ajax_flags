var Flags = {
	populateAllCountries: function() {
		$.getScript($('#paginator .pagination .next').attr('href'));
	},
	resetAllCountries: function() {

	},
	showMoreCountries: function() {

	},
	infiniteScroll: function() {
    var win = $(window);
    // Infinite scroll math!
    if(win.height() + win.scrollTop() >= $(document).height()) {
      populateCountries();
    }
  }
};

$(document).ready(function() {
	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
});