import * as express from "express";
import repliesController from "../controllers/repliesController";
import ThreadsController from "../controllers/ThreadsController";
import UserController from "../controllers/UserController";
import authMiddlewares from "../middlewares/authMiddlewares";
import LikesController from "../controllers/LikesController";
import FollowController from "../controllers/FollowController";
import UploadFile from "../middlewares/UploadFile";

const routes = express.Router();

//THREADS
routes.get("/threads", ThreadsController.find);
routes.get("/threads/:id", ThreadsController.findOne);
routes.post(
  "/threads",
  authMiddlewares.Auth,
  UploadFile.upload("image"),
  ThreadsController.create
);
routes.delete("/threads/:id", authMiddlewares.Auth, ThreadsController.delete);
routes.patch("/threads/:id", authMiddlewares.Auth, ThreadsController.update);

//USERS
routes.get("/user", UserController.find);
routes.post("/user", UserController.create);
routes.patch("/user/:id", UserController.update);
routes.get("/user/:id", UserController.findOne);
routes.delete("/user/:id", UserController.delete);
routes.post("/login", UserController.login);

//REPLIES
routes.get("/replies/:id", repliesController.getReplies);
routes.post(
  "/replies/:id",
  authMiddlewares.Auth,
  UploadFile.upload("image"),
  repliesController.create
);
routes.delete("/replies/:id", authMiddlewares.Auth, repliesController.delete);

//LIKES
routes.post("/likes", authMiddlewares.Auth, LikesController.create);

//fOLLOWS
routes.post("/follow", authMiddlewares.Auth, FollowController.follow);
routes.delete("/unfollow/:id", authMiddlewares.Auth, FollowController.unfollow);
routes.get("/follower/:id", FollowController.getFOllower);
routes.get("/following/:id", FollowController.getFOllowing);

export default routes;
