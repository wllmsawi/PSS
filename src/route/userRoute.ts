import { getAllEmployeeController, getEmployeeNameController, getEmployeeQueryController } from "../controller/userController";
import express, {Router} from "express";

const router = express.Router();

router.get("/", getAllEmployeeController);
router.get("/:id", getEmployeeQueryController);
router.get("/:name:", getEmployeeNameController);

export  = router;