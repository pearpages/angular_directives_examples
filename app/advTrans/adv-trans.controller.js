(function() {
	'use strict';

	angular.module("app")
	.controller('AdvTransController',[AdvTransController]);

	function AdvTransController() {
		var vm = this;

		vm.items = [123,345,365,78];
	}
})();