import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const registerQuery = async ( 
    full_name: string, 
    address:string,
    email:string, 
    password: string,
    role_id: number,
    gender_id:number,
    avatar: string,
    ) :Promise<any> => {

  try {
    const res = await prisma.user.create({
      data: {
          full_name,
          address,
          email,
          password,
          role_id,
          gender_id,
          avatar
      },


    });
    return res;
  } catch (err) {
    throw err;
  }
};

const loginQuery = async (email: string) => {
  try {
    const res = await prisma.user.findFirst({
      where: {
        email:email,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const keepLoginQuery = async (id: number) => {
  try {
    const res = await prisma.user.findUnique({
      where: {
        id:id,
      },
      select: {
     
        email: true,
        full_name: true,

      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const updateQuery = async (
    id:number,
    full_name: string, 
    address:string,
    email:string, 
    // password: string,
    // role_id: number,
    // gender_id:number,
    avatar: string,) => {
  try {
    await prisma.user.update({
      where: {
        id,
      },
      data: {
        full_name,
        address,
        email,
        avatar,
      },
    });

    // console.log(email);
    // console.log(avatar);
    // console.log(id);
  } catch (err) {
    // console.error(err);
    throw err;
  }
};

export {
  registerQuery,
  loginQuery,
  keepLoginQuery,
  updateQuery,
};
