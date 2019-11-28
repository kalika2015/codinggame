function closestToZero(numbers){

	short(numbers);

	let clospos = minPositive(numbers);
  let closneg = maxNegative(numbers);

  return distanceToZero(closneg,clospos);

}

function short(numbers){

	let tmp = 0;

	for(let i = 0; i< (numbers.length - 1); i++){

		for(let j =(i + 1); j< numbers.length; j++){

			 if(numbers[i] > numbers[j]){

			 	tmp = numbers[i];
			 	numbers[i] = numbers[j];
			 	numbers[j] = tmp;
			 }

		}

	}

}
function SizeNegative(numbers){

	short(numbers);
    
    let val = 0;
    
   for(let i = 0; i< numbers.length; i++){
   		if(numbers[i] < 0){
        	val ++;
        
        }
   
   }
   
   return val;


}
function maxNegative(numbers){

	 short(numbers);
    
   let val = 0;
    
   for(let i = 0; i< numbers.length; i++){
   		if(numbers[i] < 0){
        	val ++;
        
        }
   
   }
   
   return numbers[val-1];


}
function minPositive(numbers){

	short(numbers);
    
    let minval = SizeNegative(numbers);
    
    let min = numbers[minval];
    while(min == 0){
    	minval++;
        min =numbers[minval];
    
    }
    
    for(let i =minval; i< numbers.length; i++){
    
    	if(min > numbers[i])
        	min = numbers[i];
    
    }
    
    return min;
    
}
function distanceToZero(v1,v2){
  let vabs = Math.abs(v1);

  if(vabs < v2)
  	return v1;
  else 
  	if(vabs > v2)
    return v2;
   else
   return v2;

}


