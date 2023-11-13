import { Request, Response } from "express";
import { getAllEmployee, getEmployeeName, getEmployeeQuery } from "../service/userService";

export const getAllEmployeeController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const newId = Number(id);
    console.log("newId", typeof id);
    try {
        const result = await getAllEmployee(newId);
        return res.status(200).json({message: "Find All Employee Success", data: result});
    } catch (err) {
        return res.status(500).send(err)
        
    }
}

export const getEmployeeNameController = async (req:Request, res:Response) => {
    const {name} = req.params;
    // const newName = String(name);

    try {
        const result = await getEmployeeName(name);
        return res.status(200).json({message: "Find Employee Name Success", data: result});
    } catch (err) {
        return res.status(500).send(err)
        
    }
}  


export const getEmployeeQueryController = async (req:Request, res:Response) =>{
    const {id} = req.params;
    const newId = Number(id)

    try{
        const result = await getEmployeeQuery(newId);
        return res.status(200).json({message:"Find Spesific Employee Success", data: result});
    } catch (err) {
        return res.status(500).send(err);
    }
}