var Flags = {
	populateAllCountries: function(event) {
		event.preventDefault();
		$.ajax({
			url: '/countries',
			type: 'GET',
			dataType: 'json',
		}).done(function(data){
			Flags.renderCountries(data);
		}).fail();
	},
	resetAllCountries: function(event) {

	},
	showMoreCountries: function(event) {

	},
	infiniteScroll: function(event) {

	}
};

$(document).ready(function() {
	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);

	// Cache the element anchor for countries list
	Flags.countriesEl = $('.countries_list');
});


// Render functions
Flags.renderCountries = function (countries) {
	var length = countries.length, i = 0; // Need to amend length to 10

	for (; i < length; ) {
		Flags.renderCountry(countries[i]);
		i = i + 1;
	}
};

Flags.renderCountry = function (country) {
	var htmlString = "", countryEl;
	countryEl = $('<div>', { class: 'f32' });
	countryEl.append($('<div>', { class: country.abbreviation + " flag" }));
	// Add visual offset if North American
	if ( country.north_america ) {
		countryEl.addClass('north-american');
	}

	countryEl.append($('<p>', {html: country.name }));

	Flags.countriesEl.append(countryEl);
};
