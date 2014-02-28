var Flags = {
	populateAllCountries: function(countries) {
		var num_countries = countries.length,
			i = 0;

		for (; i < num_countries; i++) {
			Flags.num_rendered_countries += 1;
			this.populateCountry(countries[i]);
		}
	},
	populateCountry: function(country) {
		var $countries_list = $('#country-list'),
			$country_div = $('<div id="country_' + country.id +'" class="f32">'),
			$country_flag = $('<div class="flag ' + country.abbreviation + '">'),
			$country_info = $('<p>', { id: 'country_' + country.id, class: 'country_text', html: country.name + ' (' + country.abbreviation + ')'});

		if (country.north_america) {
			$country_div.addClass('north_america');
		}

		$country_div.append($country_flag, $country_info);
		$countries_list.append($country_div);
	},
	resetAllCountries: function() {
		var $countries_list = $('#country-list');

		$countries_list.text("");
	},
	showMoreCountries: function(start, limit) {
		$.ajax({
			url: '/countries',
			type: 'GET',
			dataType: 'json',
			data: {offset: start, limit: limit}

		})
		.done(function(data) {

			Flags.populateAllCountries(data);
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function(data) {
			debugger;
			console.log("complete");
		});

	},
	infiniteScroll: function() {
    var win = $(window);
    // Infinite scroll math!
    if(win.height() + win.scrollTop() >= $(document).height()) {
      Flags.showMoreCountries(Flags.num_rendered_countries, 20);
    }

	}
};

$(document).ready(function() {
	Flags.num_rendered_countries = 0;

	$('#populate-all-button').click(function(event) {
		event.preventDefault();
		Flags.getAllCountries();
		return false;
	});

	$('#reset-button').click(function(event) {
		Flags.resetAllCountries();
	});

	$('#show-more-countries-button').click(function(event) {
		event.preventDefault();
		Flags.showMoreCountries(Flags.num_rendered_countries, 20);
		return false;
	});
	$(window).scroll(Flags.infiniteScroll);
});

Flags.getAllCountries = function() {
	$.ajax({
			url: '/countries',
			type: 'GET',
			dataType: 'json'
		})
		.done(function(data) {
			var countries = data;
			Flags.populateAllCountries(data);
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
}
