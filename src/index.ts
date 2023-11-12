import express from "express";
import path from "path";
import dotenv from "dotenv";
import bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: [
      process.env.WHITELISTED_DOMAIN &&
        process.env.WHITELISTED_DOMAIN.split(""),
    ],
  })
);

const port: number = Number(process.env.PORT) || 8000;

const transactionRoute = require("./route/transactionRoute");
app.use("/transaction", transactionRoute);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
