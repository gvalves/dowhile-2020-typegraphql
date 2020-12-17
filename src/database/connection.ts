import mongoose from "mongoose";
import { config } from "dotenv";

config();

const { CONNECTION_URI } = process.env;

mongoose.connect(CONNECTION_URI as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
