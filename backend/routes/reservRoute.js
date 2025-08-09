import express from "express";

import { createReserv, deleteReserv, getAllReserv } from "../controllers/reservControllers.js";

const reservRouter = express.Router();

reservRouter.post("/create", createReserv);
reservRouter.get("/get", getAllReserv);
reservRouter.delete("/delete/:id", deleteReserv);

export default reservRouter