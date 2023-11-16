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
  sortOrder: string,
  branch_id: number,
  gte: number,
  lte: number
) => {
  try {
    const skip = (page - 1) * pageSize;
    const take = pageSize;
    const res = await prisma.product.findMany({
      skip,
      take,
      include: {
        product_group: true,
        product_category: true,
        stock: {
          include: {
            branch: true,
          },
          where: {
            quantity: {
              gte: gte,
              lte: lte,
            },
            branch_id: branch_id,
          },
        },
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
        product_category: true,
      },
      where: {
        ...filter,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const createProductQuery = async (
  product_name: string,
  product_group_id: number,
  product_category_id: number,
  product_price: number,
  product_image: string,
  product_description: string
) => {
  try {
    const res = await prisma.product.create({
      data: {
        product_name,
        product_group_id,
        product_category_id,
        product_price,
        product_image,
        product_description,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const updateProductQuery = async (
  id: number,
  product_name: string,
  product_group_id: number,
  product_category_id: number,
  product_price: number,
  product_image: string,
  product_description: string,
  product_status: boolean
) => {
  try {
    const res = await prisma.product.updateMany({
      where: {
        id: id,
      },
      data: {
        product_name,
        product_group_id,
        product_category_id,
        product_price,
        product_image,
        product_description,
        product_status,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};
