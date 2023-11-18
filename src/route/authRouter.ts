const express = require("express");
const router = express.Router();

// blm ada keep login
import {  keepLoginController, registerController, loginController, updateCashierController} from "../controller/authController";
import { createCashierController,deleteCashierController, changeCashierStatusController } from "../controller/authController";
import { upload, uploadAvatarFile } from "../middleware/multer";
import {  verifyToken } from "../middleware/userAuth";


router.post("/login", loginController);
router.post("/register", uploadAvatarFile, registerController);
router.get("/keep-login", verifyToken, keepLoginController);

router.post("/create", createCashierController);
router.put("/:id/update", upload.single("avatar"), updateCashierController);
router.delete("/:id/delete", deleteCashierController);
router.patch("/:id/change-status", changeCashierStatusController);
router.patch("/update-profile/:id", uploadAvatarFile);
// router.patch("/update-profile/:id", updateController);


// router.get('/admin-page', verifyToken => {
//     const userRole = req.user.role_id;
  
//     if (userRole === 1) {
//       // Admin role
//       res.json({ message: 'Admin page content' });
//     } else if (userRole === 2) {
//       // Cashier role
//       res.json({ message: 'Cashier page content' });
//     } else {
//       res.status(403).json({ message: 'Access forbidden' });
//     }
//   });


export = router;