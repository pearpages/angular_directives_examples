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
		.state('watch', {
			url: "/watch",
			templateUrl: "app/watch/watch.html",
			controller: "WatchController",
			controllerAs: 'vm'
		})
		.state('my-click', {
			url: "/my-click",
			templateUrl: "app/myClick/my-click.html",
			controller: "MyClickController",
			controllerAs: 'vm'
		})
		.state('home', {
			url: "/",
			templateUrl: "app/home/home.html"
		});
		
	});
})();