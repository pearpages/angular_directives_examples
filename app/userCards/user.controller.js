(function() {
	"use strict"

	angular.module('app')
	.controller('UserController',[UserController]);

	function UserController() {
		
		var vm = this;
		vm.level; //used by stateDirective
		vm.nextLevel = nextLevel;
		vm.user1;
		vm.user2;

		activate();

		function nextLevel() {
			vm.level++;
			vm.level = vm.level % 3;
		}

		function activate() {
			vm.level = 1;

			vm.user1 = {
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
				],
				level: 2
			};

			vm.user2 = {
				name: 'Han Solo',
				address: {
					street: 'PO BOox 123',
					city: 'Mos Eisley',
					planet: 'Tattoine'
				},
				friends: [
				'Han',
				'Leia',
				'Chewbacca'
				],
				level: 1
			};
		}

		
	}
	
})();