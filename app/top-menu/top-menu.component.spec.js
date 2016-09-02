'use strict';

describe('topMenu', function() {

  // Load the module that contains the `libraryRating` component before each test
  beforeEach(module('topMenu'));

  // Test the controller
  describe('TopMenuhController', function() {
    var ctrl;

    beforeEach(function() {
      jasmine.addCustomEqualityTester(angular.equals);
    });


    beforeEach(inject(function($componentController) {
      ctrl = $componentController('librarySearch');
    }));

    it('should create menu items', function() {
      expect(ctrl.items).toBe([
        {
          name: 'Top',
          src: '/top'
        },
        {
          name: 'Search',
          src: '/search'
        }
      ]);
    });

    it('should create menu items', function() {
      expect(ctrl.items).toBe([
        {
          name: 'Top',
          src: '/top'
        },
        {
          name: 'Search',
          src: '/search'
        }
      ]);
    });
  });

});
