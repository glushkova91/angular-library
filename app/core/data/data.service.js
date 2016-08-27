'use strict';

angular
    .module('core.authors')
    .factory('HttpData', ['$resource',
    function($resource) {
        return $resource('phones/:phoneId.json', {}, {
            query: {
                method: 'GET',
                params: {phoneId: 'phones'},
                isArray: true
            }
        });
    }
]);