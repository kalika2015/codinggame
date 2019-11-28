function computeJoinPoint(s1, s2) {
        
        
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

function getNextNumber(s) {
    var sumDigitsInNumber = 0;
    var toStringS = s + "";
    for(let i=0; i<toStringS.length; i++) {
        sumDigitsInNumber += parseInt(toStringS[i]);
    }
    return s + sumDigitsInNumber;
}