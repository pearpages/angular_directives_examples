(function() {
	'use strict'

	angular.module('app')
	.directive('myAppMyClick',['$parse',myAppMyClick]);

	function myAppMyClick($parse) {
		return {
			restrict: 'A',
			link: function(scope,el,attrs){
				var fn = $parse(attrs['myAppMyClick']);
				el.on('click', function() {
					scope.$apply(function() {
						fn(scope);
					});
				});
			}	
		};
	}

})();