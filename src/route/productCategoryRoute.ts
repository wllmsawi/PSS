import { createProductCategoryController } from "../controller/productCategoryController";
import express from "express";
const router = express.Router();

router.post("/", createProductCategoryController);

export = router;
