(function() {
	'use strict';

	angular.module("app")
	.directive('userList',['$compile',userList]);

	function userList($compile) {
		return {
				restrict: 'A',
				link: link,
				transclude: 'element'
			};
		
		function link(scope,el,attr,ctrl,transclude) {
			var pieces = attr.userList.split(' ');
			var itemString = pieces[0];
			var collectionName = pieces[2];
			var elements = [];

			var stopWatch = scope.$watchCollection(collectionName, function(newVal, oldVal) {
				var collection = newVal;

				if(elements.length > 0){
					for (var i = 0; i < elements.length; i++) {
						elements[i].el.remove();
						elements[i].scope.$destroy();
					};
					elements = [];
				}

				for (var i = collection.length - 1; i >= 0; i--) {
					var childScope = scope.$new();
					childScope[itemString] = collection[i];
					transclude(childScope, function(clone) {
						var template = $compile('<div class="panel panel-primary">'+
							'<div class="panel-heading">'+
								'{{'+itemString+'.name}}'+
							'</div>'+
							'<div class="panel-body"></div>'+
						'</div>');
						var wrapper = template(childScope);
						//find just works limited by tag name
						wrapper.find("div").eq(1).append(clone);

						el.after(wrapper);
						var item = {};
						item.el = wrapper;
						item.scope = childScope;
						elements.push(item);
					});
				};
			});
		}
		
	}
})();