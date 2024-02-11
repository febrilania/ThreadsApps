import { Request, Response } from "express";
import ThreadsService from "../services/ThreadsService";

export default new (class ThreadsController {
  async getAllThreads(req: Request, res: Response) {
    try {
      const threads = await ThreadsService.getAllData();
      return res.status(200).json({ status: "succes", data: { threads } });
    } catch (error) {
      console.error("error getting all data thread", error);
      return res
        .status(500)
        .json({ status: "error", message: "internal server error" });
    }
  }
  async getOneThread(req: Request, res: Response) {
    try {
      const threadId = parseInt(req.params.id);
      const thread = await ThreadsService.getOneThreads(threadId);
      return res.status(200).json({ status: "success", data: { thread } });
    } catch (error) {
      console.error("Error getting one thread:", error);
      return res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    }
  }
})();
