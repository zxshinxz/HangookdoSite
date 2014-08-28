var hangookdoApp = angular.module('hangookdoApp', [
    'ngTouch',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'angularFileUpload',
    'ui.bootstrap',
    'ngRoute'
  ]);
hangookdoApp.config([
  '$routeProvider',
  'AccessLevels',
  function ($routeProvider, AccessLevels) {
    //	$urlRouterProvider.otherwise('/');
    //
    //	$stateProvider
    //	.state('anon', {
    //		abstract: true,
    //		template: '<ui-view/>',
    //		data: {
    //			access: AccessLevels.anon
    //		}
    //	})
    //	.state('anon.home', {
    //		url: '/',
    //		templateUrl: 'templates/main.html',
    //		controller : 'MainCtrl'
    //	})
    //	.state('anon.about', {
    //		url: '/about',
    //		templateUrl: 'templates/about.html',
    //		controller : 'AboutCtrl'
    //	})
    //	.state('anon.contact', {
    //		url: '/contact',
    //		templateUrl: 'templates/contact.html',
    //		controller : 'ContactCtrl'
    //	})
    //	.state('anon.links', {
    //		url: '/links',
    //		templateUrl: 'templates/links.html',
    //		controller : 'LinksCtrl'
    //	})
    //	.state('anon.membership', {
    //		url: '/membership',
    //		templateUrl: 'templates/contact.html',
    //		controller : 'MembershipCtrl'
    //	})
    //	.state('anon.login', {
    //		url: '/login',
    //		templateUrl: 'templates/contact.html',
    //		controller : 'LoginCtrl'
    //	})
    //	.state('anon.register', {
    //		url: '/register',
    //		templateUrl: 'templates/register.html',
    //		controller : 'RegisterCtrl'
    //	})
    //	.state('anon.activate', {
    //		url: '/activate',
    //		templateUrl: 'templates/activate.html',
    //		controller : 'ActivateCtrl'
    //	})
    //	.state('anon.active', {
    //		url: '/active',
    //		templateUrl: 'templates/active.html',
    //		controller : 'ActiveCtrl'
    //	})
    //	.state('anon.lostpassword', {
    //		url: '/lostpassword',
    //		templateUrl: 'templates/lostpassword.html',
    //		controller : 'LostPasswordCtrl'
    //	})
    //	.state('anon.reset', {
    //		url: '/reset',
    //		templateUrl: 'templates/reset.html',
    //		controller : 'ResetCtrl'
    //	})
    //	.state('anon.invalid', {
    //		url: '/invalid',
    //		templateUrl: 'templates/invalid.html',
    //		controller : 'InvalidCtrl'
    //	})
    //	.state('anon.news1', {
    //		url: '/login',
    //		templateUrl: 'templates/website.html'
    //	})
    //	.state('anon.news2', {
    //		url: '/login',
    //		templateUrl: 'templates/tshirt.html'
    //	})
    //	.state('anon.news3', {
    //		url: '/login',
    //		templateUrl: 'templates/grading.html'
    //	});
    $routeProvider.when('/', {
      templateUrl: 'templates/main.html',
      controller: 'MainCtrl'
    }).when('/about', {
      templateUrl: 'templates/about.html',
      controller: 'AboutCtrl'
    }).when('/contact', {
      templateUrl: 'templates/contact.html',
      controller: 'ContactCtrl'
    }).when('/links', {
      templateUrl: 'templates/links.html',
      controller: 'LinksCtrl'
    }).when('/membership', {
      templateUrl: 'templates/membership.html',
      controller: 'MembershipCtrl'
    }).when('/login', {
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    }).when('/register', {
      templateUrl: 'templates/register.html',
      controller: 'RegisterCtrl'
    }).when('/activate', {
      templateUrl: 'templates/activate.html',
      controller: 'ActivateCtrl'
    }).when('/active', {
      templateUrl: 'templates/active.html',
      controller: 'ActiveCtrl'
    }).when('/lostpassword', {
      templateUrl: 'templates/lostpassword.html',
      controller: 'LostPasswordCtrl'
    }).when('/reset', {
      templateUrl: 'templates/reset.html',
      controller: 'ResetCtrl'
    }).when('/invalid', {
      templateUrl: 'templates/invalid.html',
      controller: 'InvalidCtrl'
    }).when('/news1', { templateUrl: 'templates/website.html' }).when('/news2', { templateUrl: 'templates/tshirt.html' }).when('/news3', { templateUrl: 'templates/grading.html' });
  }
]);
'user strict';
hangookdoApp.controller('MainCtrl', [
  '$scope',
  'HangookdoService',
  '$fileUploader',
  '$window',
  function ($scope, HangookdoService, $fileUploader, $window) {
    $scope.pageClass = 'page-home';
    $scope.myInterval = 4000;
    var DesktopSlides = [
        {
          style: {
            'background': 'url("images/title_1_c.png")',
            'background-color': '#8f2831',
            'background-repeat': 'no-repeat',
            'background-position': 'center'
          }
        },
        {
          style: {
            'background': 'url("images/title_2_c.png")',
            'background-color': '#000000',
            'background-repeat': 'no-repeat',
            'background-position': 'center'
          }
        },
        {
          style: {
            'background': 'url("images/title_3_c.png")',
            'background-color': '#3D577A',
            'background-repeat': 'no-repeat',
            'background-position': 'center'
          }
        },
        {
          style: {
            'background': 'url("images/title_4_c.png")',
            'background-color': '#FFA300',
            'background-repeat': 'no-repeat',
            'background-position': 'center'
          }
        },
        {
          style: {
            'background': 'url("images/title_5_c.png")',
            'background-color': '#AEBD63',
            'background-repeat': 'no-repeat',
            'background-position': 'center'
          }
        }
      ];
    var MobileSlides = [
        {
          style: {
            'background': 'url("images/title_1_m.png")',
            'background-color': '#8f2831',
            'background-repeat': 'no-repeat',
            'background-position': 'center'
          }
        },
        {
          style: {
            'background': 'url("images/title_2_m.png")',
            'background-color': '#000000',
            'background-repeat': 'no-repeat',
            'background-position': 'center'
          }
        },
        {
          style: {
            'background': 'url("images/title_3_m.png")',
            'background-color': '#3D577A',
            'background-repeat': 'no-repeat',
            'background-position': 'center'
          }
        },
        {
          style: {
            'background': 'url("images/title_4_m.png")',
            'background-color': '#FFA300',
            'background-repeat': 'no-repeat',
            'background-position': 'center'
          }
        },
        {
          style: {
            'background': 'url("images/title_5_m.png")',
            'background-color': '#AEBD63',
            'background-repeat': 'no-repeat',
            'background-position': 'center'
          }
        }
      ];
    function getSlides() {
      if ($window.innerWidth < 768) {
        $scope.slides = MobileSlides;
      } else {
        $scope.slides = DesktopSlides;
      }
    }
    getSlides();
    angular.element($window).bind('resize', function () {
      getSlides();
    });  //	  $scope.addSlide = function() {
         //	    var newWidth = 600 + slides.length;
         //	    slides.push({
         //	      image: 'http://placekitten.com/' + newWidth + '/300',
         //	      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
         //	        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
         //	    });
         //	  };
         //	  for (var i=0; i<4; i++) {
         //	    $scope.addSlide();
         //	  }
  }
]);
hangookdoApp.controller('AboutCtrl', [
  '$scope',
  '$location',
  '$anchorScroll',
  function ($scope, $location, $anchorScroll) {
    $scope.pageClass = 'page-about';
    $scope.gotoTop = function () {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      if (arguments[0] == undefined || arguments[0] == null)
        $location.hash('top-page');
      else {
        $location.hash(arguments[0]);
      }
      // call $anchorScroll()
      $anchorScroll();
    };
  }
]);
hangookdoApp.controller('ContactCtrl', [
  '$scope',
  'HangookdoService',
  '$location',
  '$anchorScroll',
  function ($scope, HangookdoService, $location, $anchorScroll) {
    $scope.pageClass = 'page-contact';
    $scope.gotoTop = function () {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      if (arguments[0] == undefined || arguments[0] == null)
        $location.hash('top-page');
      else {
        $location.hash(arguments[0]);
      }
      // call $anchorScroll()
      $anchorScroll();
    };
    $scope.email;
    $scope.sendEmail = function () {
      HangookdoService.sendEmail($scope.email).then(function (data) {
        alert(data);
        $scope.email = {};
      });
    };
  }
]);
hangookdoApp.controller('LinksCtrl', [
  '$scope',
  function ($scope) {
    $scope.pageClass = 'page-links';
  }
]);
hangookdoApp.controller('MembershipCtrl', [
  '$scope',
  '$location',
  '$anchorScroll',
  function ($scope, $location, $anchorScroll) {
    $scope.pageClass = 'page-membership';
    $scope.gotoTop = function () {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      if (arguments[0] == undefined || arguments[0] == null)
        $location.hash('top-page');
      else {
        $location.hash(arguments[0]);
      }
      // call $anchorScroll()
      $anchorScroll();
    };
  }
]);
hangookdoApp.controller('LoginCtrl', [
  '$scope',
  '$location',
  'HangookdoService',
  function ($scope, $location, HangookdoService) {
    $scope.pageClass = 'page-login';
    $scope.invalidLogin = false;
    $scope.isLogin = false;
    $scope.login = function (user) {
      $scope.isLogin = true;
      $scope.promise = HangookdoService.login(user);
      $scope.promise.then(function (result) {
        if (result.isUserActive)
          $location.path('/');
        else
          $location.path('/activate');
        $scope.isLogin = false;
      });
      $scope.promise.catch(function (data) {
        $scope.isLogin = false;
        alert(data);
      });
    };
  }
]);
hangookdoApp.controller('RegisterCtrl', [
  '$scope',
  '$location',
  'HangookdoService',
  function ($scope, $location, HangookdoService) {
    $scope.pageClass = 'page-register';
    $scope.user, $scope.checkRequestId = {};
    $scope.checkRequestEmail = {};
    $scope.isRegister = false;
    $scope.cancelRegistration = function () {
      $location.path('/');
    };
    $scope.createUser = function () {
      $scope.isRegister = true;
      $scope.promise = HangookdoService.createUser($scope.user);
      $scope.promise.then(function (data) {
        $scope.isRegister = false;
        alert(data);
        $location.path('/activate');
      });
      $scope.promise.catch(function (data) {
        $scope.isRegister = false;
        alert(data);
      });
    };
    $scope.$watch('user.userId', function (newVal) {
      if (newVal == undefined || newVal == null)
        return;
      if ($scope.checkRequestId.state)
        if ($scope.checkRequestId.state === 'pending')
          $scope.checkRequestId.request.reject('cancel due to new request');
      if (newVal.length < 5)
        return;
      $scope.checkRequestId.request = HangookdoService.checkId(newVal);
      $scope.checkRequestId.state = 'pending';
      $scope.checkRequestId.request.promise.then(function (data) {
        $scope.user.idValid = data.isAvailable;
        $scope.checkRequestId.state = 'resolved';
      }, function (failReason) {
        console.log(failReason);
      });
    });
    $scope.$watch('user.email', function (newVal) {
      if (newVal == undefined || newVal == null)
        return;
      if ($scope.checkRequestEmail.state == 'pending')
        $scope.checkRequestEmail.request.reject('cancel due to new request');
      if (!EMAIL_REGEXP.test(newVal))
        return;
      $scope.checkRequestEmail.request = HangookdoService.checkEmail(newVal);
      $scope.checkRequestEmail.state = 'pending';
      $scope.checkRequestEmail.request.promise.then(function (data) {
        $scope.user.emailValid = data.isAvailable;
        $scope.checkRequestEmail.state = 'resolved';
      }, function (failReason) {
        console.log(failReason);
      });
    });
  }
]);
hangookdoApp.controller('NavCtrl', [
  '$scope',
  '$location',
  '$cookieStore',
  'HangookdoService',
  function ($scope, $location, $cookieStore, HangookdoService) {
    $scope.isLoggedIn;
    $scope.getFullName = function () {
      var user = HangookdoService.getUser().user;
      $scope.fullName = user.firstname + ' ' + user.lastname;
    };
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
    $scope.service = HangookdoService;
    $scope.logOut = function () {
      HangookdoService.logout();
    };
    $scope.$watch('service.isLoggedIn()', function (newVal) {
      $scope.isLoggedIn = newVal;
      if ($scope.fullName == undefined) {
        $scope.getFullName();
      }
    });
  }
]);
hangookdoApp.controller('ActivateCtrl', [
  '$scope',
  'HangookdoService',
  function ($scope, HangookdoService) {
    $scope.pageClass = 'page-activate';
    $scope.isActivate = false;
    $scope.reactivate = function () {
      $scope.isActivate = true;
      $scope.promise = HangookdoService.reactivate();
      $scope.promise.then(function (data) {
        alert(data);
        $scope.isActivate = false;
      });
      $scope.promise.catch(function (data) {
        alert(data);
        $scope.isActivate = false;
      });
    };
  }
]);
hangookdoApp.controller('ActiveCtrl', [
  '$scope',
  '$location',
  'HangookdoService',
  function ($scope, $location, HangookdoService) {
    $scope.pageClass = 'page-active';
    $scope.login = function () {
      $location.path('login');
    };
  }
]);
hangookdoApp.controller('InvalidCtrl', [
  '$scope',
  '$location',
  function ($scope, $location) {
    $scope.pageClass = 'page-active';
    $scope.redirectReset = function () {
      $location.path('lostpassword');
    };
  }
]);
hangookdoApp.controller('LostPasswordCtrl', [
  '$scope',
  '$location',
  'HangookdoService',
  function ($scope, $location, HangookdoService) {
    $scope.user, $scope.isLostPassword = false;
    $scope.cancelLostPassword = function () {
      $location.path('/');
    };
    $scope.resetPassword = function () {
      $scope.isLostPassword = true;
      $scope.promise = HangookdoService.resetPassword($scope.user);
      $scope.promise.then(function (data) {
        $scope.isLostPassword = false;
        alert(data);
        $location.path('/');
      });
      $scope.promise.catch(function (data) {
        $scope.isLostPassword = false;
        alert(data);
      });
    };
  }
]);
hangookdoApp.controller('ResetCtrl', [
  '$scope',
  '$location',
  'HangookdoService',
  function ($scope, $location, HangookdoService) {
    $scope.user, $scope.isNewPassword = false;
    $scope.cancelNewPassword = function () {
      $location.path('/');
    };
    $scope.newPassword = function () {
      $scope.isNewPassword = true;
      $scope.promise = HangookdoService.newPassword($scope.user);
      $scope.promise.then(function (data) {
        $scope.isNewPassword = false;
        alert(data);
        $location.path('/');
      });
      $scope.promise.catch(function (data) {
        $scope.isNewPassword = false;
        alert(data);
      });
    };
  }
]);
hangookdoApp.controller('FooterCtrl', [
  '$scope',
  '$location',
  '$anchorScroll',
  function ($scope, $location, $anchorScroll) {
    $scope.gotoTop = function () {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      if (arguments[0] == undefined || arguments[0] == null)
        $location.hash('top-page');
      else {
        $location.hash(arguments[0]);
      }
      // call $anchorScroll()
      $anchorScroll();
    };
  }
]);
'user strict';
hangookdoApp.directive('scrollSpy', [
  '$window',
  '$document',
  function ($window, $document) {
    return {
      controller: [
        '$scope',
        function ($scope) {
          $scope.spies = [];
          this.addSpy = function (spyObject) {
            $scope.spies.push(spyObject);
          };
        }
      ],
      link: function (scope, element, attrs, ctrl) {
        var spyElems = new Object();
        scope.$watch('spies', function () {
          scope.spies.forEach(function (spy) {
            if (spyElems[spy.id] == undefined)
              spyElems[spy.id] = element.find('#' + spy.id);
          });
        });
        function findActiveSpy() {
          if ($window.scrollY + $window.innerHeight == $document.height()) {
            scope.spies.forEach(function (spy) {
              if (spy.isEnd)
                spy.active();
              else
                spy.deactive();
            });
            return;
          }
          scope.spies.forEach(function (spy) {
            var start = spyElems[spy.id].offset().top;
            var end = spyElems[spy.id].height() + start + 20;
            if (start <= $window.scrollY || spy.isStart) {
              if ($window.scrollY <= end || spy.isEnd) {
                spy.active();
              } else {
                spy.deactive();
              }
            } else {
              spy.deactive();
            }
          });
        }
        return angular.element($window).bind('scroll', function () {
          findActiveSpy();
        });
      }
    };
  }
]);
hangookdoApp.directive('spy', [
  '$window',
  '$location',
  '$anchorScroll',
  function ($window, $location, $anchorScroll) {
    return {
      restrict: 'A',
      scope: {
        firstspy: '=?',
        lastspy: '=?'
      },
      require: '^scrollSpy',
      link: function (scope, element, attrs, parentCtrl) {
        scope.firstspy = scope.firstspy || false;
        scope.lastspy = scope.lastspy || false;
        element.click(function () {
          $location.hash(attrs.spy);
          $anchorScroll();
        });
        //			 element.bind('click', function() {
        //			        $location.hash(attrs.spy);
        //			        $anchorScroll();
        //		      });
        parentCtrl.addSpy({
          id: attrs.spy,
          isStart: scope.firstspy,
          isEnd: scope.lastspy,
          active: function () {
            element.addClass('active');
          },
          deactive: function () {
            element.removeClass('active');
          }
        });
      }
    };
  }
]);
hangookdoApp.directive('angularAffix', [
  '$window',
  function ($window) {
    return {
      scope: {
        top: '@',
        bottom: '@'
      },
      link: function ($scope, element, attrs) {
        var temp = $window;
        $scope.resolveClass = function () {
          atMiddle();
          if (attrs.top != undefined)
            if ($window.scrollY < attrs.top)
              atTop();
          if (attrs.bottom != undefined)
            if ($window.scrollY > attrs.bottom)
              atBottom();
        };
        function atTop() {
          element.removeClass('affix');
          element.removeClass('affix-bottom');
          element.addClass('affix-top');
        }
        function atMiddle() {
          element.removeClass('affix-top');
          element.removeClass('affix-bottom');
          element.addClass('affix');
        }
        function atBottom() {
          element.removeClass('affix');
          element.removeClass('affix-top');
          element.addClass('affix-bottom');
        }
        return angular.element($window).bind('scroll', function () {
          $scope.resolveClass();
        });
      }
    };
  }
]);
var INTEGER_REGEXP = /^\-?\d+$/;
hangookdoApp.directive('integer', function () {
  return {
    require: 'ngModel',
    link: function (scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function (viewValue) {
        if (INTEGER_REGEXP.test(viewValue)) {
          // it is valid
          ctrl.$setValidity('integer', true);
          return viewValue;
        } else {
          // it is invalid, return undefined (no model update)
          ctrl.$setValidity('integer', false);
          return undefined;
        }
      });
    }
  };
});
var ALPHABET_REGEXP = /^[A-Za-z\s]+$/;
hangookdoApp.directive('alphabet', function () {
  return {
    require: 'ngModel',
    link: function (scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function (viewValue) {
        if (ALPHABET_REGEXP.test(viewValue)) {
          // it is valid
          ctrl.$setValidity('alphabet', true);
          return viewValue;
        } else {
          // it is invalid, return undefined (no model update)
          ctrl.$setValidity('alphabet', false);
          return undefined;
        }
      });
    }
  };
});
var EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
hangookdoApp.directive('email', function () {
  return {
    require: 'ngModel',
    link: function (scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function (viewValue) {
        if (EMAIL_REGEXP.test(viewValue)) {
          // it is valid
          ctrl.$setValidity('email', true);
          return viewValue;
        } else {
          // it is invalid, return undefined (no model update)
          ctrl.$setValidity('email', false);
          return undefined;
        }
      });
    }
  };
});
hangookdoApp.directive('minLength', function () {
  return {
    require: 'ngModel',
    link: function (scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function (viewValue) {
        if (viewValue.length > parseInt(attrs.minLength)) {
          // it is valid
          ctrl.$setValidity('minLength', true);
          return viewValue;
        } else {
          // it is invalid, return undefined (no model update)
          ctrl.$setValidity('minLength', false);
          return undefined;
        }
      });
    }
  };
});
hangookdoApp.directive('disableAnimation', [
  '$animate',
  function ($animate) {
    return {
      restrict: 'A',
      link: function ($scope, $element, $attrs) {
        $attrs.$observe('disableAnimation', function (value) {
          $animate.enabled(!value, $element);
        });
      }
    };
  }
]);
hangookdoApp.directive('same', function () {
  return {
    require: 'ngModel',
    link: function (scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function (viewValue) {
        if (viewValue === attrs.same) {
          // it is valid
          ctrl.$setValidity('same', true);
          return viewValue;
        } else {
          // it is invalid, return undefined (no model update)
          ctrl.$setValidity('same', false);
          return undefined;
        }
      });
    }
  };
});
//hangookdoApp.directive('hide', function($animate){
//    return {
//        restrict: 'A',
//        link: function($scope, $element, $attrs){
//        	$attrs.$observe('hide', function(value){
//        		if(value){
//            		$element.addClass('hide');
//            	}
//            	
//            	if(!value){
//            		$element.removeClass('hide');
//            	}
//            });
//        }
//    }
//});
//
// hangookdoApp.directive('resizable', function($window) {
//	return function($scope) {
////		$scope.initializeWindowSize = function() {
////			$scope.windowHeight = $window.innerHeight;
////			return $scope.windowWidth = $window.innerWidth;
////		};
//		
//		
////		$scope.initializeWindowSize();
//		
//		$scope.calcLeft = function(){
//			$scope.windowLeft = ($window.innerWidth - 1000)/2;
//		};
//		
//		$scope.calcLeft();
//		
//		return angular.element($window).bind('resize', function() {
//			$scope.calcLeft();
//			return $scope.$apply();
//		});
//	};
//});
'user strict';
hangookdoApp.service('HangookdoService', [
  '$q',
  '$http',
  'LocalService',
  'AccessLevels',
  function ($q, $http, LocalService, AccessLevels) {
    var user;
    if (LocalService.get('hangookdo_auth_token') != null)
      user = angular.fromJson(LocalService.get('hangookdo_auth_token'));
    function setUser(obj) {
      LocalService.set('hangookdo_auth_token', JSON.stringify(obj));
      user = obj;
    }
    var _getUser = function () {
      return user;
    };
    var _isLoggedIn = function () {
      if (user) {
        return true;
      }
      return false;
    };
    var _createFile = function (name, content) {
      var deferred = $q.defer();
      $http({
        url: 'file/create',
        method: 'POST',
        data: {
          'fileName': name,
          'content': content
        },
        headers: { 'Content-Type': 'application/json' }
      }).success(function (data, status, headers, config) {
        deferred.resolve(data);
      }).error(function (data, status, headers, config) {
        alert('could not able to upload file.');
        deferred.reject();
      });
      return deferred.promise;
    };
    var _getFiles = function (word) {
      var deferred = $q.defer();
      if (word) {
        $http({
          url: 'file/findall',
          params: { search: word },
          method: 'GET'
        }).success(function (data, status, headers, config) {
          deferred.resolve(data);
        }).error(function (data, status, headers, config) {
          alert('could not able to upload file.');
          deferred.reject();
        });
      } else {
        $http({
          url: 'file/findall',
          method: 'GET'
        }).success(function (data, status, headers, config) {
          deferred.resolve(data);
        }).error(function (data, status, headers, config) {
          alert('could not able to  get files.');
          deferred.reject();
        });
      }
      return deferred.promise;
    };
    var _removefile = function (id) {
      var deferred = $q.defer();
      $http({
        url: 'file/remove',
        params: { fileid: id },
        method: 'POST'
      }).success(function (data, status, headers, config) {
        deferred.resolve(data);
      }).error(function (data, status, headers, config) {
        alert('could not able to  remove file.');
        deferred.reject();
      });
      return deferred.promise;
    };
    var _sendEmail = function (email) {
      var deferred = $q.defer();
      $http({
        url: 'email/sendmail',
        method: 'POST',
        data: {
          'firstname': email.firstName,
          'lastname': email.lastName,
          'emailaddress': email.eAddress,
          'phone': email.phone,
          'content': email.content
        },
        headers: { 'Content-Type': 'application/json' }
      }).success(function (data, status, headers, config) {
        deferred.resolve(data);
      }).error(function (data, status, headers, config) {
        alert('Could not send a email. Please try later.');
        deferred.reject();
      });
      return deferred.promise;
    };
    var _createUser = function (user) {
      var deferred = $q.defer();
      $http({
        url: 'user/register',
        method: 'POST',
        data: {
          'userid': user.userId,
          'password': user.psd,
          'firstname': user.firstName,
          'lastname': user.lastName,
          'email': user.email
        },
        headers: { 'Content-Type': 'application/json' }
      }).success(function (data, status, headers, config) {
        deferred.resolve(data.message);
      }).error(function (data, status, headers, config) {
        deferred.reject(data.error);
      });
      return deferred.promise;
    };
    var _checkId = function (userId) {
      var deferred = $q.defer();
      $http({
        url: 'user/checkid',
        method: 'POST',
        data: { 'userid': userId },
        headers: { 'Content-Type': 'application/json' }
      }).success(function (data, status, headers, config) {
        deferred.resolve(data);
      }).error(function (data, status, headers, config) {
        alert(data.error);
        deferred.reject();
      });
      return deferred;
    };
    var _checkEmail = function (email) {
      var deferred = $q.defer();
      $http({
        url: 'user/checkemail',
        method: 'POST',
        data: { 'email': email },
        headers: { 'Content-Type': 'application/json' }
      }).success(function (data, status, headers, config) {
        deferred.resolve(data);
      }).error(function (data, status, headers, config) {
        alert(data.error);
        deferred.reject();
      });
      return deferred;
    };
    var _login = function (user) {
      var deferred = $q.defer();
      $http({
        url: 'user/login',
        method: 'POST',
        data: {
          'id': user.id,
          'password': user.password
        },
        headers: { 'Content-Type': 'application/json' }
      }).success(function (data, status, headers, config) {
        if (data.user.isUserActive) {
          setUser(data);
        }
        deferred.resolve(data.user);
      }).error(function (data, status, headers, config) {
        deferred.reject(data.error);
      });
      return deferred.promise;
    };
    var _logout = function () {
      LocalService.unset('hangookdo_auth_token');
      user = null;
    };
    var _reactivate = function () {
      var deferred = $q.defer();
      $http({
        url: 'user/sendmail',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      }).success(function (data, status, headers, config) {
        deferred.resolve(data.message);
      }).error(function (data, status, headers, config) {
        deferred.reject(data.error);
      });
      return deferred.promise;
    };
    var _resetPassword = function (user) {
      var deferred = $q.defer();
      $http({
        url: 'user/passwordreset',
        method: 'POST',
        data: {
          'userid': user.userId,
          'email': user.email
        },
        headers: { 'Content-Type': 'application/json' }
      }).success(function (data, status, headers, config) {
        deferred.resolve(data.message);
      }).error(function (data, status, headers, config) {
        deferred.reject(data.error);
      });
      return deferred.promise;
    };
    var _newPassword = function (user) {
      var deferred = $q.defer();
      $http({
        url: 'user/reset',
        method: 'POST',
        data: { 'newpsd': user.psd },
        headers: { 'Content-Type': 'application/json' }
      }).success(function (data, status, headers, config) {
        deferred.resolve(data.message);
      }).error(function (data, status, headers, config) {
        deferred.reject(data.error);
      });
      return deferred.promise;
    };
    var _authorize = function (access) {
      if (access === AccessLevels.user) {
        return this.isAuthenticated();
      } else {
        return true;
      }
    };
    var _isAuthenticated = function () {
      return LocalService.get('hangookdo_auth_token');
    };
    return {
      createFile: _createFile,
      getFiles: _getFiles,
      removefile: _removefile,
      sendEmail: _sendEmail,
      createUser: _createUser,
      checkId: _checkId,
      checkEmail: _checkEmail,
      login: _login,
      logout: _logout,
      reactivate: _reactivate,
      resetPassword: _resetPassword,
      newPassword: _newPassword,
      isLoggedIn: _isLoggedIn,
      getUser: _getUser,
      authorize: _authorize,
      isAuthenticated: _isAuthenticated
    };
  }
]);
/**
 * 
 */
hangookdoApp.constant('AccessLevels', {
  anon: 0,
  user: 1
});
'user strict';
hangookdoApp.factory('AuthInterceptor', [
  '$q',
  '$injector',
  '$location',
  function ($q, $injector, $location) {
    var LocalService = $injector.get('LocalService');
    return {
      request: function (config) {
        var token;
        if (LocalService.get('auth_token')) {
          token = angular.fromJson(LocalService.get('auth_token')).token;
        }
        if (token) {
          config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
      },
      responseError: function (response) {
        if (response.status === 401 || response.status === 403) {
          LocalService.unset('auth_token');
          //          $injector.get('$state').go('anon.login');
          $location.path('/login');
        }
        return $q.reject(response);
      }
    };
  }
]).config([
  '$httpProvider',
  function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
  }
]);
angular.module('hangookdoApp').factory('LocalService', function () {
  return {
    get: function (key) {
      return localStorage.getItem(key);
    },
    set: function (key, val) {
      return localStorage.setItem(key, val);
    },
    unset: function (key) {
      return localStorage.removeItem(key);
    }
  };
});