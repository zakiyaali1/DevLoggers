import express from "express";
import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "GET / Request",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
