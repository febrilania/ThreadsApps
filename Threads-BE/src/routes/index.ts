import * as express from "express";
import ThreadsController from "../controllers/ThreadsController";
import AuthController from "../controllers/AuthController";

const routes = express.Router();

routes.get("/threads", ThreadsController.getAllThreads);
routes.get("/threads/:id", ThreadsController.getOneThread);
routes.post("/register", AuthController.registAccount);

export default routes;
