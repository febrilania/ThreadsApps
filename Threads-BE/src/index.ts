import { AppDataSource } from "./data-source";
import * as express from "express";
import routes from "./routes";
import * as cors from "cors";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const port = 3000;

    app.use(cors());
    app.use(express.json());
    app.use("/api/v1", routes);

    app.listen(port, () => console.log(`server is running in port ${port} `));
  })
  .catch((error) => console.log(error));
