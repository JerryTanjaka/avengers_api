/** @format */

import express from "express";
import { getAllAvengers } from "../controllers/avengersController.js";

const router = express.Router();

router.get("/", getAllAvengers);
export default router;
