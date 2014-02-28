var Flags = {
	populateAllCountries: function() {
	},
	resetAllCountries: function() {
		$(".f32").empty();
	},
	showMoreCountries: function() {
		$.ajax({
		url: '/',
		type: 'get',
		dataType: 'json'
		})
		.done(function(data){
			var length = $('.f32').children().size();
			for(var i=0; i<10; i++){
				$('.f32').append('<li '+ "class='flag " + data[length+i].abbreviation + "'>" + '</li>');
			}
		});
	},
	infiniteScroll: function() {


if ($(window).scrollTop() >= $(document).height() - $(window).height() + 4) {
$.ajax({
					url: '/',
					type: 'get',
					dataType: 'json'
					})
					.done(function(data){
						var length = $('.f32').children().size();
						for(var i=0; i<10; i++){
							$('.f32').append('<li '+ "class='flag " + data[length+i].abbreviation + "'>" + '</li>');
						}
						Flags.count += 1;
					});
    }


			
		
	}
};

$(document).ready(function() {
	Flags.count = 1;
	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
	
});
