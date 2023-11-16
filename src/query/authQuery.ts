import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const registerQuery = async ( 
    full_name: string, 
    address:string,
    email:string, 
    password: string,
    role_id:number, 
    gender_id:number,
    avatar:string, 
    status:boolean
    ) :Promise<any> => {

  try {
    // console.log(full_name)
    const res = await prisma.user.create({
      data:{
          full_name,
          address,
          email,
          password,
          role_id: 2,
          gender_id,
          avatar,
          status :true
      } 
    });
    return res;
  } catch (err) {
    // console.log(err)
    throw err;
  }
};

const loginQuery = async (full_name: string, email:string) => {
  try {
    const res = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email,
          },
          {
            full_name,
          },
        ],
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};




export const createCashierQuery = async (
  full_name: string, 
  address:string,
  email:string, 
  password: string,
  role_id:number, 
  gender_id:number,
  avatar:string,
  status: boolean): Promise<any> => {
  try {


    const res = await prisma.user.create({
      data:{
        full_name,
        address,
        email,
        password,
        role_id,
        gender_id,
        avatar, 
        status
      }
    
    });
    return res;
  } catch (err) {
    throw err;
  }
};


export const updateCashierQuery = async (
  id: number, 
  updatedData: 
  { full_name: string, 
  address:string,
  email:string, 
  password: string,
  role_id:number, 
  gender_id:number,
  avatar:string }): Promise<any> => {
  try {
    const res = await prisma.user.update({
      where: { id },
      data: updatedData,
    });
    return res;
  } catch (err) {
    throw err;
  }
};



export const deleteCashierQuery = async (id: number): Promise<any> => {
  try {
    const res = await prisma.user.delete({
      where: {id} ,
    });
    return res;
  } catch (err) {
    throw err;
  }
};



// export const changeCashierStatusQuery = async (id: number, newStatus: string): Promise<any> => {
//   try {
//     const res = await prisma.user.update({
//       where: { id },
//       data: { status: newStatus },
//     });
//     return res;
//   } catch (err) {
//     throw err;
//   }
// };


export const findCashierByIdQuery = async (id: number) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
};

// const keepLoginQuery = async (id: number) => {
//   try {
//     const res = await prisma.user.findUnique({
//       where: {
//         id:id,
//       },
//       select: {
     
//         email: true,
//         full_name: true,

//       },
//     });
//     return res;
//   } catch (err) {
//     throw err;
//   }
// };

// const updateQuery = async (
//     id:number,
//     full_name: string, 
//     address:string,
//     email:string, 
//     // password: string,
//     // role_id: number,
//     // gender_id:number,
//     avatar: string,) => {
//   try {
//     await prisma.user.update({
//       where: {
//         id,
//       },
//       data: {
//         full_name,
//         address,
//         email,
//         avatar,
//       },
//     });

//     // console.log(email);
//     // console.log(avatar);
//     // console.log(id);
//   } catch (err) {
//     // console.error(err);
//     throw err;
//   }
// };

export {
  registerQuery,
  loginQuery,
  // keepLoginQuery,
  // updateQuery,
};
