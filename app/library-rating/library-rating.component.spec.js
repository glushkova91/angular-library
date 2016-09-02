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

    var authorsData = [
      {name: 'Stieg Larsson'},
      {name: 'Dan Brown'}
    ];

    beforeEach(function() {
      jasmine.addCustomEqualityTester(angular.equals);
    });


    beforeEach(inject(function($componentController, $injector, _$httpBackend_) {
      //$httpBackend = _$httpBackend_;
      //$httpBackend = $injector.get('$httpBackend');
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/books.json')
          .respond(booksData);
      $httpBackend.expectGET('data/authors.json')
          .respond(authorsData);

      ctrl = $componentController('libraryRating');
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should create a `books` and `authors` properties', function() {

      expect(ctrl.books).toEqual([]);
      expect(ctrl.authors).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.books).toEqual(booksData);
      expect(ctrl.authors).toEqual(authorsData);
    });

    it('should set a default value for the `limit` property', function() {
      $httpBackend.flush();
      expect(ctrl.limit).toBe(10);
    });
  });

});
