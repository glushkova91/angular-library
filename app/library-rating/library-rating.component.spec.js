'use strict';

describe('libraryRating', function() {

  // Load the module that contains the `libraryRating` component before each test
  beforeEach(module('libraryRating'));

  // Test the controller
  describe('LibraryRatingController', function() {
    var $httpBackend, ctrl;
    var booksData = [
      {name: 'Crime and Punishment'},
      {name: 'The Little Prince'}
    ];

    beforeEach(function() {
      jasmine.addCustomEqualityTester(angular.equals);
    });

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/books.json')
                  .respond(booksData);

      ctrl = $componentController('libraryRating');
    }));

    it('should create a `books` property with 2 books fetched with `$http`', function() {
      expect(ctrl.books).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.books).toEqual(booksData);
    });

  });

});
