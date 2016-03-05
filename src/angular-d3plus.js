(function(){
	'use strict';

	angular.module('angular-d3plus', [])
	.directive('d3plusRadar',['angularD3plusUtils',function(angularD3plusUtils) {
		
	  return {
	  	restrict: 'E',
	  	scope: {
            data: '=',  
            container: '@?',    
            id: '=',   
            size: '@?',
        },
        template:  angularD3plusUtils.template,
	  	link: angularD3plusUtils.link,
	  	controller: function($scope, $element){angularD3plusUtils.controller($scope, $element,'radar');}
	  };
	}])
	.directive('d3plusTreemap',['angularD3plusUtils',function(angularD3plusUtils) {
	  return {
	  	restrict: 'AE',
	  	scope: {
            data: '=', 
            id: '=',  
            container: '@?',    
            size: '@?'
        },
        template:  angularD3plusUtils.template,
	  	link: angularD3plusUtils.link,
	  	controller: function($scope, $element){angularD3plusUtils.controller($scope, $element,'treemap');}
	  };
	}])
	.directive('d3plusStacked',['angularD3plusUtils',function(angularD3plusUtils) {
	  return {
	  	restrict: 'AE',
	  	scope: {
            data: '=', 
            id: '=',  
            container: '@?',    
            size: '@?'
        },
        template:  angularD3plusUtils.template,
	  	link: angularD3plusUtils.link,
	  	controller: function($scope, $element){angularD3plusUtils.controller($scope, $element,'stacked');}
	  };
	}])
	.factory('angularD3plusUtils', function(){
		var services= {
			myid: function($scope,$element){
				var name;
				if($scope.container) name = $scope.container;
				else if($scope.length>0) name = $scope[0].container;
				else if($element) name = $element.container;
				else if($scope.viz) name = $scope.viz.container();
				console.log(name);
				return name;
	  		},
	  		template: function($scope){
	  			if(!$scope.container){
	  				$scope.container="d3plusRadar-"+new Date().getTime()
	  				if($scope.length>0)$scope[0].container=$scope.container;
	  			}
	        	return '<div id="'+services.myid($scope)+'"></div>'
	        },
		  	link: function($scope, $element, $attrs){
		  		$scope.$watch('data', function(data){
	                if (data) {
	                	$scope.viz.data(data).draw();
	                }
	            });
		  	},
		  	controller: function($scope, $element,type) {
		  		$scope.viz=d3plus.viz().container("#"+services.myid($scope,$element));
		  		if($scope.id) $scope.viz.id($scope.id);
		  		if($scope.size) $scope.viz.size($scope.size);
		  		$scope.viz.type(type);
		  	}
		};
		return services;
	});
})();