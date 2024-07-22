import express from "express"
import appRouter from "./routes/index.js";
import { config } from "dotenv"
import { connectToDatabase } from "./db/index.js";

const app = express()

config();

//middlewares
app.use(express.json());

app.use("/", appRouter)

const PORT = 5000 || 4000;

connectToDatabase().then(() => {
    app.listen(PORT, () => console.log(`Server Open at port:", ${PORT}`));
}).catch(err => {
    console.log("Error occured with mysql connection, Error = ", err);
    process.exit(0);
})