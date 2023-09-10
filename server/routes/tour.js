import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import {
  createTour,
getTour,
  getTours,
  getToursByUser,

} from "../controllers/tour.js";


router.get("/", getTours);
router.get("/:id", getTour);

router.get("/userTours/:id",auth, getToursByUser);

router.post("/",auth, createTour);


export default router;