import {
  getProductQuery,
  getAllProductQuery,
  findProductQuery,
} from "../query/productQuery";

export const getProductService = async (id: number) => {
  try {
    const res = await getProductQuery(id);
    return res;
  } catch (err) {
    throw err;
  }
};

export const getAllProductService = async (
  page: number,
  pageSize: number,
  sortField: string,
  sortOrder: string
) => {
  try {
    const res = await getAllProductQuery(
      page,
      pageSize,
      sortField,
      sortOrder
    );
    return res;
  } catch (err) {
    throw err;
  }
};

export const findProductService = async (
  product_name: string | null = null,
  product_group_id: number | null = null
) => {
  try {
    const res = await findProductQuery(
      product_name,
      product_group_id
    );
    return res;
  } catch (err) {
    throw err;
  }
};
