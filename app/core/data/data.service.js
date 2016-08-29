'use strict';

angular
    .module('core.data')
    .factory('HttpData', ['$resource',
    function($resource) {
        return {
            getBooksData,
            getAuthorsData
        };
        function getBooksData(success, error){
            return $resource('data/books.json', null, {
                query: {method: 'get', isArray: true}
            });
        }
        function getAuthorsData(){
            return $resource('data/authors.json', {}).get({}, success, error);
        }
    }
]);