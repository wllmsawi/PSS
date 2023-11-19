import { Request, Response } from "express";
import { getStatusService } from "../service/statusService";

export const getStatusController = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await getStatusService();
    return res.status(200).json({
      message: "Get Status Success",
      data: result,
    });
  } catch (err) {
    throw err;
  }
};
