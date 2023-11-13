import {
  createTransactionDetailController,
  getAllTransactionDetailController,
} from "../controller/transactionDetailController";
import express from "express";

const router = express.Router();

router.post("/create", createTransactionDetailController);
router.get("/", getAllTransactionDetailController);

export = router;
