'use strict';

angular
    .module('core.data')
    .factory('apiService', ['$resource',
    function($resource) {
        return {
            getBooksData,
            getAuthorsData
        };
        function getBooksData(){
            return $resource('data/books.json', null, {
                query: {method: 'get', isArray: true}
            });
        }
        function getAuthorsData(){
            return $resource('data/authors.json', null, {
                query: {method: 'get', isArray: true}
            });
        }
    }
]);