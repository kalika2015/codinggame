function isMultiple(n){


	if( (n% 3 == 0) || (n% 5 == 0) || (n%7 ==0)){

		return true;
	}
	return false;


}

function computeMultiplesSum(n){

	let some = 0;
    if(n>=0 && n < 1000)
    	
	for(let i = 0; i< n; i++){

		if(isMultiple(i))
			some  = some + i;

	}

	return some;

}