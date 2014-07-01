

var hangookdoApp = angular.module('hangookdoApp', [  'ngTouch', 'ngAnimate','ngCookies', 'ngResource',
		'ngSanitize', 'ngRoute','angularFileUpload','ui.bootstrap' ]);

hangookdoApp.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'templates/main.html',
		controller : 'MainCtrl'
	}).when('/about', {
		templateUrl : 'templates/about.html',
		controller : 'AboutCtrl'
	}).when('/contact', {
		templateUrl : 'templates/contact.html',
		controller : 'ContactCtrl'
	}).when('/links', {
		templateUrl : 'templates/links.html',
		controller : 'LinksCtrl'
	}).when('/membership', {
		templateUrl : 'templates/membership.html',
		controller : 'MembershipCtrl'
	}).when('/login', {
		templateUrl : 'templates/login.html',
		controller : 'LoginCtrl'
	}).when('/register', {
		templateUrl : 'templates/register.html',
		controller : 'RegisterCtrl'
	}).when('/activate', {
		templateUrl : 'templates/activate.html',
		controller : 'ActivateCtrl'
	}).when('/active', {
		templateUrl : 'templates/active.html',
		controller : 'ActiveCtrl'
	}).when('/lostpassword', {
		templateUrl : 'templates/lostpassword.html',
		controller : 'LostPasswordCtrl'
	}).when('/reset', {
		templateUrl : 'templates/reset.html',
		controller : 'ResetCtrl'
	}).when('/invalid', {
		templateUrl : 'templates/invalid.html',
		controller : 'InvalidCtrl'
	}).when('/news1', {
		templateUrl : 'templates/website.html'
	}).when('/news2', {
		templateUrl : 'templates/tshirt.html'
	}).when('/news3', {
		templateUrl : 'templates/grading.html'
	}).otherwise({
		redirectTo : '/'
	});
});
                                                       

