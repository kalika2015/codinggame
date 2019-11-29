/*
    Inplémentez la fonction  average(table).
    La fonction doit renvoyer la valeur moyenne du tableau  table  donné en paramètre.
    Table  est toujours un tableau défini, et ne contient que des nombres.
   Average  doit retourner  0  si  table  est vide.
*/
function average(table) {
    var sum = 0;
    if (table.length !== 0) {
        for (var i = 0; i < table.length; i++) {
            sum += table[i];
        }
        return (sum / table.length);
    } else {
        return 0;
    }
}
