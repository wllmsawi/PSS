import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getProductQuery = async (
  id: number
): Promise<any> => {
  try {
    const res = await prisma.product.findUnique({
      where: {
        id: id,
      },
      include: {
        category: true,
      },
    });
    return res;
  } catch (err) {
    console.log("getProductQueryError: ", err);
    throw err;
  }
};

export const createProductQuery = async (
  product_name: string,
  category_id: number,
  product_price: number,
  product_image: string
) => {
  try {
    const res = await prisma.product.create({
      data: {
        product_name,
        category_id,
        product_price,
        product_image,
      },
    });
  } catch (err) {
    throw err;
  }
};
