# angular-d3plus

Angular directive for d3plus charts

`bower install angular-d3plus`

Live example:

* http://codepen.io/mariomol/pen/vGNQaV

Some opensource projects using:

* https://github.com/mariohmol/rivescript-viz
* https://github.com/mariohmol/voos-fab


```
├── Gruntfile.js
├── LICENSE
├── README.md
├── bower.json
├── dist
│   └── angular-d3plus.min.js
├── package.json
├── src
│   └── angular-d3plus.js
└── test
    └── index.html
```

## How to use it

Install and include in your app:

```js
  var app = angular.module('d3plusApp', ['angular-d3plus']);
```

Put some data in scope:

```js
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
<d3plus-network data="network_data" nodes="network_positions" edges="network_connections" id="name" size="size"  ></d3plus-network>
<d3plus-pie data="sample_data" id='["name", "skill"]' size="value" ></d3plus-pie>
<d3plus-radar data="sample_data" id='["name", "skill"]' size="value" ></d3plus-radar>
<d3plus-rings data="sample_data" edges="rings_edges" focus="alpha"></d3plus-rings>
<d3plus-scatter data="scatter_data" id='type' size="value"  x="value" y="weight" ></d3plus-scatter>
<d3plus-stacked data="base_data" id='name' text='name' x="year" y="value" ></d3plus-stacked>
<d3plus-treemap data="sample_data" id='name' size="value" ></d3plus-treemap>
```

If you would like to collaborate, you can make dev in `angular-d3plus.js` and use `test/index.html` to test it.
You will need to run like this command and open http://localhost:8000/test/ in your browse:

```bash
python -m SimpleHTTPServer 8000
```

### Assync

If you need to consume a external API or backend server and just after that pass your data to the `angular-d3plus`, you can use a broadcast call.

In this example I will show how to pass data to a classic view, using just one data object, and a network, that needs more than just one.

First add in your view both tags, in this example a `treemap` and a `network`. Remember to give them a `elementid`, it will be used to identify the element when u have the data.

```html
<d3plus-treemap elementid='mytreemap' data="sample_data" size="value" ></d3plus-treemap>
<d3plus-network elementid="mynetwork" size="size" id="name" data="nodes" edges="connections"></d3plus-network>
```


```javascript
$scope.$broadcast("DataReady",{elementid: "mytreemap", data: $scope.sample_data });
$scope.$broadcast("DataReady",{elementid: "mypie", data: $scope.nodes,  edges: $scope.connections });
```     

Here a example using network with arrows and connections with labels:

```js
$scope.$broadcast("DataReady", {
    elementid: "mynetwork",
    edges: {
        "label": "trigger",
        "value": $scope.connections
    },
    edgesarrows: true
});
```

# Want to Help?

You can collaborate if you want!  Clone this repository then run `npm install` and `npm run test`.

After a development run:

* npm run pretest
* npm run build

## TODO

* Sankey not working: Best solution:

```html
 <d3plus-sankey edges="sankey_edges" nodes="sankey_nodes" size="100"    id='id'
   focus="{'tooltip': false,'value': 'gamma'}" ng-show="charttype=='sankey'" ></d3plus-sankey>
```

* Group Stacked Bar: missing a example

```html
<d3plus-bar data="barstacked_data" id='["group", "name"]' depth="1" size="value" x="name" y="year"
  time="year" ng-show="charttype=='groupedbar'" ></d3plus-bar>
```

* Geo map - need this file on web withou CORS: http://bl.ocks.org/davelandry/raw/9042807/countries.json

```html
    <d3plus-geomap data="geo_data" id="country" color="value"  tooltip="value" text="name"
  coords='{
      "solo": ["euesp","euita","eufra","euprt"],
      "value": "http://bl.ocks.org/davelandry/raw/9042807/countries.json"
    }'
  ng-show="charttype=='geomap'" ></d3plus-geomap>
```

 * Tabe data example

```html
  <d3plus-table data="table_data" cols="[foo', 'bar', 'baz']" shape="check" id="index" ng-show="charttype=='table'"></d3plus-table>
```
