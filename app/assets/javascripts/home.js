var Flags = {
	populateAllCountries: function() {
		$.ajax({
			url: '/countries',
			dataType: 'json',
			success: function(data) {
				Flags.showFlags(data);
			}
		});
	},

	resetAllCountries: function() {
		$('#flags').empty();
	},

	showMoreCountries: function() {
		$.ajax({
			url:
			dataType: 'json',
			success: function(data) {
				Flags.showFlags(data);
			}
		})
	},
	infiniteScroll: function() {
		    var win = $(window);
    // Infinite scroll math!
    if(win.height() + win.scrollTop() >= $(document).height()) {
      populateCountries();
    }
	},

	showFlags: function(data) {
		var country;
	    for (var i = 0; i < data.length ;  i ++) {
		}
	  country = data[i];
	  $('<div class="country" id=' + country.id + '>' + '<div class="country-name" id="' + country.id + '">' + country.name + '</div>' +
	  '<div class="flag ' + country.abbreviation + '"></div>' +
	  '</div>').appendTo('#flags');
	}
};

$(document).ready(function() {
	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
});