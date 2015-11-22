(function() {
	'use strict';

	angular.module("app")
	.controller('MyRepeatController',[MyRepeatController]);

	function MyRepeatController() {
		var vm = this;
		
		vm.bountyHunters;
		vm.add = add;
		vm.remove = remove;
		
		activate();
		
		function remove() {
			vm.bountyHunters.length--;	
		}

		function add() {
			vm.bountyHunters.push({name: '4LOM'});
		}

		function activate() {
			vm.bountyHunters = [
			{
				name: 'Boba Fett'
			},
			{
				name: 'IG-88'
			},
			{
				name: 'Bossk'
			},
			{
				name: 'Cad Bane'
			}
			];			
		}

	}
})();