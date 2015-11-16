(function() {
	"use strict"

	angular.module('app')
	.controller('mainController',[mainController]);

	function mainController() {
		var vm = this;

		vm.user = null;

		activate();

		function activate() {
			vm.user = {
				name: 'Luke Skywalker',
				address: {
					street: 'PO Box 123',
					city: 'Secret Rebel Base',
					planet: 'Yavin 4'
				},
				friends: [
					'Han',
					'Leia',
					'Chewbacca'
				]
			}
		}

	}
	
})();