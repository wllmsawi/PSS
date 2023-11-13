import { registerService, loginService, keepLoginService, updateService } from "../service/authService";
import { Request,Response } from "express";

export const registerController = async (req:Request, res:Response) => {
    try {
        const {full_name, email, password} = req.body;

        const result = await registerService(full_name, email, password);

        return res.status(200).json({message: "Berhasil", data: result,})
    } catch (err) {
        return res.status(500).send(err);
    }
}

export const loginController = async (req:Request, res:Response) => {
    try {
        const { email, password } = req.body;
        const result = await loginService(email, password);

        return res.status(200).json({
            message: "Success",
            data: result,
          });
    } catch (err) {
        return res.status(500).send(err);
    }
}

// export const keepLoginController = async (req:Request, res:Response) :Promise<any> => {
//     try {
//         const {id} = req.user;
//         const result = await keepLoginService(id);

//         return res.status(200).json({message: "berhasil", data:result,})
//     } catch (err) {
//         return res.status(500).send(err);
        
//     }
// }

export const updateController = async (req:Request, res:Response) => {
    try {
        const {id} = req.params;
        const {full_name, email,avatar} = req.body;
        
        //belum ada multer req.file?filename
        const result = updateService(full_name, email, id, avatar);
        
        return res.status(200).json({
			message: "Update User Info",
			data: result
		});
        
    } catch (err) {
        res.status(500).send(err);
    }
};