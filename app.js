var app = angular.module('arenaTierList', []);

app.controller('arenaTierListController', function($scope, $http) {
    $http.get('./cards.json').then(function(response) {
        $scope.cards = response.data;
    });

    $scope.sortType = 'name';
    $scope.pulledCards = [];
    
    $scope.clearPulled = function() {
        $scope.pulledCards = [];    
    };
    
    $scope.isRating = function(val) {
    	return function(card) {
	    	  return card.stats.rating == val;
   		}
    };
    
    $scope.pullCard = function(card) {
        if ($scope.pulledCards.length < 3) {
            $scope.pulledCards.push(card);
        }
    };
        
    $scope.sortBy = function(sort) {
        $scope.sortType = sort;
    };
});

app.directive('tooltip', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $('[data-toggle=tooltip]').hover(function(){
                // on mouseenter
                $(this).tooltip('show');
            }, function(){
                // on mouseleave
                $(this).tooltip('hide');
            });
        }
    };
});