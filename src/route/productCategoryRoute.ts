import {
  createProductCategoryController,
  updateProductCategoryController,
  getProductCategoryController,
  getProductGroupController,
} from "../controller/productCategoryController";
import express from "express";
const router = express.Router();

router.get("/category", getProductCategoryController);
router.get("/group", getProductGroupController);
router.post("/", createProductCategoryController);
router.patch("/:id", updateProductCategoryController);

export = router;
