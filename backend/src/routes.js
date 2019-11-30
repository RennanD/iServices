const routes = require("express").Router();

const Authenticate = require("./controllers/Authenticate");
const SetWork = require("./controllers/SetWorker");
const ChatController = require("./controllers/ChatController");

routes.post("/auth/register", Authenticate.register);
routes.post("/auth/login", Authenticate.authetication);

routes.get("/profile/:id");

routes.get("/works/", SetWork.index);
routes.get("/works/:id", SetWork.show);
routes.post("/works", SetWork.store);
routes.post("/works/:id/user", SetWork.storeWorker);

routes.post("/chats", ChatController.storeChat);
routes.get("./chats/:id/messeges", ChatController.storeMessege);

module.exports = routes;
