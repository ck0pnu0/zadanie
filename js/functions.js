;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);	

	$doc.ready(function() {
		function heroBackground() {
			var bgImg = $('.hero-section img').attr('src');

			$('.hero-section').css({
				'background-image': 'url(' + bgImg + ')',
				'background-size': 'cover'
			});
		}

		heroBackground();

		$('.search-holder select').selecter();

		$('a.search-ico').on('click', function(e) {
			e.preventDefault();
			$('.search-holder').toggleClass('visible');			
		});
	});

})(jQuery, window, document);
