const routes = require("express").Router();

const Authenticate = require("./controllers/Authenticate");
const SetWork = require("./controllers/SetWorker");

routes.post("/auth/register", Authenticate.register);
routes.post("/auth/login", Authenticate.authetication);

routes.get("/works/", SetWork.index);
routes.get("/works/:id", SetWork.show);
routes.post("/works", SetWork.store);
routes.post("/works/:id/user", SetWork.storeWorker);

module.exports = routes;
