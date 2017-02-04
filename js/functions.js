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

		//selecter plugin
		$('.search-holder select').selecter();

		//search click
		$('a.search-ico').on('click', function(e) {
			e.preventDefault();
			$('.search-holder').toggleClass('visible');			
		});

		//add parent class
		$('.nav li li').each(function() {
			var $this = $(this);

			if ( $this.find('ul').length ) {
				$this.addClass('parent');
			}
		});
	});

})(jQuery, window, document);
