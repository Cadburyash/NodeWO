const Express = require("express");
const routes = Express.Router();
const Controller = require("./controller");

routes.post("/signup", Controller.Signup);

routes.post("/login", Controller.Login);

routes.get("/alluser", (req, res) => {
  res.send({
    users: ["ashish", "bijlee", "niru"],
  });
});
module.exports = routes;
