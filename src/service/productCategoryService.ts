import {
  createProductCategoryQuery,
  updateProductCategoryQuery,
} from "../query/productCategoryQuery";

export const createProductCategoryService = async (
  product_category_name: string
) => {
  try {
    const res = await createProductCategoryQuery(
      product_category_name
    );
    return res;
  } catch (err) {
    throw err;
  }
};

export const updateProductCategoryService = async (
  id: number,
  product_category_name: string
) => {
  try {
    const res = await updateProductCategoryQuery(
      id,
      product_category_name
    );
    return res;
  } catch (err) {
    throw err;
  }
};
