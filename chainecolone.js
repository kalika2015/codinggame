function reshape(n,str){
	//Enlever les espaces
	str = str.replace(/\s/g, '');

	for(var i = n; i < str.length; i = i + n){

		 str = [str.slice(0,i), "-", str.slice(i)].join('');
		 i++;

	}

	alert(str);

}

reshape(3,"abc de fghij");





