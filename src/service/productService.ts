import {
  getProductQuery,
  createProductQuery,
  getAllProductQuery,
  updateProductQuery,
} from "../query/productQuery";
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
  product_image: string,
  product_description: string
) => {
  try {
    const res = await createProductQuery(
      product_name,
      category_id,
      product_price,
      product_image,
      product_description
    );
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

export const updateProductService = async (
  id: number,
  product_name: string,
  category_id: number,
  product_price: number,
  product_image: string,
  product_description: string
) => {
  try {
    const check = await getProductQuery(id);
    console.log("check", check);
    if (!check) throw new Error("Product doesnt exist");
    const res = await updateProductQuery(
      id,
      product_name,
      category_id,
      product_price,
      product_image,
      product_description
    );
    console.log("res", res);
    return res;
  } catch (err) {
    throw err;
  }
};
