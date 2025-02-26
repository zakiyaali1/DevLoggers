import { Router } from "express";
import { logs, deletelogs, updatelogs, logspost } from "../controllers/logs.js";

const logsRouter = Router();

logsRouter
  .route("/")
  .post(logspost)
  .get(logs)
  .put(updatelogs)
  .delete(deletelogs);

export { logsRouter };
