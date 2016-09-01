'use strict';

angular
    .module('topMenu')
    .component('topMenu', {
    templateUrl: 'top-menu/top-menu.template.html',
    controller: ['$location', '$scope',
        function TopMenuController($location, $scope) {
            let self = this;
            this.url = $location.url();
            $scope.$on('$routeChangeSuccess', ()=>{
                self.url = $location.url();
            });
            this.title = 'Online Library';
            this.items = [
               {
                   name: 'Top',
                   src: '/top'
               },
               {
                   name: 'Search',
                   src: '/search'
               }
            ];
        }
    ]
});