(function() {
	"use strict"

	angular.module("app")
	.directive('spacebarSupport',spacebarSupport);

	function spacebarSupport() {
		return {
			restrict: 'A',
			link: link
		};

		function link(scope,el,attr) {
			$('body').on('keypress',function(evt) {
				var vidEl = el[0];
				if(evt.keyCode === 32){
					if(vidEl.paused){
						vidEl.play();
					}else{
						vidEl.pause();
					}
				}
			});
		}
	}
})();