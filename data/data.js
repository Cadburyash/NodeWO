const dataObj = {
  movieName: "Creeper jeepers",
  Year: 2001,
};

console.log(JSON.stringify(dataObj));

const fs = require("fs");

fs.writeFile("movies.json", JSON.stringify(dataObj), (err) => {
  if (err) {
    throw err;
  } else {
    console.log("file written");
  }
});
