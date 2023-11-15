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
    origin: process.env.WHITELISTED_DOMAIN,
  })
);

const port: number = Number(process.env.PORT) || 8000;

const transactionRoute = require("./route/transactionRoute");
app.use("/transaction", transactionRoute);

const cartRoute = require("./route/cartRoute");
app.use("/cart", cartRoute);

const transactionDetailRoute = require("./route/transactionDetailRoutes");
app.use("/transaction-detail", transactionDetailRoute);

const productRoute = require("./route/productRoute");
app.use("/product", productRoute);

const categoryRoute = require("./route/productCategoryRoute");
app.use("/category", categoryRoute);

const branchRoute = require("./route/branchRoute");
app.use("/branch", branchRoute);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
