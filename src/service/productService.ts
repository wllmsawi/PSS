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
  pageSize: number
) => {
  try {
    const res = await getAllProductQuery(page, pageSize);
    return res;
  } catch (err) {
    throw err;
  }
};

export const findProductService = async (
  product_name: string | null = null,
  category_id: number | null = null
) => {
  try {
    const res = await findProductQuery(
      product_name,
      category_id
    );
    return res;
  } catch (err) {
    throw err;
  }
};
