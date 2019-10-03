import { Router } from "express";
import multer from "multer";

import uploadConfig from "./configs/upload";

import SessionController from "./controllers/SessionController";
import SpotController from "./controllers/SpotController";
import DashBoardController from "./controllers/DashBoardController";
import BookingController from "./controllers/BookingController";

const router = new Router();
const upload = multer(uploadConfig);

router.post("/sessions", SessionController.store);

router.get("/spots", SpotController.index);
router.post("/spot", upload.single("thumbnail"), SpotController.store);

router.get("/dashboard", DashBoardController.show);

router.post("/spots/:spot_id/bookings", BookingController.store);

export default router;
