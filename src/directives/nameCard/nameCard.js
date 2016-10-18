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
            vm.url = "http://www.filltext.com/?rows=" + vm.cardCounter +
                     "&fname={firstName}&" + "lname={lastName}&" +
                     "company={business}&" + "city={city}&" +
                     "email={email}&" + "phone={phone|format}&";

            $http.get(vm.url)
                .then(function Success(response) {
                    vm.cardData = response.data;
                }, function Error(response) {
                    alert('The http request failed: ');
                });
        };
        vm.httpGet();
    };
}]);
