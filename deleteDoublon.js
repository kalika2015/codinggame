function filterDuplicates(data) {
	
    let unique = [];

    if(data.length >= 1)
		unique = [...new Set(data)];

	return unique;



}