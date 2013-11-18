var Flags = {
	populateAllCountries: function() {

	},
	resetAllCountries: function() {

	},

	showMoreCountries: function() {
		$.getScript($('#paginator .pagination .next').attr('href'));
	},

	infiniteScroll: function() {
    var win = $(window);
    if($(window).scrollTop() > $(document).height() - $(window).height()) {
      Flags.showMoreCountries();
    }
  }
};

$(document).ready(function() {
	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
});