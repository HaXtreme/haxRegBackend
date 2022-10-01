import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json());

import { router as user } from "./api/users.js";

app.use("/api/v1/", user);

mongoose.connect(
  "mongodb+srv://oshanYelena:0552230703@cluster0.u3yuu0v.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (!error) {
      console.log("Success");
    } else {
      console.log(error);
    }
  }
);

export default app;
