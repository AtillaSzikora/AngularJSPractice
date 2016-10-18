app.directive('counterButton', ['nameCardCtrl', function (nameCardCtrl) {
    return {
        templateUrl: 'src/directives/counterButton/counterButton.html',
        controller: nameCardCtrl,
        controllerAs: 'nc'
    };
}]);
