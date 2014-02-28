var Flags = {
	populateAllCountries: function(showAll) {
		$countriesDiv = $('#countries');
		$.ajax({
			url: '/countries',
			type: 'GET',
			dataType: 'json'
		})
		.done(function(data) {
			console.log("the countries...");
			Flags.renderAllCountries(data, showAll);
		})
		.fail(function() {
			console.log("error");
		})
	},

	resetAllCountries: function() {
		Flags.emptyCountries();
		Flags.populateAllCountries();
	},

	showMoreCountries: function() {
		Flags.renderAllCountries();
	},

	infiniteScroll: function() {
	  var win = $(window);
	  if(win.height() + win.scrollTop() >= $(document).height()) {
	  Flags.renderAllCountries();
	  }
	}
};

$(document).ready(function() {
	Flags.populateAllCountries();
	$('#populate-all-button').click(Flags.showAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
});

Flags.CountriesArray = [];

Flags.showAllCountries = function() {
	Flags.emptyCountries();
	Flags.populateAllCountries(true);
};

Flags.renderAllCountries = function(countries, showAll) {
	if(countries !== undefined){
		Flags.CountriesArray = countries;
	}

	var numCountries = 20, i = 0;

	if(showAll === true){
		numCountries = Flags.CountriesArray.length;
	}

	for(; i < numCountries; i++) {
		Flags.renderCountry(Flags.CountriesArray[i]);
	}

	Flags.CountriesArray = Flags.CountriesArray.slice(numCountries);
};

Flags.renderCountry = function(country) {
	if(country !== undefined){
		var countryDiv = '<div data-bool= ' + country.north_america  + ' id='+ country.id +'>';
			  countryDiv += ' Name: ' + country.name + ' Abbreviation: ' + country.abbreviation;
			  countryDiv += '<span class="flag ' + country.abbreviation + '"></span>'
			  countryDiv += '</div>'
		$countriesDiv.append(countryDiv);
	}
};

Flags.emptyCountries = function() {
	$countriesDiv = $('#countries');
	$countriesDiv.empty();
};






