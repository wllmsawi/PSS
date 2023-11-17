import {
  createProductCategoryController,
  updateProductCategoryController,
} from "../controller/productCategoryController";
import express from "express";
const router = express.Router();

router.post("/", createProductCategoryController);
router.patch("/:id", updateProductCategoryController);

export = router;
