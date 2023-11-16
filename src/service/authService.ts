const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const {findEmployeeQuery} =require("../query/userQuery");
const {registerQuery, loginQuery, keepLoginQuery, updateQuery} = require("../query/authQuery");
// import { log } from "console";
import { findEmployeeNameQuery } from "../query/userQuery";
import { createCashierQuery } from '../query/authQuery';
import { updateCashierQuery } from "../query/authQuery";
import { deleteCashierQuery } from "../query/authQuery";
// import { changeCashierStatusQuery } from "../query/authQuery";


export const registerService  = async (
    full_name: string , 
    address:string,
    email:string, 
    password: string,
    role_id:number, 
    gender_id:number,
    avatar:string) => {
    try {

        const check = await findEmployeeNameQuery(full_name, email) ;

        if (check) throw new Error("Email or Name already exist");
        console.log(check)
        

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        // console.log(email)
        const res = await registerQuery(full_name,address, email, hashPassword, role_id, gender_id, avatar);
        return res;
        
    } catch (err) {
        throw err;
    }
};

export const loginService =async (full_name:string, email:string, password:string) => {
    try {
        const check = await loginQuery(full_name, email)
        if (!check) {
            throw new Error("Name or Email Doesnt Exist");    
        }
        const isValid = await bcrypt.compare(password, check.password);
        if (!isValid) {
            throw new Error("Password is Incorrect");    
            
        }
        let payload ={
            id: check.id,
            email: check.email,
            full_name: check.full_name,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY,{expiresIn: "1hr",})
        console.log(check);

        return  {user: check, token};
    } catch (err) {
        console.error('LoginServiceError: ', err);
        throw err;
    }
};



export const createCashierService = async (
    full_name: string , 
    address:string,
    email:string, 
    password: string,
    role_id:number, 
    gender_id:number,
    avatar:string,
    status:boolean) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);
            console.log(email)
            console.log(role_id)
            const res = await createCashierQuery(full_name,address, email, hashPassword, role_id, gender_id, avatar,status);
            return res;
        } catch (err) {
            throw (err);
            
        }
};


export const updateCashierService = async (
    id: number, 
    updatedData: {   
        full_name: string, 
        address:string,
        email:string, 
        password: string,
        role_id:number, 
        gender_id:number,
        avatar:string}): Promise<any> => {
    try {
      const res = await updateCashierQuery(id, updatedData);
      return res;
    } catch (err) {
      throw err;
    }
  };
  


export const deleteCashierService = async (id: number): Promise<any> => {
    try {
      const res = await deleteCashierQuery(id);
      return res;
    } catch (err) {
      throw err;
    }
  };
  


// export const changeCashierStatusService = async (id: number, newStatus: string): Promise<any> => {
//     try {
//       const res = await changeCashierStatusQuery(id, newStatus);
//       return res;
//     } catch (err) {
//       throw err;
//     }
//   };
  

// export const updateService = async (
//     id:number,
//     full_name:string,
//     email:string, 
//     avatar: string) => {
//     try {
//         const result = updateQuery(id, full_name,email,avatar)
//         // console.log(result);
//         return result;
        
//     } catch (err) {
//         throw err
//     }
// };

export const keepLoginService = async (id:number) => {
    try {
        const result = await keepLoginQuery(id);

        if (!result) {
            throw new Error("User Doesnt Exist")
        }
        return result;
    } catch (err) {
            throw err;       
    }
}