var Flags = {
	offset: 0,
	resetAllCountries: function() {
		Flags.$countryList.empty();
		Flags.offset = 0;
	},
	showAllCountries: function() {
		$.ajax({
			url: "/countries",
			type: "GET",
			dataType: "json",
			data: {offset: Flags.offset}
		})
		.done(function(response) {
			$.each(response, function(index, flag) {
				var $flag = Flags.renderFlag(flag);
				Flags.$countryList.append($flag);
			});
			Flags.offset += response.length;
		});
	},
	showMoreCountries: function() {
		$.ajax({
			url: "/countries",
			type: "GET",
			dataType: "json",
			data: {offset: Flags.offset, limit: 20}
		})
		.done(function(response) {
			$.each(response, function(index, flag) {
				var $flag = Flags.renderFlag(flag);
				Flags.$countryList.append($flag);
			});
			Flags.offset += response.length;
		});
	},
	infiniteScroll: function(args) {
		var w = $(window);
		// Ensure some flags are loaded but all of them are not
		if (272 > Flags.offset && Flags.offset > 0 &&
			  w.height() + w.scrollTop() >= $(document).height()) {
			Flags.showMoreCountries();
		}
	},
	renderFlag: function(flag) {
		var $flag = $("<div/>", {"class": "flag " + flag.abbreviation} ),
		    $flagLi = $("<li/>", {"html": flag.name + " [" +
		    					  flag.abbreviation.toUpperCase() + "]"});
		if (flag.north_america) {
			$flagLi.addClass("is-na");
		}
		return $flagLi.append($flag)
	},
};

$(document).ready(function() {
	Flags.$countryList = $("#all-countries");
	$('#populate-all-button').click(Flags.showAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
});
