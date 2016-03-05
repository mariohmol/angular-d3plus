(function(){
	'use strict';

	angular.module('angular-d3plus', [])
	.directive('d3plusRadar',['angularD3plusUtils',function(angularD3plusUtils) {
		
	  return {
	  	restrict: 'E',
	  	scope: {
            data: '=',  
            container: '@',    
            id: '=',   
            size: '@?',
        },
        template: '<div>AEEE</div>',
	  	link: function($scope, $element, $attrs){
	  		$scope.$watch('data', function(data){
                if (data) {
                	$scope.viz.data(data).draw();
                }
            });
	  	},
	  	controller: function($scope, $element) {
	  		if(!$scope.viz)$scope.viz=d3plus.viz().container($scope.container);
	  		$scope.viz.id($scope.id).size($scope.size).type('radar');
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