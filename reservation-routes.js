import express from "express";
import {
  getMyreservation,
  getReservationById,
} from "../controllers/reservationcontrollers.js";

const router = express.Router();

// router.get("/me", getMyreservation);

router.get("/", getReservarionById);

export default router;