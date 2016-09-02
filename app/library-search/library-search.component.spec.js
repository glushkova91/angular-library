'use strict';

describe('librarySearch', function() {

  // Load the module that contains the `libraryRating` component before each test
  beforeEach(module('librarySearch'));

  // Test the controller
  describe('LibrarySearchController', function() {
    var $httpBackend, ctrl;
    var booksData = [
      {name: 'Crime and Punishment'},
      {name: 'The Little Prince'}
    ];

    beforeEach(function() {
      jasmine.addCustomEqualityTester(angular.equals);
    });


    beforeEach(inject(function($componentController, $injector) {
      //$httpBackend = _$httpBackend_;
      $httpBackend = $injector.get('$httpBackend');
      ctrl = $componentController('librarySearch');
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should set menu items', function() {
      $httpBackend.expectGET('data/books.json')
          .respond(booksData);

      expect(ctrl.books).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.books).toEqual(booksData);
      expect(ctrl.sort).toBe('-rating');
    });
  });

});
