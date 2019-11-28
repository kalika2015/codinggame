function convertToIntegers(strings) {
        return strings ? strings.map(function(string){
            if(string){
                return parseInt(string);
            }
            return null;
        }) : null;
    }
