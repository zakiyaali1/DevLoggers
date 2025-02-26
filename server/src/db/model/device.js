import { model, Schema } from "mongoose";

const deviceScheme = new Schema(
  {
    serialNumber: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Devices = model("device", deviceScheme);
export { Devices };
