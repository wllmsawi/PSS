import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// cari semua employee dari id, bust kategori
export const findAllEmployee = async (id:number) :Promise<any> => {
  try {
    const result = await prisma.user.findMany({
      where: {
        id: id
      },
      include:{
          role: true,
          gender: true
      }
    })
    return result;
  } catch (err) {
    console.log("findAllEmployeeError: ", err);
    throw err;
  }
};

// cari employee termasuk role dan gender
export const findEmployeeQuery = async (id:number):Promise<any>=> {
 try {
  const result = await prisma.user.findFirst({
    where: {
      id: id
    }, 
    include: {

      role:true,
      gender: true
    }
  
  });
  return result;

 } catch (err) {
   console.log("findEmployeeQueryError: ", err);
  throw err;
  
} 
}

//cari nama
export const findEmployeeName = async (full_name:string) :Promise<any[]> => {
  try {

    const result = await prisma.user.findMany({
      where: {
        full_name: full_name,
      },
    })
    return result;
  } catch (err) {
    console.log("findEmployeeNameError: ", err);
    throw err;
    
  }
}


