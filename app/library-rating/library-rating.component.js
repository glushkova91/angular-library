'use strict';

angular
    .module('libraryRating')
    .component('libraryRating', {
    templateUrl: 'library-rating/library-rating.template.html',
    controller: ['apiService',
        function LibraryRatingController(apiService) {
            let self = this;
            apiService.getBooksData().query({}, function(response){
                self.books = response
            }, function(error){console.log(error);});
            apiService.getAuthorsData().query({}, function(response){
                self.authors = response
            }, function(error){console.log(error);});
        }
    ]
});