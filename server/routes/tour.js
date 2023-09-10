import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import {
  createTour,
getTour,
  getTours

} from "../controllers/tour.js";


router.get("/", getTours);
router.get("/:id", getTour);

router.post("/",auth, createTour);


export default router;