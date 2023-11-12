import {
  getProductController,
  createProductController,
} from "../controller/productController";
import express from "express";
const router = express.Router();

router.get("/:id", getProductController);
router.post("/create", createProductController);

export = router;
