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


    beforeEach(inject(function($componentController, $injector) {
      //$httpBackend = _$httpBackend_;
      $httpBackend = $injector.get('$httpBackend');
      ctrl = $componentController('libraryRating');
    }));

    it('should create a `books` property with 2 books fetched with `$http`', function() {
      $httpBackend.expectGET('data/books.json')
          .respond(booksData);

      expect(ctrl.books).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.books).toEqual(booksData);
    });

    //it('should create a `books` property with 2 authors fetched with `$http`', function() {
    //  $httpBackend.expectGET('data/authors.json')
    //      .respond(authorsData);
    //
    //  expect(ctrl.authors).toEqual([]);
    //
    //  $httpBackend.flush();
    //  expect(ctrl.authors).toEqual(authorsData);
    //});
  });

});
