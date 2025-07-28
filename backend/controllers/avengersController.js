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
export const getAvangersById = (req, res) => {
	fs.readFile(filePath, "utf8", (err, data) => {
		if (err) {
			console.error("Erreur lecture fichier :", err);
			return res.status(500).json({ error: "Erreur lecture fichier JSON" });
		}
		try {
			const id = req.params.id;
			const json = JSON.parse(data);
			const character = json.characters.find(objet => objet.id == id);
			if (character) res.json(character);
			else res.status(404).json({ error: "Personnage non trouvé" });
		} catch (e) {
			console.error("Erreur parsing JSON :", e);
			res.status(500).json({ error: "Erreur parsing JSON" });
		}
	});
};
export const postCharacters = (req, res) => {
	fs.readFile(filePath, "utf8", (err, data) => {
		if (err) {
			console.error("Erreur lecture fichier :", err);
			return res.status(500).json({ error: "Erreur lecture fichier JSON" });
		}
		try {
			const json = JSON.parse(data);
			const newCharacter = req.body;

			const lastId = json.characters.length > 0 ? json.characters[json.characters.length - 1].id : 0;
			newCharacter.id = lastId + 1;

			json.characters.push(newCharacter);

			fs.writeFile(filePath, JSON.stringify(json, null, 2), "utf8", err => {
				if (err) {
					console.error("Erreur écriture fichier :", err);
					return res.status(500).json({ error: "Erreur écriture fichier JSON" });
				 }
				res.status(201).json({ message: "Personnage ajouté", character: newCharacter });
			});
		} catch (e) {
			console.error("Erreur parsing JSON :", e);
			res.status(500).json({ error: "Erreur parsing JSON" });
		}
	});
};
export const updateCharacter = (req, res) => {
	fs.readFile(filePath, "utf8", (err, data) => {
		if (err) return res.status(500).json({ error: "Erreur lecture fichier" });

		try {
			const json = JSON.parse(data);
			const id = parseInt(req.params.id);
			const index = json.characters.findIndex(c => c.id === id);

			if (index === -1)
				return res.status(404).json({ error: "Personnage non trouvé" });

			json.characters[index] = { ...json.characters[index], ...req.body };

			fs.writeFile(filePath, JSON.stringify(json, null, 2), "utf8", err => {
				if (err) return res.status(500).json({ error: "Erreur écriture fichier" });

				res.json({ message: "Personnage mis à jour", character: json.characters[index] });
			});
		} catch (e) {
			res.status(500).json({ error: "Erreur parsing JSON" });
		}
	});
};
export const deleteCharacter = (req, res) => {
	fs.readFile(filePath, "utf8", (err, data) => {
		if (err) return res.status(500).json({ error: "Erreur lecture fichier" });

		try {
			const json = JSON.parse(data);
			const id = parseInt(req.params.id);
			const index = json.characters.findIndex(c => c.id === id);

			if (index === -1)
				return res.status(404).json({ error: "Personnage non trouvé" });

			const removed = json.characters.splice(index, 1); // Supprime

			fs.writeFile(filePath, JSON.stringify(json, null, 2), "utf8", err => {
				if (err) return res.status(500).json({ error: "Erreur écriture fichier" });

				res.json({ message: "Personnage supprimé", removed: removed[0] });
			});
		} catch (e) {
			res.status(500).json({ error: "Erreur parsing JSON" });
		}
	});
};
