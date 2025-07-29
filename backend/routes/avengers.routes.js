/** @format */

import express from "express";
import { deleteCharacter, getAllAvengers, getAvangersById, postCharacters, updateCharacter } from "../controllers/avengersController.js";

const router = express.Router();

// GET /characters ==> Get all characters
router.get("/", getAllAvengers)

// GET /characters/:id ==> Get a character by ID
router.get("/:id",getAvangersById)

// POST /characters ==> Create a new character
router.post("/",postCharacters)

// PUT /characters/:id ==> Update a character by ID
router.put("/:id", updateCharacter);

// DELETE /characters/:id ==> Delete a character by ID
router.delete("/:id", deleteCharacter);
export default router;


