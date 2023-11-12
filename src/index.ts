import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

const app = express();

const port: number = Number(process.env.PORT) || 8000;

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
