app.directive('nameCard', function () {
    return {
        templateUrl: 'directives/nameCard/nameCard.html'
    };
});

var url = "http://www.filltext.com/?rows=5&" +
    "fname={firstName}&" +
    "lname={lastName}&" +
    "company={business}&" +
    "city={city}&" +
    "email={email}&" +
    "phone={phone|format}&" +
    "pretty=true";

app.controller('NameCard', [function ($http) {
    var vm = this;
    $http.get(url)
        .then(function Success(response) {
            vm.cardData = response.data;
        }, function Error(response) {
            alert('The http request failed: ' + response.state);
        });
}]);

