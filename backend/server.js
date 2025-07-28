import express from "express"
const port  = 5000
const app =express();
import avengerRoutes from "./routes/avengers.routes.js"
app.use(express.json());
app.use(express.urlencoded({}))

app.use("/poste", avengerRoutes);
app.listen(port, () => {
	console.log(`Serveur en ligne : http://localhost:${port}`);
});