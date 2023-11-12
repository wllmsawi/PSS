import { createTransactionQuery } from "../query/transactionQuery";

export const createTransactionService = async (
  user_id: number,
  date: string,
  total_price: number,
  total_qty: number,
  payment_method_id: number,
  payment_amount: number,
  customer_id: number,
  payment_change: number
) => {
  try {
    const res = await createTransactionQuery(
      user_id,
      date,
      total_price,
      total_qty,
      payment_method_id,
      payment_amount,
      customer_id,
      payment_change,
    );
    return res;
  } catch (err) {
    throw err;
  }
};
