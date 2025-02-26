import { Router } from "express";
import {
  devices,
  deletedevices,
  updatedevices,
  postdevices,
} from "../controllers/devices.js";

const devicesRouter = Router();

devicesRouter
  .route("/")
  .post(postdevices)
  .get(devices)
  .put(updatedevices)
  .delete(deletedevices);

export { devicesRouter };
