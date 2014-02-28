var Flags = {
	populateAllCountries: function(event) {
		event.preventDefault();

		Flags.countriesEl.empty();
		// Set this to a high number so no more countries to render
		Flags.loadCount = 1000;

		Flags.ajaxHelper(Flags.renderAllCountries);
		return false;
	},
	resetAllCountries: function(event) {
		event.preventDefault();
		Flags.countriesEl.empty();
		Flags.loadCount = 1;

		return false;
	},
	showMoreCountries: function(event) {
		event.preventDefault();

		Flags.ajaxHelper(Flags.renderTenCountries);
		return false;
	},
	infiniteScroll: function(event) {

		Flags.scrollRender();
		return false;
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
	var length = 20 * Flags.loadCount, i = 20 * (Flags.loadCount - 1);

	for (; i < length; ) {
		if ( !countries[i] ) {
			return false;
		}
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

	countryEl.append($('<p>', {html: "Name: " + country.name + " Abbreviation: " + country.abbreviation }));

	Flags.countriesEl.append(countryEl);
};

// Helper functions
Flags.ajaxHelper = function(renderFunction) {
	$.ajax({
		url: '/countries',
		type: 'GET',
		dataType: 'json',
	}).done(function(data){
		renderFunction(data);
	}).fail();
};

Flags.scrollRender = function () {
	var win = $(window);

	if ( win.height() + win.scrollTop() >= $(document).height() ) {
		Flags.ajaxHelper(Flags.renderTenCountries);
	}
}
