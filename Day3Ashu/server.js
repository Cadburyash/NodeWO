const express = require("express");
const app = express();
const Bodyparser = require("body-parser");
const routes = require("./routes");

PORT = 8080;

app.use(Bodyparser.json());
app.use(routes);


app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
