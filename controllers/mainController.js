app.controller('mainController', ['$http', function ($http) {
    var vm = this;
    vm.test = "";

    vm.cardCounter = 4;
    vm.httpGet = function() {
        vm.url = "https://api.randomuser.me/?results=" + vm.cardCounter + "&inc=name,email,login,location,cell,picture";
        $http.get(vm.url)
            .then(function Success(response) {
                vm.userData = response.data.results;
                vm.user = vm.userData[0];
            }, function Error(response) {
                alert('The http request failed: ');
            });
    };
    vm.httpGet();


}]);
