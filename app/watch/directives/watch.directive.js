(function (){
	'use strict';

	angular.module('app')
	.directive('myAppWatch',['$interval','dateFilter',myAppWatch]);

	function myAppWatch ($interval,dateFilter){
		return {
			restrict: 'A',
			link: link
		};

		function link(scope,element,attrs){
			var format,	timeoutId;

			activate();

			function updateTime() {
				element.text(dateFilter(new Date(), format))
			}

			function activate() {

				scope.$watch(attrs.myAppWatch, function(value) {
					format = value;
					updateTime();
				});

				element.on('$destroy', function() {
					$interval.cancel(timeoutId);
				});

				//start the UI update process; save the timeoutId for canceling
				timeoutId = $interval(function() {
					updateTime(); //update DOM
				}, 1000);
			}
		}
	}
})();