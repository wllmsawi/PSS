import path from "path";
import { Request, Response } from "express";
import multer from "multer";

let date = new Date();
const productStorage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => void
  ) => {
    cb(
      null,
      path.join(__dirname, "../public/images/product")
    );
  },
  filename: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, filename: string) => void
  ) => {
    cb(
      null,
      `product_${date.getFullYear()}_${date.getMonth()}_${date.getDate()}_${
        file.originalname
      }`
    );
  },
});

const fileFilter = (req: Request, file: any, cb: any) => {
  const fileType = file.mimetype.split("/")[1];
  if (
    fileType === "png" ||
    fileType === "jpg" ||
    fileType === "jpeg" ||
    fileType === "gif"
  ) {
    cb(null, true);
  } else {
    cb("file type npt allowrd", false);
  }
};

const limits = {
  fileSize: 1024 * 1024,
};

export const uploadProductFile = multer({
  storage: productStorage,
  fileFilter,
  limits,
}).single("product_image");
