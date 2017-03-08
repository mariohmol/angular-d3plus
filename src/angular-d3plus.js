(function() {
    'use strict';

    angular.module('angular-d3plus', [])
        .directive('d3plusBar', ['angularD3plusUtils', function(angularD3plusUtils) {
            return {
                restrict: 'AE',
                scope: angularD3plusUtils.scope({
                    data: '=',
                    id: '@',
                    x: '@',
                    y: '@',
                    time: '@?',
                    size: '@?'
                }),
                template: angularD3plusUtils.template,
                link: angularD3plusUtils.link,
                controller: ['$scope', '$element', function($scope, $element) {
                    angularD3plusUtils.controller($scope, $element, 'bar');
                }]
            };
        }])
        .directive('d3plusBubbles', ['angularD3plusUtils', function(angularD3plusUtils) {
            return {
                restrict: 'AE',
                scope: angularD3plusUtils.scope({
                    data: '=',
                    id: '@',
                    depth: '@',
                    size: '@?'
                }),
                template: angularD3plusUtils.template,
                link: angularD3plusUtils.link,
                controller: ['$scope', '$element', function($scope, $element) {
                    angularD3plusUtils.controller($scope, $element, 'bubbles');
                }]
            };
        }])
        .directive('d3plusBox', ['angularD3plusUtils', function(angularD3plusUtils) {
            return {
                restrict: 'AE',
                scope: angularD3plusUtils.scope({
                    data: '=',
                    id: '@',
                    x: '@',
                    y: '@',
                    size: '@?'
                }),
                template: angularD3plusUtils.template,
                link: angularD3plusUtils.link,
                controller: ['$scope', '$element', function($scope, $element) {
                    angularD3plusUtils.controller($scope, $element, 'box');
                }]
            };
        }])
        .directive('d3plusGeomap', ['angularD3plusUtils', function(angularD3plusUtils) {
            return {
                restrict: 'AE',
                scope: angularD3plusUtils.scope({
                    data: '=',
                    coords: '=',
                    id: '@',
                    text: '@?',
                    size: '@?'
                }),
                template: angularD3plusUtils.template,
                link: angularD3plusUtils.link,
                controller: ['$scope', '$element', function($scope, $element) {
                    angularD3plusUtils.controller($scope, $element, 'geo_map');
                }]
            };
        }])
        .directive('d3plusLine', ['angularD3plusUtils', function(angularD3plusUtils) {
            return {
                restrict: 'AE',
                scope: angularD3plusUtils.scope({
                    data: '=',
                    id: '@',
                    x: '@',
                    y: '@',
                    text: '@?',
                    size: '@?'
                }),
                template: angularD3plusUtils.template,
                link: angularD3plusUtils.link,
                controller: ['$scope', '$element', function($scope, $element) {
                    angularD3plusUtils.controller($scope, $element, 'line');
                }]
            };
        }])
        .directive('d3plusNetwork', ['angularD3plusUtils', function(angularD3plusUtils) {
            return {
                restrict: 'AE',
                scope: angularD3plusUtils.scope({
                    data: '=',
                    id: '@',
                    size: '@?',
                    nodes: '=',
                    edges: '='
                }),
                template: angularD3plusUtils.template,
                link: angularD3plusUtils.link,
                controller: ['$scope', '$element', function($scope, $element) {
                    angularD3plusUtils.controller($scope, $element, 'network');
                }]
            };
        }])
        .directive('d3plusPaths', ['angularD3plusUtils', function(angularD3plusUtils) {
            return {
                restrict: 'AE',
                scope: angularD3plusUtils.scope({
                    data: '=',
                    id: '@',
                    size: '@?'
                }),
                template: angularD3plusUtils.template,
                link: angularD3plusUtils.link,
                controller: ['$scope', '$element', function($scope, $element) {
                    angularD3plusUtils.controller($scope, $element, 'paths');
                }]
            };
        }])
        .directive('d3plusPie', ['angularD3plusUtils', function(angularD3plusUtils) {
            return {
                restrict: 'AE',
                scope: angularD3plusUtils.scope({
                    data: '=',
                    id: '@',
                    size: '@?'
                }),
                template: angularD3plusUtils.template,
                link: angularD3plusUtils.link,
                controller: ['$scope', '$element', function($scope, $element) {
                    angularD3plusUtils.controller($scope, $element, 'pie');
                }]
            };
        }])
        .directive('d3plusRadar', ['angularD3plusUtils', function(angularD3plusUtils) {
            return {
                restrict: 'E',
                scope: angularD3plusUtils.scope({
                    data: '=',
                    id: '@',
                    size: '@?',
                }),
                template: angularD3plusUtils.template,
                link: angularD3plusUtils.link,
                controller: ['$scope', '$element', function($scope, $element) {
                    angularD3plusUtils.controller($scope, $element, 'radar');
                }]
            };
        }])
        .directive('d3plusRings', ['angularD3plusUtils', function(angularD3plusUtils) {
            return {
                restrict: 'AE',
                scope: angularD3plusUtils.scope({
                    data: '=',
                    edges: '=',
                    size: '@?'
                }),
                template: angularD3plusUtils.template,
                link: angularD3plusUtils.link,
                controller: ['$scope', '$element', function($scope, $element) {
                    angularD3plusUtils.controller($scope, $element, 'rings');
                }]
            };
        }])
        .directive('d3plusSankey', ['angularD3plusUtils', function(angularD3plusUtils) {
            return {
                restrict: 'AE',
                scope: angularD3plusUtils.scope({
                    id: '@',
                    edges: '=',
                    nodes: '=',
                    focus: '@',
                    size: '@?'
                }),
                template: angularD3plusUtils.template,
                link: angularD3plusUtils.link,
                controller: ['$scope', '$element', function($scope, $element) {
                    angularD3plusUtils.controller($scope, $element, 'sankey');
                }]
            };
        }])
        .directive('d3plusScatter', ['angularD3plusUtils', function(angularD3plusUtils) {
            return {
                restrict: 'AE',
                scope: angularD3plusUtils.scope({
                    data: '=',
                    id: '@',
                    y: '@',
                    x: '@',
                    type: '@?'
                }),
                template: angularD3plusUtils.template,
                link: angularD3plusUtils.link,
                controller: ['$scope', '$element', function($scope, $element) {
                    angularD3plusUtils.controller($scope, $element, 'scatter');
                }]
            };
        }])
        .directive('d3plusStacked', ['angularD3plusUtils', function(angularD3plusUtils) {
            return {
                restrict: 'AE',
                scope: angularD3plusUtils.scope({
                    data: '=',
                    text: '@',
                    y: '@',
                    id: '@',
                    x: '@?'
                }),
                template: angularD3plusUtils.template,
                link: angularD3plusUtils.link,
                controller: ['$scope', '$element', function($scope, $element) {
                    angularD3plusUtils.controller($scope, $element, 'stacked');
                }]
            };
        }])
        .directive('d3plusTable', ['angularD3plusUtils', function(angularD3plusUtils) {
            return {
                restrict: 'AE',
                scope: angularD3plusUtils.scope({
                    id: '@',
                    cols: '@',
                    shape: '@'
                }),
                template: angularD3plusUtils.template,
                link: angularD3plusUtils.link,
                controller: ['$scope', '$element', function($scope, $element) {
                    angularD3plusUtils.controller($scope, $element, 'table');
                }]
            };
        }])
        .directive('d3plusTreemap', ['angularD3plusUtils', function(angularD3plusUtils) {
            return {
                restrict: 'AE',
                scope: angularD3plusUtils.scope({
                    data: '=',
                    id: '@',
                    size: '@?'
                }),
                template: angularD3plusUtils.template,
                link: angularD3plusUtils.link,
                controller: ['$scope', '$element', function($scope, $element) {
                    angularD3plusUtils.controller($scope, $element, 'tree_map');
                }]
            };
        }])
        .factory('angularD3plusUtils', function() {
            var services = {
                myid: function($scope, $element) {
                    var name;
                    if ($scope.container) name = $scope.container;
                    else if ($element) name = '#' + $element[0].children[0].id;
                    else if ($scope.viz) name = $scope.viz.container();
                    return name;
                },
                template: function($scope) {
                    var divid;
                    if (!$scope.container) {
                        divid = 'd3plus-' + new Date().getTime() + Math.floor((Math.random() * 10) + 1);
                        $scope.container = '#' + divid;
                        if ($scope.length > 0) $scope[0].container = $scope.container;
                    }
                    var style = '';
                    if ($scope[0].attributes['style'])
                        style = $scope[0].attributes['style'].nodeValue;
                    return '<div id="' + divid + '" style="' + style + '"></div>';
                },
                link: function($scope, $element, $attrs) {
                    $scope.$watch('data', function(data) {
                        if (data && data.length > 0) {
                            $scope.viz.data(data).draw();
                        }
                    });
                    $scope.$on('DataReady', function(event, args) {
                        if (args.elementid === $scope.elementid) {
                            if (args.data && args.data.length > 0) $scope.viz.data(args.data);
                            if (args.nodes) $scope.viz.nodes(args.nodes);
                            if (args.edges) {
                              $scope.viz.edges(args.edges);
                              if(args.edgesarrows) $scope.viz.edges({'arrows': args.edgesarrows});
                            }
                            $scope.viz.draw();
                        }
                    });
                },
                controller: function($scope, $element, type) {
                    $scope.viz = d3plus.viz().container(services.myid($scope, $element));
                    if ($scope.color) services.setvar($scope.viz.color, $scope.color);
                    if ($scope.cols) services.setvar($scope.viz.cols, $scope.cols);
                    if ($scope.depth) $scope.viz.depth(Math.round($scope.depth));
                    if ($scope.nodes) services.setvar($scope.viz.nodes, $scope.nodes);
                    if ($scope.edges) services.setvar($scope.viz.edges, $scope.edges);
                    if ($scope.focus) services.setvar($scope.viz.focus, $scope.focus);
                    if ($scope.id) services.setvar($scope.viz.id, $scope.id);
                    if ($scope.shape) services.setvar($scope.viz.shape, $scope.shape);
                    if ($scope.size) services.setvar($scope.viz.size, $scope.size);
                    if ($scope.time) services.setvar($scope.viz.time, $scope.time);
                    if ($scope.x) services.setvar($scope.viz.x, $scope.x);
                    if ($scope.y) services.setvar($scope.viz.y, $scope.y);
                    if ($scope.coords) services.setvar($scope.viz.coords, $scope.coords);
                    if ($scope.tooltip) services.setvar($scope.viz.tooltip, $scope.tooltip);
                    $scope.viz.type(type);
                },
                scope: function(typescope) {
                    typescope.data = '=';
                    typescope.container = '@?';
                    typescope.style = '@?';
                    typescope.focus = '@?';
                    typescope.tooltip = '@?';
                    typescope.elementid = '@?';
                    typescope.config = '@?';
                    return typescope;
                },
                setvar: function(func, val) {
                    try {
                        var parsed = JSON.parse(val);
                        if (parsed) func(parsed);
                        else func(val);
                    } catch (e) {
                        func(val);
                    }
                }
            };
            return services;
        });
})();
