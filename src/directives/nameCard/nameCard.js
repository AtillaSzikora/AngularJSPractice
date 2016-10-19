app.directive('nameCard', ['nameCardCtrl', function (nameCardCtrl) {
    return {
        templateUrl: 'src/directives/nameCard/nameCard.html',
        controller: nameCardCtrl,
        controllerAs: 'nc'
    };
}]);

app.factory('nameCardCtrl', ['$http', function ($http) {
    return function () {
        var vm = this;
        vm.cardCounter = 3;
        vm.httpGet = function() {
            vm.url = "https://api.randomuser.me/?results=" + vm.cardCounter + "&inc=name,email,login,dob,cell,registered,picture";
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
