import { Log } from "../db/model/logs.js";

export const logs = (req, res) => {
  res.json({
    message: "get / Request",
  });
};

export const deletelogs = (req, res) => {
  res.json({
    message: "delete/ Request",
  });
};

export const updatelogs = (req, res) => {
  res.json({
    message: "put / Request",
  });
};

export const logspost = async (req, res) => {
  let { devices, status, entrytime, exittime } = req.body;
  try {
    if (!devices || !status || !entrytime || !exittime) {
      throw new Error("all fields required");
    } else {
      const log = await Log.create({ devices, status, entrytime, exittime });
      res.json({
        success: true,
        data: log,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
