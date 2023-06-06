const Express = require("express");
const routes = Express.Router();

routes.use('/user', require('./user'))

module.exports = routes;
