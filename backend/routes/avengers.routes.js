/** @format */

import express from "express";
import { deleteCharacter, getAllAvengers, getAvangersById, postCharacters, updateCharacter } from "../controllers/avengersController.js";

const router = express.Router();

router.get("/", getAllAvengers)
router.get("/:id",getAvangersById)
router.post("/",postCharacters)
router.put("/:id", updateCharacter);
router.delete("/:id", deleteCharacter);
export default router;


