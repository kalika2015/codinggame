/*
    La fonction  next retourne le plus petit entier, supérieur à  n ayant tous ses chiffres différents de ceux de  n.
    Par exemple  next(654321) doit retourner  700000.
    Si un tel entier n'existe pas, alors la fonction doit retourner  -1.
    Écrivez le corps de la fonction  next(n).
    Note : n est un entier strictement positif inférieur à 2^31 .
*/
function next(n) {
    if (n > 0 && n < Math.pow(2, 31)) {
        var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var arrayN = [];
        var tabChar = n.toString();
        for (var i of tabChar) {
            arrayN.push(parseInt(i));
        }
        console.log(arrayN);
        var diffNumbers = [];
        for (var j of numbers) {
            if (arrayN.indexOf(j) == -1) {
                diffNumbers.push(j);
            }
        }
        console.log(diffNumbers);
        if (diffNumbers.length == 0 || (diffNumbers.length == 1 && diffNumbers[0] == 0)) {
            return -1;
        }
        var firstNumber;
        console.log(verif(diffNumbers, arrayN[0]));
        if (!verif(diffNumbers, arrayN[0])) {
            var min = 1;
            var i = 0;
            while (i < diffNumbers.length && min > diffNumbers[i]) {
                if (diffNumbers[i] < min && diffNumbers[i] != 0) {
                    min = diffNumbers[i];
                }
                i++;
            }
            console.log(min);
            firstNumber = min;
        } else {
            var min = 1;
            var i = 0;
            while (i < diffNumbers.length) {
                if (diffNumbers[i] > arrayN[0]) {
                    min = diffNumbers[i];
                    break;
                }
                i++;
            }
            firstNumber = min;
        }
        console.log(firstNumber);
        var next = firstNumber.toString();
        while (parseInt(next) < n) {
            next += diffNumbers[0].toString();
        }
        return parseInt(next);
    } else {
        console.log(1);
        return 1;
    }
}
function verif(table, n) {
    bool = false;
    i = 0;
    while (i < table.length && !bool) {
        bool = table[i] > n;
        i++;
    }
    return bool;
}
console.log(next(654321));
