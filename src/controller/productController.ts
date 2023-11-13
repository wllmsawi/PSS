import { Request, Response } from "express";
import {
  getProductService,
  getAllProductService,
  findProductService,
} from "../service/productService";

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

export const getAllProductController = async (
  req: Request,
  res: Response
) => {
  const { page, pageSize, sortField, sortOrder } = req.body;
  try {
    const result = await getAllProductService(
      page,
      pageSize,
      sortField || "product_name",
      sortOrder || "asc"
    );
    return res.status(200).json({
      message: "Find all product success",
      result: result,
    });
  } catch (err) {
    throw err;
  }
};

export const findProductController = async (
  req: Request,
  res: Response
) => {
  try {
    const { product_name, category_id } = req.query;
    const result = await findProductService(
      String(product_name),
      Number(category_id)
    );
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};
