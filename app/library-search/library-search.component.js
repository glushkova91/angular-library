'use strict';

angular
    .module('librarySearch')
    .component('librarySearch', {
    templateUrl: 'library-search/library-search.template.html',
    controller: ['apiService',
        function LibrarySearchController(apiService) {

            this.books = apiService.getBooksData().query();
            this.sort = '-rating';

            this.books.forEach((book)=>book.openDetails = false);
        }

    ]
});