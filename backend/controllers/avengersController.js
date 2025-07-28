/** @format */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "../user.json");
export const getAllAvengers = (req, res) => {
	fs.readFile(filePath, "utf8", (err, data) => {
		if (err) {
			console.error("Erreur lecture fichier :", err);
			return res.status(500).json({ error: "Erreur lecture fichier JSON" });
		}
		try {
			const json = JSON.parse(data);
			res.json(json.characters);
		} catch (e) {
			console.error("Erreur parsing JSON :", e);
			res.status(500).json({ error: "Erreur parsing JSON" });
		}
	});
};
