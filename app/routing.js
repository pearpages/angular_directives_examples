(function() {
	'use strict'

	angular.module('app')
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
		.state('font-scale', {
			url: "/font-scale",
			templateUrl: "app/fontScale/font-scale.html",
			controller: "FontScaleController",
			controllerAs: 'vm'
		})
		.state('display-box', {
			url: "/display-box",
			templateUrl: "app/displayBox/display-box.html",
			controller: 'DisplayBoxController',
			controllerAs: 'vm'
		})
		.state('questions', {
			url: "/questions",
			templateUrl: "app/questions/questions.html",
			controller: 'QuestionsController',
			controllerAs: 'vm'
		})
		.state('droid', {
			url: "/droid",
			templateUrl: "app/droid/droid.html",
			controller: 'DroidController',
			controllerAs: 'vm'
		})
		.state('lazy-render', {
			url: "/lazy-render",
			templateUrl: "app/lazyRender/lazy-render.html",
			controller: 'LazyRenderController',
			controllerAs: 'vm'
		})
		.state('my-repeat', {
			url: "/my-repeat",
			templateUrl: "app/myRepeat/my-repeat.html",
			controller: 'MyRepeatController',
			controllerAs: 'vm'
		})
		.state('user-list', {
			url: "/user-list",
			templateUrl: "app/userList/user-list.html",
			controller: 'UserListController',
			controllerAs: 'vm'
		})
		.state('home', {
			url: "/",
			templateUrl: "app/home/home.html"
		});
		
	});
})();