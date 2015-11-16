(function() {
	"use strict"

	angular.module("app",['ui.router'])
	.config(function($stateProvider,$urlRouterProvider){

		// For any unmatched url, redirect to /state1
		$urlRouterProvider.otherwise("/");

		// Now set up the states
		$stateProvider
		.state('user-cards', {
			url: "/user-cards",
			templateUrl: "app/userCards/user-cards.html",
			controller: 'UserController',
			controllerAs: 'vm'
		})
		.state('video', {
			url: "/video",
			templateUrl: "app/video/video.html",
			controller: "VideoController",
			controllerAs: 'vm'
		})
		.state('home', {
			url: "/",
			templateUrl: "app/home/home.html"
		});
		
	});
})();