var Flags = {
	populateAllCountries: function() {
		$.ajax({
				url: '/countries',
				type: 'GET',
				dataType: 'json'
			})
			.done(function(data) {
				Flags.renderCountries(data);
				console.log('all completed')
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("flags complete");
			});
	},
	resetAllCountries: function() {
		$('#all-countries').empty()
	},
	showMoreCountries: function(start, limit) {
		$.ajax({
			url: '/countries',
			type: 'GET',
			dataType: 'json',
			data: {offset: start, limit: limit}

		})
		.done(function(data) {
			Flags.renderCountries(data);
		})
	},
	infiniteScroll: function() {
		//Flags.showMoreCountries(Flags.shown_countries, 20);
	}
};

$(document).ready(function() {
	Flags.shown_countries = 0;

	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	//$('#show-more-countries-button').click(Flags.showMoreCountries(Flags.shown_countries, 20));
	$(window).scroll(Flags.infiniteScroll);

	$('#show-more-countries-button').click(function(event) {
	 	event.preventDefault();
	 	Flags.showMoreCountries(Flags.shown_countries, 20);
	 	return false;
	});
});


Flags.renderCountries = function(countries) {
	var numFlags = countries.length;
	for (var i = 0; i < numFlags; i++) {
		Flags.renderCountry(countries[i]);
		Flags.shown_countries += 1;
	};
};

Flags.renderCountry = function(country) {
	var $all_countries = $('#all-countries'),
	 		$country_div = $('<div id="country_' + country.id +'" class="f32">'),
	 		$country_flag = $('<div class="flag ' + country.abbreviation + '">'),
	 		$country_info = $('<div>', { id: 'country_' + country.id, class: 'country', html: country.name + ' (' + country.abbreviation + ')'});

	 		$country_div.append($country_flag, $country_info);
	 		$all_countries.append($country_div);
}


