var Converter = require("csvtojson").Converter;
var converter = new Converter({});
 
//end_parsed will be emitted once parsing finished 
converter.on("end_parsed", function (jsonArray) {
	 
   require("fs").writeFile('message.json', JSON.stringify(jsonArray),"utf8" ,function(err) {
  if (err) throw err;
  console.log('It\'s saved!');
});
});
 
//read from file 
require("fs").createReadStream("./file.csv",{encoding:"utf8"}).pipe(converter);