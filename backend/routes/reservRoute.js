import express from "express";

import { createReserv, deleteReserv, getAllReserv } from "../controllers/reservControllers.js";

const router = express.Router();

router.post("/create", createReserv);
router.get("/get", getAllReserv);
router.delete("/delete/:id", deleteReserv);

export default router