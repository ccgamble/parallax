(function() {
	var parallax = document.querySelectorAll('.parallax'),
	speed = 0.5;

	window.onscroll = function() {
		[].slice.call(parallax).forEach(function(el, i) {
			var windowYOffset = pageYOffset
			var setBackgroundPos = '50% ' + (windowYOffset * speed) + 'px';

			el.style.backgroundPosition = setBackgroundPos
		});
	}
})();
