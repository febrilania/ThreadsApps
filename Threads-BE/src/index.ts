import { json } from "stream/consumers";
import { AppDataSource } from "./data-source";
import express = require("express");
import { error } from "console";

AppDataSource.initialize()
  .then(async () => {
    const app = express();

    app.use(express.json());
    app.use("api/v1");

    app.listen(process.env.PORT, () => console.log("server is runnng"));
  })
  .catch((error) => console.log(error));
