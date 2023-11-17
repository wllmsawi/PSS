import express, { Application, Request, Response, NextFunction} from "express";
import jwt from 'jsonwebtoken';


export interface AuthenticatedRequest extends Request {
    user?: {
      id: number | any; 
      role_id: number; 
    };
  }
  export const verifyToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      let token = req.headers.authorization;
  
      if (!token) return res.status(500).send("Access denied");
  
      token = token.split(" ")[1];
  
      if (token === "null" || !token)
        return res.status(500).send("Unauthorized !TOKEN!");
  
      const secretKey: string= process.env.JWT_SECRET_KEY || 'default_secret';
  
      let verifiedUser = jwt.verify(token, secretKey) as unknown;
  
      if (!verifiedUser) return res.status(500).send("Unauthorized token");
  
      const user = verifiedUser as { id: number; role_id: number };
      
      req.user = user;
      next();
    } catch (err) {
      return res.status(500).send("Invalid Token");
    }
  };
  
// export const verifyToken = (req:Request, res:Response, next:NextFunction) => {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   try {
//     const decoded = jwt.verify(token, 'your_secret_key') as {id:number; role_id:number};
//     req.user = decoded; // Attach user information to the request object
//     next();
//   } catch (error) {
//     return res.status(403).json({ message: 'Invalid token' });
//   }
// };

// 

