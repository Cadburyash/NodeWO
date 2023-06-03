const express = require("express");

const app = express();
const routes = require("./routes");

PORT = 8080;

app.use(routes);
app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
