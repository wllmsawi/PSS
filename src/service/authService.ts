const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const {findEmployeeQuery} =require("../query/userQuery");
const {registerQuery, keepLoginQuery, updateQuery} = require("../query/authQuery");


export const registerService  = async (
    full_name:string,
    email: string,
    password: string) => {
    try {
        const check = await findEmployeeQuery({email, full_name});

        if (check) {
            throw new Error("Email or Name already exist");
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const res = await registerQuery(full_name, email, hashPassword);
        return res;
        
    } catch (err) {
        throw err;
    }
};

export const loginService =async (email:string, password:string) => {
    try {
        const check = await findEmployeeQuery({email})
        if (!check) {
            throw new Error("Email Doesnt Exist");    
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
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY,{expireIn: "1hr",})
        return {user: check, token};
    } catch (err) {
        throw err;
    }
};

export const updateService = async (
    id:number,
    full_name:string,
    email:string, 
    avatar: string) => {
    try {
        const result = updateQuery(id, full_name,email,avatar)
        // console.log(result);
        return result;
        
    } catch (err) {
        throw err
    }
};

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