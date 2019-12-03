const routes = require("express").Router();

const Authenticate = require("./controllers/Authenticate");
const SetWork = require("./controllers/SetWorker");
const ChatController = require("./controllers/ChatController");
const Profile = require("./controllers/Profile");
const Dash = require('./controllers/Dashboard')

routes.post("/auth/register", Authenticate.register);
routes.post("/auth/login", Authenticate.authetication);

routes.get("/profile/:user_id", Profile.show);

routes.get("/works/", SetWork.index);
routes.get("/works/:id", SetWork.show);
routes.post("/works", SetWork.store);
routes.post("/works/:id/user", SetWork.storeWorker);

routes.get("/chats/:logged/user", ChatController.listChats);
routes.get("/chats/:chat_id", ChatController.showChat);
routes.post("/chats", ChatController.storeChat);
routes.post("/chats/:id/messeges", ChatController.storeMessege);
routes.post("/attendance", Dash.storeAttendance)

module.exports = routes;
