var fs = require("fs");

var movieData = JSON.parse(fs.readFileSync("movies.json").toString());

movieData.Year = 2002;

console.log(movieData);
