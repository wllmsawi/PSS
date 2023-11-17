import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createProductCategoryQuery = async (
  product_category_name: string
) => {
  try {
    const res = await prisma.product_Category.create({
      data: {
        product_category_name,
      },
    });
  } catch (err) {
    throw err;
  }
};

export const updateProductCategoryQuery = async (
  id: number,
  product_category_name: string
) => {
  try {
    const res = await prisma.product_Category.update({
      where: {
        id,
      },
      data: {
        product_category_name,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};
