import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import {
  createTour,
  deleteTour,
getTour,
  getTours,
  getToursByUser,
  updateTour,

} from "../controllers/tour.js";


router.get("/", getTours);
router.get("/:id", getTour);
router.delete("/:id",auth, deleteTour);
router.patch("/:id", auth, updateTour);

router.get("/userTours/:id",auth, getToursByUser);

router.post("/",auth, createTour);


export default router;