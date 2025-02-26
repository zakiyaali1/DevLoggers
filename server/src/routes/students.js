import { Router } from "express";

import {
  students,
  getstudents,
  deleteStudents,
  updateStudents,
} from "../controllers/students.js";

const studentsRouter = Router();

studentsRouter
  .route("/")
  .post(students)
  .get(getstudents)
  .put(updateStudents)
  .delete(deleteStudents);

export { studentsRouter };
