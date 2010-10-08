jQuery templating demo that includes metrics of a few different ways of inserting HTML.  Execution times are included for each method insterting 10000 list items.

# EXAMPLES
* method1: Appending html to a file using an $.each() loop appending each time.  Execution time: 2973ms.
* method2: Building an array of html in an $.each() loop and appending it once with a .join() call.  Execution time: 1605ms.
* method3: Building an array in a JavaScript foreach loop appending once with a .join() call.  Execution time: 582ms.
* method4: Building a jQuery template and using the .tmpl() and .appendTo() methods.  Execution time: 1555ms.

# TAKEAWAY
It appears at this point that the templating engine ([http://github.com/jquery/jquery-tmpl]) likely does each append as it gets to it instead of building a single object.  These DOM manipulations are costly.  However, for reasonable amounts of data the simplicity and cleanliness of the templating solution makes it a good method to add elements.
