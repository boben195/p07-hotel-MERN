import express from "express";
import { removeHotel, addHotel, listHotel, singleHotel } from "../controllers/hotelControllers.js";


const hotelRouter = express.Router();

hotelRouter.post("/add", addHotel);
hotelRouter.get("/list", listHotel);
hotelRouter.delete("/remove", removeHotel);
hotelRouter.get("/rooms", singleHotel);


export default hotelRouter