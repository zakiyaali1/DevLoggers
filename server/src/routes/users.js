import { Router } from "express";
import {
  users,
  postUsers,
  deleteUsers,
  updateusers,
} from "../controllers/users.js";

const userRoutes = Router();

userRoutes
  .route("/")
  .post(postUsers)
  .get(users)
  .put(updateusers)
  .delete(deleteUsers);

export { userRoutes };
