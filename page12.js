function findSmallestInterval(numbers){

	let tmp = 0;
 		
 	if(numbers.length >=2 && numbers.length < 100000)
	 for(let i = 0; i< (numbers.length - 1); i++){

	 	for(let j = (i + 1); j <numbers.length; j++){

	 		tmp = numbers[i];
	 		numbers[i] = numbers[j];
	 		numbers[j] = tmp;

	 	}

	 }

	 return (numbers[1] - numbers[0]);



}