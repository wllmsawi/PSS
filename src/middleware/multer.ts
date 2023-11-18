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

const avatarStorage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => any
  ) => {
    cb(null, path.join(__dirname, "../public/images/avatar"));
  },
  filename: (
    req: Request,
    file: Express.Multer.File,
    cb: (error: Error | null, destination: string) => any
  ) => {
    const { username } = req.body;
    cb(null, `avatar_${username}-${Date.now()}-${file.originalname}`);
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

export const upload = multer({ storage: avatarStorage, fileFilter: fileFilter });

const limits = {
  fileSize: 5120 * 5120,
};

export const uploadProductFile = multer({
  storage: productStorage,
  fileFilter,
  limits,
}).single("product_image");

export const uploadAvatarFile = multer({
  storage: avatarStorage,
  fileFilter,
  limits,
}).single("avatar");
