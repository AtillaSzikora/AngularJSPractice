app.directive('counterButton', function () {
    return {
        templateUrl: 'directives/counterButton/counterButton.html'
    };
});

app.controller('CounterCtrl', [function () {
    var vm = this;
    vm.counterValue = 3;
    return vm.counterValue;
}]);