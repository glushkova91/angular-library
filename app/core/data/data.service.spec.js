'use strict';

describe('apiService getBooksData', function() {
  var $httpBackend;
  var apiService;
  var booksData = [
    {name: 'Book 1'},
    {name: 'Book 2'},
    {name: 'Book 3'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `apiService` service before each test
  beforeEach(module('core.data'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _apiService_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('data/books.json').respond(booksData);

    apiService = _apiService_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the books data from `/data/books.json`', function() {
    var books = apiService.getBooksData().query();

    expect(books).toEqual([]);

    $httpBackend.flush();
    expect(books).toEqual(booksData);
  });

});
describe('apiService getAuthorsData', function() {
  var $httpBackend;
  var apiService;
  var authorsData = [
    {name: 'Author 1'},
    {name: 'Author 2'},
    {name: 'Author 3'}
  ];


  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `apiService` service before each test
  beforeEach(module('core.data'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _apiService_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('data/authors.json').respond(authorsData);

    apiService = _apiService_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the authors data from `/data/authors.json`', function() {
    var authors = apiService.getAuthorsData().query();

    expect(authors).toEqual([]);

    $httpBackend.flush();
    expect(authors).toEqual(authorsData);
  });
});

describe('apiService getBookDetail', function() {
  var $httpBackend;
  var apiService;
  var bookData = {
    title: 'book title',
    year: '1990'
  };

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `apiService` service before each test
  beforeEach(module('core.data'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _apiService_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('data/harry_potter.json').respond(bookData);

    apiService = _apiService_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the books data from `/data/harry_potter.json`', function() {
    var book = apiService.getBookDetail().get({bookId: 'harry_potter'});

    $httpBackend.flush();
    expect(book).toEqual(bookData);
  });
});