import { Devices } from "../db/model/device.js";

export const devices = (req, res) => {
  res.json({
    message: "GET / Request",
  });
};

export const deletedevices = (req, res) => {
  res.json({
    message: "delete / Request",
  });
};

export const updatedevices = (req, res) => {
  res.json({
    message: "update / Request",
  });
};

export const postdevices = async (req, res) => {
  // let { serialNumber, model, type, color } = req.body;
  let serialNumber = req.body.serialNumber;
  let model = req.body.model;
  let type = req.body.type;
  let color = req.body.color;

  try {
    if (!serialNumber || !model || !type || !color) {
      throw new Error("All fields required");
    } else {
      let device = await Devices.create({ serialNumber, model, type, color });
      res.json({
        success: true,
        data: device,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
