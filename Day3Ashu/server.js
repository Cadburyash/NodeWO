const express = require('express');

const app = express();

PORT = 8080;


app.get("/", (req,res)=>{
  res.send("This is HomePage")
})

app.listen(PORT, (err)=>{
  console.log("server is running on port", PORT)
})