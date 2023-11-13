import {
  getProductController,
  getAllProductController,
  findProductController,
} from "../controller/productController";
import express from "express";
const router = express.Router();

router.get("/", getAllProductController);
router.get("/find/filter", findProductController);
router.get("/:id", getProductController);

export = router;
