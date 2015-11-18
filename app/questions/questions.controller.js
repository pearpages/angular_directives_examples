(function() {
	'use strict';

	angular.module("app")
	.controller('QuestionsController',[QuestionsController]);

	function QuestionsController() {
		var vm = this;
		vm.answer = 'Yahoooo';
		vm.submit = submit;
		vm.test = test;

		function submit() {
			alert('this comes from the controller')
		}

		function test() {
			alert('this comes from the controller even though there is a method with the same name in the directive controller');
		}
	}
})();