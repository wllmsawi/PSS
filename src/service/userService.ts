import { findAllEmployee } from "../query/userQuery";
import { findEmployeeQuery } from "../query/userQuery";
import { findEmployeeName } from "../query/userQuery";

export const getAllEmployee = async (id:number) => {
    try {
        const res = await findAllEmployee(id);
        return res;
    } catch (err) {
        console.log("getAllEmployee", err);
        throw err;
        
        
    }
    
}

export const getEmployeeQuery = async (id:number) => {
    try {
        const rest = await findEmployeeQuery(id);
        return rest;
    } catch (err) {
        console.log("getEmployeeQuery", err);
        throw err;
    }
}

export const getEmployeeName =async (name:string) => {
    try {
        const res = await findEmployeeName(name);
        return res;
    } catch (err) {
        console.log("getEmployeeName", err);
        throw err;
    }
}
