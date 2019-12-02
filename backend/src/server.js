require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

io.on("connection", socket => {
  socket.on("connectChat", chat => {
    socket.join(chat);
    console.log("oi");
  });
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.listen(process.env.PORT);
