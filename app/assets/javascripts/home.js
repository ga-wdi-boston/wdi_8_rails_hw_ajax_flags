var Flags = {

	isLoading: false,

	populateAllCountries: function() {

	},
	resetAllCountries: function() {

	},
	showMoreCountries: function() {

	},
	infiniteScroll: function() {
		var flagsLoaded = $('.f32').length;
		var flagsTotal  = $('.countries-container').data('total-countries'); // the data function reads data attributes out of the DOM

		$(window).scroll(function(){  
			if ($(window).scrollTop() == $(document).height() - $(window).height() && flagsLoaded < flagsTotal && !Flags.isLoading) { //scrollTop == how far you are scrolled down; doc height is the height of the page rendered at once. window height is the height ofthe window
				console.log('douche');
				Flags.isLoading = true;
				$.ajax({
					url: "", //my partial 
					data: { 
						start: { 
							if (flagsLoaded === flagsTotal) {
								alert('done')
							} else {
								i = 0;
								flagsLoaded + i;
								i += 20
							}
						;}  //hey start at flag twenty one dumbass. This is what to change, i think

						
					}
				}).done(function(data){
						$('.countries-container').append(data);
						Flags.isLoading = false;
				}); //this is called when you are done loading data
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

