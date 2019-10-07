import express from "express";
import mongoose from "mongoose";
import routes from "./routes";
import cors from "cors";
import path from "path";

//zejr@gmail.com
//carlos123
class App {
  constructor() {
    this.server = express();

    mongoose.connect(
      "mongodb+srv://carlos:carlos123@cluster0-6sivr.mongodb.net/test?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(
      "/files",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
