import { createTransactionDetailService } from "../service/transactionDetailService";
import { Request, Response } from "express";

export const createTransactionDetailController = async (
  req: Request,
  res: Response
) => {
  try {
    const { transaction_id, product_id, qty, total_price, cart_id } = req.body;

    const result = await createTransactionDetailService(
      transaction_id,
      product_id,
      qty,
      total_price,
      cart_id
    );
    return res.status(200).json({
      message: "Create Transaction Detail Succes",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};
