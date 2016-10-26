app.directive('counterButton', ['counterButtonCtrl', function (counterButtonCtrl) {
    return {
        scope: { searchValue: '=' },
        controller: counterButtonCtrl,
        controllerAs: 'vm',
        bindToController: true,
        templateUrl: 'directives/counterButton/counterButton.html'
    }
}]);

app.factory('counterButtonCtrl', function () {
    return function () {
    }
});