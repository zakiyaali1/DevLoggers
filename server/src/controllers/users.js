import { User } from "../db/model/users.js";

export const users = async (req, res) => {
  let { name, email, password, phonenumber } = req.body;

  try {
    if (!name || !email || !password || !phonenumber) {
      throw new Error("all fields required");
    } else {
      const user = await User.create({ name, email, password, phonenumber });

      res.json({
        success: true,
        data: user,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const postUsers = (req, res) => {
  res.json({
    message: "Get / Request",
  });
};

export const deleteUsers = (req, res) => {
  res.json({
    message: "Delete / Request",
  });
};

export const updateusers = (req, res) => {
  res.json({
    message: "put / Request",
  });
};
