var Flags = {
	populateAllCountries: function() {
		$flagsDiv = $('#all-countries')
		$.ajax({
				url: '/countries',
				type: 'GET',
				dataType: 'json'
			})
			.done(function(data) {
				Flags.renderCountries(data);

				// function(comments) {
				// 	var numComments = comments.length;
				// 	for (var i = 0; i < numComments; i++) {
				// 		CommentApp.renderComment(comments[i]);
				// 	};
				// };

				// CommentApp.renderComment = function(comment) {
				// 	var $commentDiv = $('<div>', {text: comment.content});
				// 	this.$commentsDiv.append($commentDiv);
				// };
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("photos complete");
			});
	},
	resetAllCountries: function() {
		alert('reset');
	},
	showMoreCountries: function() {
		alert('show');
	},
	infiniteScroll: function() {
		//alert('infinite');
	}
};

$(document).ready(function() {
	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
});


Flags.renderCountries = function(countries) {
	var numFlags = countries.length;
	for (var i = 0; i < numFlags; i++) {
		Flags.renderCountry(countries[i]);
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


