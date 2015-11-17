# Directives

This page has been rendered with **angular-md** [https://github.com/yaru22/angular-md](https://github.com/yaru22/angular-md)

## Tips

Using "namespace" for components e.g.:

```javascript
(function (){
	'use strict'

	angular.module('myApp')
	.directive('myAppHighlighter',myAppHighlighter);

	function myAppHighlighter() {
		//code
	}
})();
```

## Types of Directives

+ Components (Widget)
+ Decorators (ng-click, ng-show... Don't have template and add functionality)
+ Strutural/Templating (e.g. ng-repeat; manipulates the DOM)

## Types of Variables

+ = (input/output)
+ @ (only input)
+ & (for methods)

