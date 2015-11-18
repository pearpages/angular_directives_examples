(function() {
	'use strict';

	angular.module("app")
	.directive('myAppQuestions',[myAppQuestions]);

	function myAppQuestions() {
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: 'app/questions/directives/questions.html',
			scope:{
				questionText: '@'
			},
			bindToController:true,
			controllerAs: 'vm',
			controller: controller
		}

		function controller() {
			var vm = this;

			vm.test = test;

			function test() {
				alert('this method comes from the directive controller');
			}
		}
	}
})();