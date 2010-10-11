jQuery templating demo that includes metrics of a few different ways of inserting HTML.  Execution times are included for each method insterting 10000 list items.  The templates plugin is located at [http://github.com/jquery/jquery-tmpl] and the API is [http://api.jquery.com/category/plugins/templates/]

# TEMPLATING EXAMPLES
* example1: Uses a template that includes an {{each}} loop.
* example2: Builds upon example1 to include an {{if}} statement.

# TIMING DEMOS
All methods loop to create 10000 objects.

* method1: Appending html to a file using an $.each() loop appending each time. 
	* Execution times:
		* Firefox 3.5: 2973ms
		* Internet Explorer 6.0: 9579ms*
* method2: Building an array of html in an $.each() loop and appending it once with a .join() call.  
	* Execution times:
		* Firefox 3.5: 1605ms
		* Internet Explorer 6.0: 34766ms*
* method3: Building an array in a JavaScript foreach loop appending once with a .join() call.
	* Execution times:
		* Firefox 3.5: 582ms
		* Internet Explorer 6.0: 34516ms*
* method4: Building a jQuery template and using the .tmpl() and .appendTo() methods.
	* Execution times:
		* Firefox 3.5: 1555ms
		* Internet Explorer 6.0: 84189ms*

# TAKEAWAY
It appears at this point that the ([templating engine] (http://github.com/jquery/jquery-tmpl)) is a bit slower than building the html in an array and joining it.

The longest part of the process does seem to be the building of the output and not the rendering which was my first guess (for example one pass too 1505ms to create the objects and 345ms to append them).

*Note, IE6 seems to be having trouble dealing with the methods that rely on a large in memory object.  When only looping 100 times IE6's results look much like Firefox's.