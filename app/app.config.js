'use strict';

angular
    .module('libraryApp')
    .config(['$routeProvider',
    function config($routeProvider) {
        //$locationProvider.hashPrefix('!');

        $routeProvider
            .when('/search', {
            template: '<library-search></library-search>'
        })
            .when('/top', {
            template: '<library-rating></library-rating>'
        })
            .when('/:bookId', {
            template: '<library-book-detail></library-book-detail>'
        })
            .otherwise('/search');
    }
]);