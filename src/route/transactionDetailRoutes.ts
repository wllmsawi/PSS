import { createTransactionDetailController } from "../controller/transactionDetailController";
import express from "express";

const router = express.Router();

router.post("/create", createTransactionDetailController)


export = router;
