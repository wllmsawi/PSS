import { Request, Response } from "express";
import { getBranchIdService } from "../service/branchService";

export const getBranchIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const result = await getBranchIdService(Number(id));
    return res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};
