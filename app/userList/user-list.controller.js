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