import { Request, Response } from "express";
import {
  createProductService,
  getProductService,
} from "../service/productService";

export const getProductController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const newId = Number(id);
  console.log("newId", typeof id);
  try {
    const result = await getProductService(newId);
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

export const createProductController = async (
  req: Request,
  res: Response
) => {
  const { product_name, category_id, product_price } =
    req.body;

  const newCategoryId = Number(category_id);
  const newProductPrice = Number(product_price);
  try {
    const result = await createProductService(
      product_name,
      newCategoryId,
      newProductPrice,
      req?.file?.filename || ""
    );
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};
