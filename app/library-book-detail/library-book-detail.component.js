'use strict';

angular
    .module('libraryBookDetail')
    .component('libraryBookDetail', {
    templateUrl: 'library-book-detail/library-book-detail.html',
    controller: ['$routeParams', 'apiService',
        function libraryBookDetailController($routeParams, apiService) {
            var self = this;
            self.book = apiService.getBookDetail().get({bookId: $routeParams.bookId});
        }
    ]
});
