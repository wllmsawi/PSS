import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// cari semua employee dari id, bust kategori
export const findAllEmployeeQuery = async () :Promise<any> => {
  try {
    const result = await prisma.user.findMany({
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
export const findEmployeeQuery = async (full_name:string):Promise<any>=> {
 try {
  const result = await prisma.user.findFirst({
    where: {
      full_name
    }, 
    include: {

      role:true,
      gender: true
    }
    
    
  });
  console.log(full_name);
  return result;

 } catch (err) {
   console.log("findEmployeeQueryError: ", err);
  throw err;
  
} 
}

//cari nama


export const findEmployeeNameQuery = async (full_name: string, email: string | null | undefined = undefined): Promise<any> => {
  try {
    const whereClause: any = {
      full_name,
    };

    if (email !== undefined) {
      whereClause.email = email;
    }

    const result = await prisma.user.findFirst({
      where: whereClause,
    });

    return result;
  } catch (err) {
    console.log("findEmployeeNameError: ", err);
    throw err;
  }
};
