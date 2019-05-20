(function($){
	$(document).ready(function(){
		// Set the time at which the countdown expires.
		// var untilDate new Date(Year, Month - 1, Day)
		//-----------------------------------------------
		var untilDate = new Date(2019, 5 - 1, 22);

		$(".countdown").countdown({
			until: untilDate, 
			format: 'dHMS',
			padZeroes: true
		});

	}); // End document ready

})(this.jQuery);