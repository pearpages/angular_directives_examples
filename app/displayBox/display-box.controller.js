(function() {
	'use strict'

	angular.module('app')
	.controller('DisplayBoxController',DisplayBoxController);

	function DisplayBoxController() {
		var vm = this;

		vm.message = 'This is a message from the controller';

	}
})();