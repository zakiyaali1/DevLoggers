import { model, Schema } from "mongoose";

const logSchema = new Schema(
  {
    devices: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },

    entrytime: {
      type: String,
      required: true,
    },
    exittime: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Log = model("log", logSchema);

export { Log };
