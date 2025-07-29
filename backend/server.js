/** @format */

import express from "express";
import avengerRoutes from "./routes/avengers.routes.js";
import cors from "cors";

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/characters", avengerRoutes);

app.listen(port, () => {
	console.log(`Serveur en ligne : http://localhost:${port}`);
});
