angular
    .module('core.directives')
    .directive('showdetail', function () {
    return {
        restrict: 'A',
        //scope: {
        //    target: '=target'
        //},
        link: function(scope, element, attrs) {
            var target = scope.target;

            element.bind('click', ()=> {
                console.log(target);
                target.opened = !target.opened;
            });
        }
    };
});