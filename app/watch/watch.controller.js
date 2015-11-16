(function() {
	'use strict';

	angular.module('app')
	.controller('WatchController',WatchController);

	function WatchController() {
		var vm = this;

		vm.format = 'M/d/yy h:mm:ss a';
	}

})();