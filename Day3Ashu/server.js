const express = require("express");

const app = express();
const router = require("./routes");

PORT = 8080;

app.use(router);
app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
