var Flags = {
	populateAllCountries: function() {

	},
	resetAllCountries: function() {

	},
	showMoreCountries: function() {

	},
	infiniteScroll: function() {
		var flagCount = $('.f32').length;
		$(window).scroll(function(){  
			if  ($(window).scrollTop() == $(document).height() - $(window).height()){ //scrollTop == how far you are scrolled down; doc height is the height of the page rendered at once. window height is the height ofthe window
				$.ajax({
					url: "", //my partial 
					data: { 
						start: flagCount //hey start at flag twenty one dumbass
					}
				})
			}  
		});    
	}
};

$(document).ready(function() {
	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
});

