import { registerService, keepLoginService, loginService } from "../service/authService";
import { Request,Response } from "express";
import { createCashierService } from "../service/authService";
import { AuthenticatedRequest } from "../middleware/userAuth";
import { updateCashierService } from "../service/authService";
import { deleteCashierService } from "../service/authService";
import { changeCashierStatusService } from "../service/authService";

export const registerController = async (req:Request, res:Response) => {
    try {
        const {full_name, address, email, password, role_id, gender_id, avatar} = req.body;
        const result = await registerService(String(full_name), String(address), String(email) , String(password),  Number(role_id), Number(gender_id), String(avatar));
        console.log(result)
        return res.status(200).json({message: "Berhasil", data: result,})
    } catch (err: any) {
        // console.log(err.message)
        return res.status(500).json( err.message);
    }
}

export const loginController = async (req:Request, res:Response) => {
    try {
        
        const { full_name, email, password } = req.body;
        const result = await loginService(String(full_name), String(email), String (password));
        console.log(full_name);

        return res.status(200).json({
            message: "Berhasil",
            data: result,
          });
    } catch (err) {
        return res.status(500).send(err);

    }
}

export const keepLoginController =async (req:AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.user?.id

    const result = await keepLoginService(id);

    return res.status(200).json({
      message: "Success",
      data: result,
    });
  } catch (err) {
    return res.status(500).send(err)
  }
}
export const createCashierController = async (req: Request, res: Response) => {
    try {
   
      const { full_name, address, email, password, role_id, gender_id, avatar, status } = req.body;
      

      const cashier = await createCashierService( String(full_name), String(address), String(email), String(password), Number(role_id), Number(gender_id),String(avatar), Boolean(status));
 
      res.status(201).send({ message: 'Data Kasir Berhasil Masuk', data: cashier });

    } catch (error) {
      console.error('Create Cashier Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

export const updateCashierController = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updatedData = req.body; 
  
      const result = await updateCashierService(Number(id), updatedData);
  
      return res.status(200).json({ message: "Update successful", data: result });
    } catch (err) {
      console.error("Update Cashier Error:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
export const deleteCashierController = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const result = await deleteCashierService(Number(id));
  
      return res.status(200).json({ message: "Delete successful", data: result });
    } catch (err) {
      console.error("Delete Cashier Error:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };

export const changeCashierStatusController = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { status } = req.body; 
  
      const result = await changeCashierStatusService(Number(id), Boolean(status));
  
      return res.status(200).json({ message: "Status change successful", data: result });
    } catch (err) {
      console.error("Change Cashier Status Error:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  


// export const yourProtectedRouteHandler = (req: AuthenticatedRequest, res: Response) => {
//             try {
//                 const userId = req.user?.id;
//                 const roleId = req.user?.role_id;
            
//                 res.send(`User ID: ${userId}, Role ID: ${roleId}`);
//             } catch (err) {
//                 throw err;
//             }
//   };
  
// export const keepLoginController = async (req:Request, res:Response) :Promise<any> => {
//     try {
//         const {id} = req.user;
//         const result = await keepLoginService(id);

//         return res.status(200).json({message: "berhasil", data:result,})
//     } catch (err) {
//         return res.status(500).send(err);
        
//     }
// }

// export const updateController = async (req:Request, res:Response) => {
//     try {
//         const {id} = req.params;
//         const {full_name, email,avatar} = req.body;
        
//         //belum ada multer req.file?filename
//         const result = updateService(full_name, email, id, avatar);
        
//         return res.status(200).json({
// 			message: "Update User Info",
// 			data: result
// 		});
        
//     } catch (err) {
//         res.status(500).send(err);
//     }
// };