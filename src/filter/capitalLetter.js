app.filter('capitalLetter', function () {
    return function (word) {
        return word.charAt(0).toUpperCase() + word.substring(1);
    }
});
