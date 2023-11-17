import express, { Application, Request, Response} from "express";
import path from "path";
import dotenv from "dotenv";
import bodyParser = require("body-parser");
const cors = require("cors");
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

const app: Application = express();

//middleware
app.use(bodyParser.json());


app.use(
  cors({
    origin: process.env.WHITELISTED_DOMAIN,
  })
  );
  
  const port: number = Number(process.env.PORT) || 8000;

  const userRoute = require('./route/userRoute');
  app.use('/user', userRoute);

  const authRoute =  require('./route/authRouter');
  app.use('/auth', authRoute);


  //test kirim
  app.get('/', (req: Request, res: Response) => {
    res.send('Test Kirim');
  });
  
  
  
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