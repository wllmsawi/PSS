import { createProductCategoryQuery } from "../query/productCategoryQuery";

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
