'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular
    .module('libraryRating')
    .component('libraryRating', {
    templateUrl: 'library-rating/library-rating.template.html',
    controller: ['HttpData',
        function LibraryRatingController(HttpData) {
            let self = this;
            HttpData.getBooksData().query({}, function(response){
                self.books = response
            }, function(error){
                console.log(error);
            });
        }
    ]
});