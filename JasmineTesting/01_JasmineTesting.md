!SLIDE small smbullets
# Jasmine Lets You Test JavaScript
* [http://pivotal.github.com/jasmine/index.html](http://pivotal.github.com/jasmine/index.html)
* Uses BDD syntax
* DOMless (for testing in JS objects, not DOM elements)

!SLIDE smaller code
# Example
    @@@javascript
    describe("MyObject", function() {

      describe("MyMethod", function() {

        it("Takes X and Returns Y", function() {
          var result = myObject.MyMethod(X);
          expect(result).toEqual(Y);
        });

      });

    });

!SLIDE small smbullets
# This Is Cool
* Complex objects can be tested in memory only (fast!).
* Lets you treat JavaScript objects like we do back end classes.
* Leaves a lot of behavior untested because of no DOM (sad).
