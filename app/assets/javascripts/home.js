'use strict';

var Flags = {
	populateAllCountries: function() {
		$.getScript('/all');
	},
	resetAllCountries: function() {
    $('#flags').empty();
	},
	showMoreCountries: function() {
		$('#flags').load('/countries');
	},

	element_in_scroll: function(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
 
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
 
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	},
	infiniteScroll: function() {
		if (Flags.element_in_scroll('#flags div:last')) {
      $(document).unbind('scroll');
	      $.ajax({
	          type: 'GET',
            url: document.location.href,
            data: { text_filter:  $('#text_filter').attr('value'), index_count:$('#index_count').attr('value'),json: "true" }
        }).done(function( data ) {
	          $('#flags').append(data.html);
	          });
    // if ( $(window).scrollTop() > $(document).height() - $(window).height() - 50 ) {
    // 	$('#flags').load('/countries');
    // }
    }
	}


}

$(document).ready(function() {
	$('#populate-all-button').click(Flags.populateAllCountries);
	$('#reset-button').click(Flags.resetAllCountries);
	$('#show-more-countries-button').click(Flags.showMoreCountries);
	$(window).scroll(Flags.infiniteScroll);
});

