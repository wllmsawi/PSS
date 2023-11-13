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
        product_group: true,
      },
    });
    return res;
  } catch (err) {
    console.log("getProductQueryError: ", err);
    throw err;
  }
};

export const getAllProductQuery = async (
  page: number,
  pageSize: number,
  sortField: string,
  sortOrder: string
) => {
  try {
    const skip = (page - 1) * pageSize;
    const take = pageSize;
    const res = await prisma.product.findMany({
      skip,
      take,
      include: {
        product_group: true,
      },
      orderBy: {
        [sortField]: sortOrder as any,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const findProductQuery = async (
  product_name: string | null = null,
  category_id: number | null = null
) => {
  try {
    const filter: any = {};
    if (product_name != "undefined")
      filter.product_name = product_name;
    if (category_id) filter.category_id = category_id;
    const res = await prisma.product.findMany({
      include: {
        product_group: true,
      },
      where: {
        ...filter,
      },
    });
    console.log("res", res);
    return res;
  } catch (err) {
    throw err;
  }
};
