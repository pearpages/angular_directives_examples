(function() {
	"use strict"

	angular.module("app")
	.directive("myAppAdvUserCard", [myAppAdvUserCard]);

	function myAppAdvUserCard() {
		return {
			templateUrl: "app/userCards/directives/advUserCard/advUserCard.html",
			restrict: "E",
			controllerAs: 'vm',
			scope: {
				user: '=',
				collapsed: '@init'
			},
			bindToController: true,
			controller: controller,
			link: link
		};

		function link(scope,el,attrs) {
			//the link function is because I have to manipulate the DOM itself and not only the User
			activate();

			scope.nextState = function() {
				scope.vm.nextState();
				setState();
			}

			function activate() {
				setState();
			}

			function setState() {
				switch(scope.vm.user.level){
					case 0:
						el.children('.panel-body').css('background-color','white');
					break;
					case 1:
						el.children('.panel-body').css('background-color','yellow');
					break;
					case 2:
						el.children('.panel-body').css('background-color','red');
					break;
				}
			}
		}

		function controller() {
			var vm = this;

			vm.nextState = nextState;
			vm.collapsedState = (vm.collapsed === 'true');
			vm.knightMe = knightMe;
			vm.collapse = collapse;
			vm.removeFriend = removeFriend;
			
			function nextState(){
				if(vm.user.level < 2){
					vm.user.level++;
				}else{
					vm.user.level = 0;
				}
			}

			function collapse() {
				vm.collapsedState = !vm.collapsedState;
			}

			function knightMe() {
				vm.user.rank = "knight";
			}

			function removeFriend(friend) {
				var idx = vm.user.friends.indexOf(friend);

				if(idx > -1){
					vm.user.friends.splice(idx,1);
				}
			}

		}
	}
})();