(function () {
	"use strict"

	angular.module('app')
	.controller('MyClickController',MyClickController);

	function MyClickController() {
		var vm = this;

		vm.data = {message: "I have not been clicked"};
		vm.clickHandler = clickHandler;

		function clickHandler(p) {
			p.message = "I have been clicked";
		}

	}

})();