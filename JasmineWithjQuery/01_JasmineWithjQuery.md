!SLIDE
# Jasmine With jQuery

!SLIDE small smbullets
# Testing the DOM
* Use the jasmine-jquery plugin
* [http://github.com/velesin/jasmine-jquery](http://github.com/velesin/jasmine-jquery)
* Allows you to build really simple markup documents to test elements as a unit.
* All the elements in the fixture(s) are addressable like normal via jQuery.

!SLIDE smaller code
    @@@javascript
    describe("MyObject", function() {
      
      beforeEach(function() {
        loadFixtures("someHtmlFile.html");
      });

      describe("MyMethod", function() {

        it("should make myElement visible", function() {
      
            MyObject.MyMethod();
          
            expect($('#myElement').is(':visible')).toEqual(true);

        });

      });

    });
