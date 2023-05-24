var fs = require("fs");

var movieData = JSON.parse(fs.readFileSync("movies.json").toString());

movieData.Year = 2002;

console.log(movieData);

fs.writeFile("movies.json", JSON.stringify(movieData), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Files updated");
  }
});
