const Express = require("express");
const routes = Express.Router();
const Controller = require("./controller");

routes.post("/signup", Controller.signup);

routes.post("/login", Controller.login);

routes.get("/alluser", Controller.alluser);
module.exports = routes;
