function isTwin(t1,t2){

	
	t1 = t1.toLowerCase();
	t2 = t2.toLowerCase();

	let cpt = 0;
	if(t1.length == t2.length)
	for(let i= 0; i < t1.length; i++){
		for(let j =0; j< t2.length; j++){
	    	
	        if(t1[i] == t2[j])
	        cpt ++;
	    
	    }
		

	}

	if(cpt == t1.length)
	return true;
	else
	return false;

}