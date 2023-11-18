import { registerService, keepLoginService, loginService } from "../service/authService";
import { Request,Response } from "express";
import { createCashierService, updateCashierService, deleteCashierService,changeCashierStatusService } from "../service/authService";
import { AuthenticatedRequest } from "../middleware/userAuth";

export const registerController = async (req:Request, res:Response) => {
    try {
        const {full_name, address, email, password, role_id, gender_id, avatar,status, transaction,branch_id} = req.body;
        const result = await registerService(
          String(full_name), 
          String(address), 
          String(email), 
          String(password), 
          Number(role_id), 
          Number(gender_id),
          String(req.file?.filename), 
          Boolean(status), 
          void(transaction), 
          Number(branch_id));
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
    const id = req.user?.id

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
   
      const { full_name, address, email, password, role_id, gender_id, avatar, status, transaction, branch_id } = req.body;
      

      const cashier = await createCashierService( String(full_name), String(address), String(email), String(password), Number(role_id), Number(gender_id),String(avatar), Boolean(status), void(transaction), Number(branch_id));
 
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

      if (req.file) {
        // Assuming you want to update the avatar property in your data
        updatedData.avatar = req.file.filename;
      }
  
      const result = await updateCashierService(
        Number(id), 
        updatedData);
  
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
  
  
export const yourProtectedRouteHandler = (req: AuthenticatedRequest, res: Response) => {
            try {
                const userId = req.user?.id;  
                const roleId = req.user?.role_id;
            
                res.send(`User ID: ${userId}, Role ID: ${roleId}`);
            } catch (err) {
                throw err;  
            }
  };
  
