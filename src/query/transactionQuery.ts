import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createTransactionQuery = async ( 

) => {
    try {
        const res = await prisma.transaction.create ({})
        return res;
    } catch (err) {
        throw err;
    }
}