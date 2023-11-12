import { getProductQuery } from "../query/productQuery";
import { createProductQuery } from "../query/productQuery";
export const getProductService = async (id: number) => {
  try {
    const res = await getProductQuery(id);
    return res;
  } catch (err) {
    throw err;
  }
};

export const createProductService = async (
  product_name: string,
  category_id: number,
  product_price: number,
  product_image: string
) => {
  try {
    const res = await createProductQuery(
      product_name,
      category_id,
      product_price,
      product_image
    );
  } catch (err) {
    throw err;
  }
};
