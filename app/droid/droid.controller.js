(function() {
	'use strict';

	angular.module("app")
	.controller('DroidController',[DroidController]);

	function DroidController() {
		var vm = this;

		vm.droid1;
		
		activate();

		function activate() {
			vm.droid1 = {
				name: 'R2-D2',
				specifications: {
					manufacturer: 'Industrial Automation',
					type: 'Astromech',
					productLine: 'R2 series'
				},
				level: 0
			};		
		}


	}
})();