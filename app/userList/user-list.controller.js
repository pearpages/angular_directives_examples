(function() {
	'use strict';

	angular.module("app")
	.controller('UserListController',[UserListController]);

	function UserListController() {
		var vm = this;
		
		vm.hunters;
		vm.add = add;
		vm.remove = remove;
		
		activate();
		
		function remove() {
			vm.hunters.length--;	
		}

		function add() {
			vm.hunters.push({name: '4LOM'});
		}

		function activate() {
			vm.hunters = [
			{
				name: 'Boba Fett',
				age: 35
			},
			{
				name: 'IG-88',
				age: 130
			},
			{
				name: 'Dengar',
				age: 42
			},
			{
				name: 'Bossk',
				age: 782
			},
			{
				name: 'Cad Bane',
				age: 51
			}
			];			
		}
	}
})();