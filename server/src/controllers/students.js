import { Student } from "../db/model/student.js";

//let studentavail = [];
export const students = async (req, res) => {
  let { name, email, phone } = req.body;

  try {
    if (!name || !email || !phone) {
      throw new Error("all fields required");
    } else {
      const student = await Student.create({ name, email, phone });
      res.json({
        success: true,
        data: student,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const getstudents = (req, res) => {
  res.json({
    message: "Get / Request",
  });
};

export const deleteStudents = (req, res) => {
  res.json({
    message: "Delete / Request",
  });
};

export const updateStudents = (req, res) => {
  res.json({
    message: "put / Request",
  });
};
