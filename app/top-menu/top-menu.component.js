'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular
    .module('topMenu')
    .component('topMenu', {
    templateUrl: 'top-menu/top-menu.template.html',
    controller: [function TopMenuController() {
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