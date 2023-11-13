import {
  getProductController,
  createProductController,
  getAllProductController,
  updateProductController,
} from "../controller/productController";
import { uploadProductFile } from "../middleware/multer";
import express from "express";
const router = express.Router();

router.get("/", getAllProductController);
router.get("/:id", getProductController);
router.post(
  "/create",
  uploadProductFile,
  createProductController
);
router.patch(
  "/:id",
  uploadProductFile,
  updateProductController
);

export = router;
