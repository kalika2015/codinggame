<script>
    /* La fonction JavaScript qui vous est présentée contient un bug. Votre objectif est de le trouver et de le corriger.

Vous devez implémenter la fonction convertToIntegers() qui prend en paramètre un tableau de strings. Chacune de ces strings représente un entier. La fonction doit donc les parser et retourner la liste de ces entiers.

Par exemple, convertToIntegers(["4", "7", "12"]) doit retourner [4, 7, 12].

Remarque: Pour avoir le score maximum, vous devez continuez à utiliser la fonction Array.map.*/
    function convertToIntegers(strings) {
        return strings ? strings.map(function(string){
            if(string){
                return parseInt(string);
            }
            return null;
        }) : null;
    }

    /* Factorial */
    function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n-1);
    }
}

/* average à completez tableau vide*/
    function average(table) {
        // Your code goes here
        var sum = 0;
        table.forEach(function(elt) {
            sum += elt;
        });
        return sum / table.length;
    }
    /* get next number*/
    function getNextNumber(s) {
        var sumDigitsInNumber = 0;
        var toStringS = s + "";
        for(let i=0; i<toStringS.length; i++) {
            sumDigitsInNumber += parseInt(toStringS[i]);
        }
        return s + sumDigitsInNumber;
    }

    function computeJoinPoint(s1, s2) {
        // Write your code here
        // To debug: console.error('Debug messages...');

        if(s1 <= 0 || s2 <= 0 || s1 >= 20000000 || s2 >= 20000000){
            return null;
        }

        while(s1 != s2) {
            if(s1 < s2){
                s1 = getNextNumber(s1);
            }else{
                s2 = getNextNumber(s2);
            }
        }

        return s1;
    }

</script>
