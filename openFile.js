const fs = require("fs");

fs.open("opFile.txt", "r", (err, fd) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file opened", fd);
  }
});
