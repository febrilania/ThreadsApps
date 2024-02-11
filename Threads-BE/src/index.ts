import { AppDataSource } from "./data-source";
import * as express from "express";
import routes from "./routes";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const port = 3000;

    app.use(express.json());
    app.use("/api/v1", routes);

    app.listen(port, () => console.log(`server is running in port ${port} `));
  })
  .catch((error) => console.log(error));
