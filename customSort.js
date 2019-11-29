/*
    Implémentez la fonction  customSort(table, criteria) .
    Le premier argument de  customSort()  est un tableau d'objets JavaScript. La fonction devra trier le
    tableau selon la propriété donnée par le second argument  criteria dans un ordre décroissant .
    La propriété désigné par  criteria  est de type numérique.
*/
var a = [{a: 2}, {a: 3}, {a: 1}];

function customSort(table, criteria) {
    // console.log(Object.keys(table));
    return table.sort(function (a, b) {
        return b.criteria - a.criteria;
    });
}
