import express from "express"
import "express-async-errors";
import cors from "cors"
import dotenv from "dotenv"
import router from "./routes/index.router.js"
import errorHandler from "./middleware/error.handler.js";

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)
app.use(errorHandler);

dotenv.config()

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})
