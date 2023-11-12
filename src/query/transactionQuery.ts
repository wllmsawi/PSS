import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTransactionQuery = async (
  user_id: number,
  date: string,
  total_price: number,
  total_qty: number,
  payment_method_id: number,
  payment_amount: number,
  customer_id: number,
  payment_change: number
): Promise<any> => {
  try {
    const res = await prisma.transaction.create({
      data: {
        user_id: user_id,
        date: date,
        total_price: total_price,
        total_qty: total_qty,
        payment_method_id: payment_method_id,
        payment_amount: payment_amount,
        customer_id: customer_id,
        payment_change: payment_change,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const findTransactionQuery = async (transaction_id: number) => {
  try {
    const res = await prisma.transaction.findUnique({
      where: {
        id: transaction_id,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

const getAllTransactionQuery = async () => {
  try {
    const res = await prisma.transaction.findMany();
    return res;
  } catch (err) {
    throw err;
  }
};

const updateTransactionQuery = async (
  transaction_id: number,
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
    const res = await prisma.transaction.updateMany({
      where: {
        id: transaction_id,
      },
      data: {
        user_id: user_id,
        date: date,
        total_price: total_price,
        total_qty: total_qty,
        payment_method_id: payment_method_id,
        payment_amount: payment_amount,
        customer_id: customer_id,
        payment_change: payment_change,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};
