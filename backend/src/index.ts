import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import { log } from "console";

const app = express();

mongoose.connect(process.env.URL as string)
.then(() => {
    console.log("Connected To DB")
})

app.use(express.json());

app.use(cors());

app.listen(8080, () => {
    console.log("Running server on 8080");
})


