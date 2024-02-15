import express from "express";
import cors from "cors";
import "dotenv/config";
import { log } from "console";

const app = express();

app.use(express.json());

app.use(cors());

app.listen(8080, () => {
    console.log("Running server");
})


