const fs = require("fs");

fs.stat("opFile.txt", (err, stats) => {
  if (err) {
    throw err;
  } else {
    console.log(stats.isFile());
  }
});
