(function() {
	"use strict"

	angular.module('app')
	.controller('VideoController',[VideoController]);

	function VideoController() {
		
		var vm = this;

		vm.handlePause = handlePause;


		function handlePause(e) {
			console.log(e);
			console.log('video was paused!');
		}
	}
	
})();