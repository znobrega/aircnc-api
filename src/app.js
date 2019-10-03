import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

//zejr@gmaul.com
//Pikachu1

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
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
