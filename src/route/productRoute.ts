import {
  getProductController,
  createProductController,
} from "../controller/productController";
import { uploadProductFile } from "../middleware/multer";
import express from "express";
const router = express.Router();

router.get("/:id", getProductController);
router.post(
  "/create",
  uploadProductFile,
  createProductController
);

export = router;
