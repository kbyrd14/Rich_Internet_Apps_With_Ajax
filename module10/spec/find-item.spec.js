describe("FindItemTest", function() {
  

	var $httpBackend;
	var ApiBasePath;
	
	var searchTerm;
	
	  beforeEach(function () {
		  
		  searchTerm = "A2";
		  
	    module('public');
	
	    inject(function ($injector) {
	      signUpService = $injector.get('SignUpService');
	      $httpBackend = $injector.get('$httpBackend');
	      ApiBasePath = $injector.get('ApiPath');
	    });
	  });
	
	  it('should find the item', function() {
	    $httpBackend.whenGET(ApiBasePath+"/menu_items/"+searchTerm+".json").respond({});
	    signUpService.findFavItemPromise(searchTerm).then(function(response) {
	      expect(response.data).toEqual({});
	    });
	    $httpBackend.flush();
	  });
	  
//	  it('should not find the item', function() {
//	    $httpBackend.whenGET(ApiBasePath+"/menu_items/"+searchTerm+searchTerm+".json").respond({});
//	    signUpService.findFavItemPromise(searchTerm).then(function(response) {
//	      expect(response.status)not.toEqual({});
//	    });
//	    $httpBackend.flush();
//	  });
});
