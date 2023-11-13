import { Request, Response } from "express";
import {
  createProductService,
  getProductService,
  getAllProductService,
  updateProductService,
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
  try {
    const {
      product_name,
      category_id,
      product_price,
      product_image,
      product_description,
    } = req.body;
    const newCategoryId = Number(category_id);
    const newProductPrice = Number(product_price);
    const result = await createProductService(
      product_name,
      newCategoryId,
      newProductPrice,
      req?.file?.filename || "",
      product_description
    );
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};

export const getAllProductController = async (
  req: Request,
  res: Response
) => {
  const { page, pageSize } = req.query;
  const newPage = Number(page);
  const newPageSize = Number(pageSize);
  try {
    const result = await getAllProductService(
      newPage || 0,
      newPageSize || 0
    );
    return res.status(200).json({
      message: "Find all product success",
      result: result,
    });
  } catch (err) {
    throw err;
  }
};

export const updateProductController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const newId = Number(id);
    const {
      product_name,
      category_id,
      product_price,
      product_image,
      product_description,
    } = req.body;
    const newCategoryId = Number(category_id);
    const newProductPrice = Number(product_price);
    const result = await updateProductService(
      newId,
      product_name,
      newCategoryId || category_id,
      newProductPrice || product_price,
      req?.file?.filename || product_image,
      product_description
    );
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};
