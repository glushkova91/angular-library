'use strict';

angular
    .module('libraryBookDetail')
    .component('libraryBookDetail', {
    templateUrl: 'library-book-detail/library-book-detail.html',
    controller: ['$routeParams', 'apiService',
        function libraryBookDetailController($routeParams, apiService) {
            var self = this;
            self.phone = apiService.get({phoneId: $routeParams.phoneId}, function(phone) {
                self.setImage(phone.images[0]);
            });

            self.setImage = function setImage(imageUrl) {
                self.mainImageUrl = imageUrl;
            };
        }
    ]
});
