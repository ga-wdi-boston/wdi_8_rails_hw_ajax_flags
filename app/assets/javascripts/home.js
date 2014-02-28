var Flags = {
	offset: 0,

	getAllCountries: function() {
		$.ajax({
			url: '/countries',
			type: 'GET',
			dataType: 'json',
			data: {offset: 0}
		})

		.done(function(data) {
			console.log("success");
			Flags.renderCountries(data);
			Flags.offset += data.length;
		})

		.fail(function() {
			console.log("error");
		})

		.always(function() {
			console.log("complete");
		});
	},

	showMoreCountries: function() {
		$.ajax({
      url: '/countries',
      type: 'GET',
      dataType: 'json',
      data: {limit: 20, offset: Flags.offset}
    })

    .done(function(data) {
      console.log("success");
      Flags.renderCountries(data);
      Flags.offset += data.length;
    })

    .fail(function() {
      console.log("error");
    })

    .always(function() {
      console.log("complete");
    });

	},

	clearAllCountries: function() {
		Flags.countriesUl.empty();
		Flags.offset = 0;

	},

	infiniteScroll: function() {

	},

	renderCountry: function(country){
		var $countryLi = $('<li />', {class: 'panel panel-default'}),
				$title = $('<h3 />', {html: country.name + ' (' + country.abbreviation.toUpperCase() + ')'}),
				$imgDiv = $('<div />', {class: 'flag ' + country.abbreviation});

		$countryLi.append($title);
		$countryLi.append($imgDiv);
		if(country.north_america === true){
			$countryLi.addClass('n-a');
		}

		return $countryLi;
	},

	renderCountries: function(countries){
		var i = 0, length = countries.length;

		for(;i < length;){
			var $country = Flags.renderCountry(countries[i]);
			Flags.countriesUl.append($country);
			i = i + 1;
		};

	}
};

$(document).ready(function() {
	Flags.countriesUl = $('#all-countries');
	$('#populate-all-button').click(Flags.getAllCountries);
	$('#clear-button').click(Flags.clearAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.showMoreCountries);
});