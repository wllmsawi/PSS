import { findAllEmployeeController, findEmployeeNameController, findEmployeeQueryController } from "../controller/userController";
import express, {Router} from "express";

const router = express.Router();

router.get("/", findAllEmployeeController);
router.get("/:id", findEmployeeQueryController);
router.get("/find/full_name", findEmployeeNameController);

export  = router;