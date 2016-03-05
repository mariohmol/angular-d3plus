(function(){
	'use strict';

	angular.module('angular-d3plus', [])
	.directive('d3plusRadar',['angularD3plusUtils',function(angularD3plusUtils) {
		
	  return {
	  	restrict: 'E',
	  	scope: {
            data: '=',  
            container: '=',    
            id: '=',   
            size: '=?'
        },
        template: '<div>AEEE</div>',
	  	link: function(scope, element, attrs){
	  		scope.$watch('data', function(data){
                if (data) {
                    if (scope.onReady && typeof scope.onReady() === 'function') scope.onReady()(scope, element);
                }
            });
	  	},
	  	controller: function($scope, $element) {
	  	}
	  };
	}])
	.directive('d3plusTreemap',['angularD3plusUtils',function(angularD3plusUtils) {
	  return {
	  	restrict: 'AE',
	  	scope: {
            data: '=',  
            container: '=',    
            id: '=',   
            size: '=?'
        },
	  	link: function(scope, element, attrs){
	  		console.log('oioio');
	  	},
	    template: '<div></div>'
	  };
	}])
	.factory('angularD3plusUtils', function(){
		return {
			log: function(){
				console.log('log');
			}
		};
	});
})();