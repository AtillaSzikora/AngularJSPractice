app.directive('nameCard', ['nameCardFactory', function (nameCardFactory) {
    return {
        scope: {user : '='},
        controller: nameCardFactory,
        controllerAs: 'vm',
        bindToController: true,
        templateUrl: 'directives/nameCard/nameCard.html'
    };
}]);

app.factory('nameCardFactory', ['$http', function ($http) {
    return function () {
        var vm = this;
        vm.searchValue = "";
    };
}]);
