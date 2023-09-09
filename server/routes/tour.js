import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import {
  createTour,

  getTours

} from "../controllers/tour.js";


router.get("/", getTours);


router.post("/",auth, createTour);


export default router;