const Express = require("express");
const routes = Express.Router();

routes.post("/signup", (req, res) => {
  res.send("Signed up");
});

routes.get("/", (req, res) => {
  res.send("This is HomePage");
});

module.exports = routes;
