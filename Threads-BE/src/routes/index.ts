import * as express from "express";
import repliesController from "../controllers/repliesController";
import ThreadsController from "../controllers/ThreadsController";
import UserController from "../controllers/UserController";
import authMiddlewares from "../middlewares/authMiddlewares";

const routes = express.Router();

routes.get("/threads", ThreadsController.find);
routes.get("/threads/:id", ThreadsController.findOne);
routes.post("/threads", authMiddlewares.Auth, ThreadsController.create);
routes.delete("/threads/:id", authMiddlewares.Auth, ThreadsController.delete);
routes.patch("/threads/:id", authMiddlewares.Auth, ThreadsController.update);

routes.get("/user", UserController.find);
routes.post("/user", UserController.create);
routes.patch("/user/:id", UserController.update);
routes.get("/user/:id", UserController.findOne);
routes.delete("/user/:id", UserController.delete);
routes.post("/login", UserController.login);

routes.get("/replies", repliesController.find);
routes.post("/replies", authMiddlewares.Auth, repliesController.create);
routes.delete("/replies/:id", authMiddlewares.Auth, repliesController.delete);

export default routes;
