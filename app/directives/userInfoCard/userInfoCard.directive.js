(function() {
	"usse strict"

	angular.module("app")
	.directive("myAppUserInfoCard", [myAppUserInfoCard]);

	function myAppUserInfoCard() {
		return {
			templateUrl: "app/directives/userInfoCard/userInfoCard.html",
			restrict: "E"
		}
	}
})();