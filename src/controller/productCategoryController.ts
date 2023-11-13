import { Request, Response } from "express";
import {
  createProductCategoryService,
  updateProductCategoryService,
} from "../service/productCategoryService";

export const createProductCategoryController = async (
  req: Request,
  res: Response
) => {
  try {
    const { product_category_name } = req.body;
    const result = await createProductCategoryService(
      product_category_name
    );
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

export const updateProductCategoryController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const { product_category_name } = req.body;
    const result = await updateProductCategoryService(
      Number(id),
      product_category_name
    );
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};
