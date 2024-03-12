import express from "express";
import main from "./config/dbConfig.js";
import cors from "cors";
import usersRoutes from "./routes/usersRoutes.js";
import dotenv from "dotenv";
import unitConsumeRouter from "./routes/unitConsume.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", usersRoutes);
app.use("/api",unitConsumeRouter)

main();
app.listen(4000, () => {
  console.log("live");
});
