import { createTransactionController } from "../controller/transactionController";
import express from "express";

const router = express.Router();

router.post("/create", createTransactionController);

export = router;
