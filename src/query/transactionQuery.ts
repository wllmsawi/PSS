import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTransactionQuery = async (
  user_id: number,
  total_price: number,
  total_qty: number,
  payment_method_id: number,
  payment_amount: number,
  customer_id: number,
  payment_change: number,
  total_price_ppn: number
): Promise<any> => {
  try {
    const res = await prisma.transaction.create({
      data: {
        user_id: user_id,
        total_price: total_price,
        total_qty: total_qty,
        payment_method_id: payment_method_id,
        payment_amount: payment_amount,
        customer_id: customer_id,
        payment_change: payment_change,
        total_price_ppn: total_price_ppn,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const findTransactionQuery = async (id: number) => {
  try {
    const res = await prisma.transaction.findUnique({
      where: {
        id: id,
      },
      include: {
        payment_method: true,
        transaction_detail: {
          include: {
            product: true,
          },
        },
        customer: true,
        user: true,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const getAllTransactionQuery = async (
  startDate: Date,
  endDate: Date
) => {
  try {
    const res = await prisma.transaction.findMany({
      where: {
        date: {
          gte: new Date(`${startDate}`),
          lte: new Date(`${endDate}`),
        },
      },
      include: {
        payment_method: true,
        transaction_detail: true,
        customer: true,
        user: true,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const updateTransactionQuery = async (
  id: number,
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
        id: id,
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

export const groupTransactionByDateQuery = async () => {
  try {
    const res = await prisma.transaction.groupBy({
      by: ["date"],
      _count: {
        total_price: true,
        total_price_ppn: true,
      },
      _sum: {
        total_price: true,
        total_price_ppn: true,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};
