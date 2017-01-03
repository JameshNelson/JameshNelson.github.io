angular.module("noServer", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.when('', '/');

  $stateProvider
    .state('home',{
      controller: 'homeCtrl',
      url: '/',
      templateUrl: './view/home.html'
    })

    $stateProvider
      .state('about',{
        controller: 'aboutCtrl',
        url: '/about',
        templateUrl: './view/about.html'
      })

      $stateProvider
        .state('view3',{
          controller: 'view3Ctrl',
          url: '/view3',
          templateUrl: './view/view3.html'
        })

})
