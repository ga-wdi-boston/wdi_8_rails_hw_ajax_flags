var Flags = {
	populateAllCountries: function(event) {
		event.preventDefault();
		$.ajax({
			url: '/countries',
			type: 'GET',
			dataType: 'json',
		}).done(function(data){
			Flags.renderAllCountries(data);
		}).fail();

		return false;
	},
	resetAllCountries: function(event) {
		event.preventDefault();
		Flags.countriesEl.empty();

		// Change this to infiniteScroll
		Flags.populateAllCountries(event);

		return false;
	},
	showMoreCountries: function(event) {
		event.preventDefault();
		$.ajax({
			url: '/countries',
			type: 'GET',
			dataType: 'json',
		}).done(function(data){
			Flags.renderTenCountries(data);
		}).fail();

		return false;
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

	// This keeps track of what ten countries to load
	Flags.loadCount = 1;
});


// Render functions
Flags.renderAllCountries = function (countries) {
	var length = countries.length, i = 0;

	for (; i < length; ) {
		Flags.renderCountry(countries[i]);
		i = i + 1;
	}
};

Flags.renderTenCountries = function (countries) {
	var length = 10 * Flags.loadCount, i = 10 * (Flags.loadCount - 1);

	for (; i < length; ) {
		Flags.renderCountry(countries[i]);
		i = i + 1;
	}

	Flags.loadCount = Flags.loadCount + 1;
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
