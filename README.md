# angular-d3plus

Angular directive for d3plus charts

`bower install angular-d3plus`

Live example:

* http://codepen.io/mariomol/pen/vGNQaV



## How to use it

Install and include in your app:

```
  var app = angular.module('d3plusApp', ['angular-d3plus']);
```

Put some data in scope:

```
  app.controller('ExamplesController', function($scope) {
        $scope.base_data = [
          {"year": 1991, "name":"alpha", "value": 15, "group": "black"},
          {"year": 1991, "name":"beta", "value": -10, "group": "black"},
          {"year": 1991, "name":"gamma", "value": 5, "group": "black"},
          {"year": 1991, "name":"delta", "value": -50, "group": "black"},
        ];
  });
```

Use in your templates:

```html
<d3plus-bar data="base_data" id='name' x="year" y="value" size="value" ></d3plus-bar>
<d3plus-bubbles data="bubbles_data" id='["group", "name"]' size="value" color="group"  depth="1" ></d3plus-bubbles>
<d3plus-box data="base_data" id='name' y="value" x="year"  ></d3plus-box>
<d3plus-line data="base_data" id='name' text='name'  x="year" y="value" ></d3plus-line>
<d3plus-network data="network_data" nodes="network_positions" edges="network_connections" id="name"
  size="size"  ></d3plus-network>
<d3plus-pie data="sample_data" id='["name", "skill"]' size="value" ></d3plus-pie>
<d3plus-radar data="sample_data" id='["name", "skill"]' size="value" ></d3plus-radar>
<d3plus-rings data="sample_data" edges="rings_edges" focus="alpha"></d3plus-rings> 
<d3plus-scatter data="scatter_data" id='type' size="value"  x="value" y="weight" ></d3plus-scatter>
<d3plus-stacked data="base_data" id='name' text='name' x="year" y="value" ></d3plus-stacked>
<d3plus-treemap data="sample_data" id='name' size="value" ></d3plus-treemap>
```

If you would like to colaborate, you can make dev in angular-d3plus.js and use test/index.html to test it. 
You will need to run like this command and open http://localhost:8000/test/ in your browse:

```
python -m SimpleHTTPServer 8000
```

## TODO



* Sankey not working: Best solution:

```
 <d3plus-sankey edges="sankey_edges" nodes="sankey_nodes" size="100"    id='id' 
  ng-show="charttype=='sankey'" focus="{'tooltip': false,'value': 'gamma'}"></d3plus-sankey>
```

* Group Bap: missing example

```
<d3plus-bar data="barstacked_data" id='["group", "name"]' depth="1" size="value" x="name" y="year"
  time="year" ng-show="charttype=='groupedbar'" ></d3plus-bar>
```

* Geo map - need this file on web withou CORS: http://bl.ocks.org/davelandry/raw/9042807/countries.json

```	`
    <d3plus-geomap data="geo_data" id="country" color="value"  tooltip="value" text="name" 
  coords='{
      "solo": ["euesp","euita","eufra","euprt"],
      "value": "http://bl.ocks.org/davelandry/raw/9042807/countries.json"
    }'
  ng-show="charttype=='geomap'" ></d3plus-geomap>
```

 * Tabe data example

```
  <d3plus-table data="table_data" cols="[foo', 'bar', 'baz']" shape="check" id="index" ng-show="charttype=='table'"></d3plus-table>
```


