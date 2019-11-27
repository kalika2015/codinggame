function isTwin(a,b){

	let cpt = 0;

	if(a.length == b.length){

		for(let i =0; i< a.length; i++){

			for(let j = i; j < b.length; j++){

				if(a[i] == b[j])
					cpt = cpt + 1;
				    break;

			}
		}

	}

	if(cpt == a.length)
		return true;
	return false;
}