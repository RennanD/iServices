const routes = require("express").Router();

const Authenticate = require("./controllers/Authenticate");

routes.post("/auth/resgister", Authenticate.register);
routes.post("/auth/login", Authenticate.authetication);

module.exports = routes;
