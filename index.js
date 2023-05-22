var fs = require("fs");

fs.appendFile("names.txt", "fileName \n", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("File names updated");
  }
});
