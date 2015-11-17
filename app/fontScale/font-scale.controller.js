(function (){
	'use strict'

	angular.module('app')
	.controller('FontScaleController',FontScaleController);

	function FontScaleController() {
		var vm = this;

		vm.size = 150;
	}
})();