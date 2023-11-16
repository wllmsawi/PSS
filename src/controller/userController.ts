import { Request, Response } from "express";
import { findAllEmployeeService, findEmployeeNameService, findEmployeeService } from "../service/userService";

//jalan
export const findAllEmployeeController = async (req: Request, res: Response) => {
    const { id } = req.params;
    console.log("newId", typeof id);
    try {
        const result = await findAllEmployeeService();
        
        return res.status(200).json({message: "Find All Employee Success", data: result});
    } catch (err) {
        return res.status(500).send(err)
        
    }
};

export const findEmployeeNameController = async (req:Request, res:Response) => {
    const {full_name} = req.query;
    const newName = String(full_name);

    try {
        const result = await findEmployeeNameService(newName);
        return res.status(200).json({message: "Find Employee Name Success", data: result});
    } catch (err) {
        return res.status(500).send(err)
        
    }
};  

//jalan
export const findEmployeeQueryController = async (req:Request, res:Response) =>{
    const {id} = req.body;
    const newId = String(id)

    try{
        const result = await findEmployeeService(newId);
        return res.status(200).json({message:"Find Spesific Employee Success", data: result});
    } catch (err) {
        return res.status(500).send(err);
    }
};