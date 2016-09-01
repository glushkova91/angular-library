'use strict';

describe('libraryBookDetail', function() {

  // Load the module that contains the `libraryBookDetail` component before each test
  beforeEach(module('libraryBookDetail'));

  // Test the controller
  describe('libraryBookDetailController', function() {
    var $httpBackend, ctrl;
    var bookData = {
        title: 'book1',
        rating: 100
    };

      beforeEach(function() {
          jasmine.addCustomEqualityTester(angular.equals);
      });

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/harry_potter.json').respond(bookData);

      $routeParams.bookId = 'harry_potter';

      ctrl = $componentController('libraryBookDetail');
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch the book details', function() {

      expect(ctrl.book).toEqual({});

      $httpBackend.flush();
      expect(ctrl.book).toEqual(bookData);
    });

  });

});
