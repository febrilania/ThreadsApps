import * as express from "express";
import ThreadsController from "../controllers/ThreadsController";
import UserController from "../controllers/UserController";
import RepliesController from "../controllers/RepliesController";

const routes = express.Router();

routes.get("/threads", ThreadsController.find);
routes.get("/threads/:id", ThreadsController.findOne);
routes.post("/threads", ThreadsController.create);
routes.delete("/threads/:id", ThreadsController.delete);
routes.patch("/threads/:id", ThreadsController.update);

routes.get("/user", UserController.find);
routes.post("/user", UserController.create);
routes.patch("/user/:id", UserController.update);
routes.get("/user/:id", UserController.findOne);
routes.delete("/user/:id", UserController.delete);

routes.get("/replies", RepliesController.find);
routes.post("/replies", RepliesController.create);

export default routes;
