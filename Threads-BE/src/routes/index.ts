import * as express from "express";
import repliesController from "../controllers/RepliesController";
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
routes.post("/thread", authMiddlewares.Auth, UploadFile("image"), ThreadsController.create);
routes.delete("/threads/:id", authMiddlewares.Auth, ThreadsController.delete);
routes.patch("/threads/:id", authMiddlewares.Auth, ThreadsController.update);

//USERS
routes.get("/users", UserController.find);
routes.get("/user/:id", UserController.findOne);
routes.patch("/user/:id", UserController.update);
routes.delete("/user/:id", UserController.delete);

// AUTH
routes.post("/auth/register", UserController.register);
routes.post("/auth/login", UserController.login);
routes.get("/auth/check", authMiddlewares.Auth, UserController.check);

//REPLIES
routes.get("/replies/threads/:id", repliesController.getReplies);
routes.post("/replies/:id", authMiddlewares.Auth, UploadFile("image"), repliesController.create);
routes.delete("/replies/:id", authMiddlewares.Auth, repliesController.delete);

//LIKES
routes.post("/likes", authMiddlewares.Auth, LikesController.create);

//fOLLOWS
routes.post("/follow", authMiddlewares.Auth, FollowController.follow);
routes.delete("/unfollow/:id", authMiddlewares.Auth, FollowController.unfollow);
routes.get("/follower", authMiddlewares.Auth, FollowController.getFOllower);
routes.get("/following", authMiddlewares.Auth, FollowController.getFOllowing);

export default routes;
