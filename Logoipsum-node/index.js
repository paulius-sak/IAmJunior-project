import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => console.log("MongoDb Connected!"))
  .catch((err) => {
    console.log("err: ", err);
  });

app.use((req, res) => {
  return res.status(404).json({ status: "Endpoint doesn't exist" });
});

app.listen(process.env.PORT, () => {
  console.log(`app started - port ${process.env.PORT}`);
});
