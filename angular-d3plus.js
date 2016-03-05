

angular.module('angular-d3plus', [])
.directive('d3plus-treemap', function() {
  return {
    templateUrl: function(elem, attr){
      return 'customer-'+attr.type+'.html';
    }
  };
});