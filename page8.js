 var elements = [];
  var template = "Hello";
  var obj = {
    john: 12,
    brian: true,
    doe: 'hi',
    fred: false
 };
 
for (const [key, value] of Object.entries(obj)) {
   
     elements.push(template+"-"+key);
}
