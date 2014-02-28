var Flags = {
	populateAllCountries: function() {
		$countriesDiv = $('#countries');
		$.ajax({
			url: '/countries',
			type: 'GET',
			dataType: 'json'
		})
		.done(function(data) {
			console.log("the countries...");
			Flags.renderAllCountries(data);
		})
		.fail(function() {
			console.log("error");
		})

	},
	resetAllCountries: function() {

	},
	showMoreCountries: function() {

	},

	infiniteScroll: function() {
	  var win = $(window);
	  if(win.height() + win.scrollTop() >= $(document).height()) {
	  Flags.populateAllCountries();
	  }
	}
};

$(document).ready(function() {
	//Flags.populateAllCountries();
	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
});

Flags.renderAllCountries = function(countries) {
	event.preventDefault();
	var numCountries = countries.length, i = 0;
	for(; i < numCountries; i++) {
		Flags.renderCountry(countries[i]);
	}
	return false;
};

Flags.renderCountry = function(country) {
	var countryDiv = '<div data-bool= ' + country.north_america  + ' id='+ country.id +'>';
		  countryDiv += ' Name: ' + country.name + ' Abbreviation: ' + country.abbreviation;
		  countryDiv += '</div>'
	$countriesDiv.append(countryDiv);
};








