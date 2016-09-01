'use strict';

angular
    .module('libraryRating')
    .component('libraryRating', {
    templateUrl: 'library-rating/library-rating.template.html',
    controller: ['apiService',
        function LibraryRatingController(apiService) {

            this.books = apiService.getBooksData().query();
            this.authors = apiService.getAuthorsData().query();
            this.limit = 10;
        }
    ]
});