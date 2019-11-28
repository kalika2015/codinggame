function count(n){
	let combinaisons = 0;
	if(n >=2 && n<=30000)
	combinaisons = factorial(n) / (2 * (factorial(n-2)));
	return combinaisons;

}

function factorial(n) {
if (n == 0) {
 return 1;
}
else {
	return n * factorial(n-1);
	}
}
