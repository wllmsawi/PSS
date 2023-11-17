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

// import { yourProtectedRouteHandler } from "./controller/authController";
//   import { verifyToken } from "./middleware/userAuth";
//   app.get('/protected-route', verifyToken, yourProtectedRouteHandler);
  
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



  // mock db
  // const users =[
  //   {
  //     id: 1, 
  //     email: 'test@example.com', 
  //     password: '$2b$10$B2f8P5e5.xzOyB5O5L5jhuM5iG1z6Zr0rj1w6rJU6pRvp6iPv9l7a'
  //   }
  // ];


// app.post('/login',async (req: Request, res:Response) => {
  
//   const {email, password} = req.body;

//   //find user using email
//   const user = users.find((u) => u.email === email);

//   if (!user) {
//     return res.status(404).send('User not found');
//   }

//   if (!user.password) {
//     return res.status(500).send('User password not set');
//   }

//   //password
//   const match = await bcrypt.compare(password, user.password);
//   if (!match) {
//     return res.status(401).send('Invalid password');
//   }

//   //jwt Token
//   const token = jwt.sign({userId: user.id}, 'secret');

//   res.send({ token });

// });

// app.get('/profile', (req: Request, res: Response) => {
  
//   const token = req.headers.authorization?.split(' ')[1];

//   try {

//     interface Custompayload {
//       userId: number;
//     }
    
//     const decoded = jwt.verify(token!, process.env.JWT_SECRET || 'defaultSecret') as Custompayload;
    

//     const user = users.find((a) => a.id === decoded.userId);
    
//     if (!user) {
//       return res.status(404).send('User not found');
//     }
    
//     res.send(`Welcome ${user.email}!`)
//   } catch (error) {
    
//     return res.status(401).send('Invalid token');

//   }
// })

