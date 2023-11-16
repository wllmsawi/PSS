import { findAllEmployeeQuery } from "../query/userQuery";
import { findEmployeeQuery } from "../query/userQuery";
import { findEmployeeNameQuery } from "../query/userQuery";

export const findAllEmployeeService = async () => {
    try {
        const res = await findAllEmployeeQuery();
        return res;
    } catch (err) {
        console.log("getAllEmployee", err);
        throw err;
     
    }
    
};

export const findEmployeeService = async (full_name:string) => {
    try {
        const rest = await findEmployeeQuery(full_name);
        console.log(rest);
        return rest;
        
    } catch (err) {
        console.log("getEmployeeQuery", err);
        throw err;
    }
}

export const findEmployeeNameService =async (full_name:string) => {
    try {
        const res = await findEmployeeNameQuery(full_name);
        return res;
    } catch (err) {
        console.log("getEmployeeName", err);
        throw err;
    }
};

// export const getAdminRole =async (role_id:number, full_name:string) => {
//     try {
//         const res = await findAdminQuery(role_id, full_name);
//         if (role_id = 2){
            
//         }
//         return res;
//     } catch (err) {
//         console.log("getEmployeeName", err);
//         throw err;
//     }
// };
