import {
  createTransactionController,
  findTransactionController,
  getAllTransactionController,
  updateTransactionController,
} from "../controller/transactionController";
import express from "express";

const router = express.Router();

router.post("/create", createTransactionController);
router.get("/:id", findTransactionController);
router.get("/", getAllTransactionController);
router.patch("/", updateTransactionController);

export = router;
