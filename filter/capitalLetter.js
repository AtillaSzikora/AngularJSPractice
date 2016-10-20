app.filter('capitalLetter', function () {
    return function (words) {
        var result = "";
        words.split(' ').forEach(function (word) {
            result += word.charAt(0).toUpperCase() + word.substring(1) + " ";
        });
        return result;
    }
});
