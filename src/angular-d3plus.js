(function(){
	'use strict';

	angular.module('angular-d3plus', [])

	.directive('d3plusBar',['angularD3plusUtils',function(angularD3plusUtils) {
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
	  	controller: function($scope, $element){angularD3plusUtils.controller($scope, $element,'bar');}
	  };
	}])
	.directive('d3plusBubbles',['angularD3plusUtils',function(angularD3plusUtils) {
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
	  	controller: function($scope, $element){angularD3plusUtils.controller($scope, $element,'bubbles');}
	  };
	}])
	.directive('d3plusBox',['angularD3plusUtils',function(angularD3plusUtils) {
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
	  	controller: function($scope, $element){angularD3plusUtils.controller($scope, $element,'box');}
	  };
	}])
	.directive('d3plusChart',['angularD3plusUtils',function(angularD3plusUtils) {
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
	  	controller: function($scope, $element){angularD3plusUtils.controller($scope, $element,'chart');}
	  };
	}])
	.directive('d3plusGeomap',['angularD3plusUtils',function(angularD3plusUtils) {
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
	  	controller: function($scope, $element){angularD3plusUtils.controller($scope, $element,'geo_map');}
	  };
	}])
	.directive('d3plusLine',['angularD3plusUtils',function(angularD3plusUtils) {
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
	  	controller: function($scope, $element){angularD3plusUtils.controller($scope, $element,'line');}
	  };
	}])
	.directive('d3plusNetwork',['angularD3plusUtils',function(angularD3plusUtils) {
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
	  	controller: function($scope, $element){angularD3plusUtils.controller($scope, $element,'network');}
	  };
	}])
	.directive('d3plusPaths',['angularD3plusUtils',function(angularD3plusUtils) {
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
	  	controller: function($scope, $element){angularD3plusUtils.controller($scope, $element,'paths');}
	  };
	}])
	.directive('d3plusPie',['angularD3plusUtils',function(angularD3plusUtils) {
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
	  	controller: function($scope, $element){angularD3plusUtils.controller($scope, $element,'pie');}
	  };
	}])
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
	.directive('d3plusRings',['angularD3plusUtils',function(angularD3plusUtils) {
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
	  	controller: function($scope, $element){angularD3plusUtils.controller($scope, $element,'rings');}
	  };
	}])
	.directive('d3plusSankey',['angularD3plusUtils',function(angularD3plusUtils) {
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
	  	controller: function($scope, $element){angularD3plusUtils.controller($scope, $element,'sankey');}
	  };
	}])
	.directive('d3plusScatter',['angularD3plusUtils',function(angularD3plusUtils) {
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
	  	controller: function($scope, $element){angularD3plusUtils.controller($scope, $element,'scatter');}
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
	.directive('d3plusTable',['angularD3plusUtils',function(angularD3plusUtils) {
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
	  	controller: function($scope, $element){angularD3plusUtils.controller($scope, $element,'table');}
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

	

	.factory('angularD3plusUtils', function(){
		var services= {
			myid: function($scope,$element){
				var name;
				if($scope.container) name = $scope.container;
				else if($element) name = $element.container;
				else if($scope.viz) name = $scope.viz.container();
				console.log(name);
				return name;
	  		},
	  		template: function($scope){
	  			var divid;
	  			if(!$scope.container){
	  				divid='d3plus-'+new Date().getTime();
	  				$scope.container='#'+divid;
	  				if($scope.length>0)$scope[0].container=$scope.container;
	  			}
	        	return '<div id="'+divid+'"></div>';
	        },
		  	link: function($scope, $element, $attrs){
		  		$scope.$watch('data', function(data){
	                if (data) {
	                	$scope.viz.data(data).draw();
	                }
	            });
		  	},
		  	controller: function($scope, $element,type) {
		  		$scope.viz=d3plus.viz().container(services.myid($scope,$element));
		  		if($scope.id) $scope.viz.id($scope.id);
		  		if($scope.size) $scope.viz.size($scope.size);
		  		$scope.viz.type(type);
		  	}
		};
		return services;
	});
})();