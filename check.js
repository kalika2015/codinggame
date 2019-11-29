
/*
    Exemples :  [()] est correcte,  (()[]) est correcte,  ([)] n'est pas correcte,  (( n'est pas correcte.
    Implémentez la fonction  check(s) qui de
*/
function check(s) {
    // Your code goes here
    var len = s.length;
    var stack = [];

    for (var i = 0; i < len; i++) {
        var char = s[i];
        if ('(['.indexOf(char) !== -1) {
            stack.push(char);
        } else if (')]'.indexOf(char) !== -1) {
            var top = stack.pop();

            if ((top === '(' && char !== ')') || (top === '[' && char !== ']')) {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false
    }
    return true;
}
