app.directive('nameCard', ['nameCardCtrl', function (nameCardCtrl) {
    return {
        templateUrl: 'directives/nameCard/nameCard.html',
        controller: nameCardCtrl,
        controllerAs: 'nc'
    };
}]);

app.factory('nameCardCtrl', ['$http', function ($http) {
    return function () {
        var vm = this;
        vm.cardCounter = 2;
        vm.searchValue = "";
        vm.httpGet = function() {
            vm.url = "https://api.randomuser.me/?results=" + vm.cardCounter + "&inc=name,email,login,location,cell,picture";
            $http.get(vm.url)
                .then(function Success(response) {
                    vm.cardData = response.data.results;
                }, function Error(response) {
                    alert('The http request failed: ');
                });
        };
        vm.httpGet();
    };
}]);
