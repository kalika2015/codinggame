function calculateTotalPrice(prices, discount) {

	let maxprice = 0;

	if(prices.length < 100)
	for(let i = 0; i< prices.length; i++){
		if(prices[i] > maxprice)
			 maxprice = prices[i];

	}

	if(discount >=0 && discount <=100){

		maxprice = maxprice - (maxprice * discount)/100;
		maxprice = Math.floor(maxprice);


	}

	return maxprice;

	
 	
}