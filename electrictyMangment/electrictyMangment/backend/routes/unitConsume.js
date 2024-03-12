import express from "express";
import getUnitValueByMonth from "../controller/unitConsume.js";

const unitConsumeRouter = express.Router();
unitConsumeRouter.post("/unit", getUnitValueByMonth);

export default unitConsumeRouter;
