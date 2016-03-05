(function(){
	'use strict';

	angular.module('angular-d3plus', [])
	.directive('d3plus-treemap', function() {
	  return {
	  	restrict: 'AE',
	  	link: function(scope, element, attrs){
	  	},
	    templateUrl: function(elem, attr){
	      return 'customer-'+attr.type+'.html';
	    }
	  };
	})
	.factory('angular-d3plus-utils', function(){
	});
})();