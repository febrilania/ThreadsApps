import { AppDataSource } from "./data-source";
import * as express from "express";
import routes from "./routes";
import * as cors from "cors";
import "dotenv/config";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const port = 3000;

    const corsConfig = {
      origin: "http://localhost:5173",
    };

    app.use(cors(corsConfig));
    app.use(express.json());
    app.use("/api/v1", routes);

    app.listen(port, () => console.log(`server is running in port ${port} `));
  })
  .catch((error) => console.log(error));
