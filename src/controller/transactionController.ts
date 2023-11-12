import { Request, Response } from "express";
import { createTransactionService } from "../service/transactionService";

export const createTransactionController = async (req: Request, res: Response) => {
  try {
    const {
      user_id,
      date,
      total_price,
      total_qty,
      payment_method_id,
      payment_amount,
      customer_id,
      payment_change,
    } = req.body
    const newUser_id= Number(user_id)
    const newTotal_price= Number(total_price)
    const newTotal_qty= Number(total_qty)
    const newPayment_method_id= Number (payment_method_id)
    const newPayment_amount= Number(payment_amount)
    const newCustomer_id= Number(customer_id)
    const newPayment_change= Number(payment_change)
    const result = await createTransactionService(newUser_id,date,newTotal_price,newTotal_qty,newPayment_method_id,newPayment_amount,newCustomer_id,newPayment_change)
    return res.status(200).json({
        message: "Create Transaction Success",
        data: result
    });
  } catch (err) {
    throw err;
  }
};
