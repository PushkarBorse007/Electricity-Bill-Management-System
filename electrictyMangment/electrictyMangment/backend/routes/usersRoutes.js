import express from "express";
import { login, newRegister } from "../controller/users.js";
const usersRoutes = express.Router();
usersRoutes.post("/register", newRegister)
           .post("/login", login);

export default usersRoutes;
