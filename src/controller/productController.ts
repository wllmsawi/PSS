import { Request, Response } from "express";
import {
  createProductService,
  getProductService,
  getAllProductService,
  updateProductService,
} from "../service/productService";
import { boolean } from "yup";

export const getProductController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const newId = Number(id);
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
  const { page, pageSize } = req.body;
  try {
    const result = await getAllProductService(
      page,
      pageSize
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
      product_status,
    } = req.body;
    const newCategoryId = Number(category_id);
    const newProductPrice = Number(product_price);
    const newProductStatus = Boolean(product_status);
    console.log("---", typeof product_status);

    const result = await updateProductService(
      newId,
      product_name,
      newCategoryId || category_id,
      newProductPrice || product_price,
      req?.file?.filename || product_image,
      product_description || product_description,
      newProductStatus || product_status
    );
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};
