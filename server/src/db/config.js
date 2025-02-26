import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("moongoDB connected ");
  } catch (err) {
    console.err(err.message);
    process.exit();
  }
};
