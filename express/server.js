const fs = require("fs");
const express = require("express");
const app = express();
const port = process.env.port || 8080;

app.use(express.static(__dirname + "/public"));


app.get('/download/:filename', (req,res)=>{
  
})

app.get("/", (req, res) => {
  res.send("welcome to Express server");
});

app.get("/getMovies", (req, res) => {
  fs.readFile("./data/db.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(JSON.parse(data));
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("server is running", port);
  }
});
