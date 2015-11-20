(function() {
	'use strict';

	angular.module("app")
	.controller('LazyRenderController',[LazyRenderController]);

	function LazyRenderController() {
		var vm = this;

		vm.items = [123,345,365,78];
	}
})();