import express from "express";
import { removeHotel, addHotel, listHotel, singleHotel } from "../controllers/hotelControllers.js";


const hotelRouter = express.Router();

hotelRouter.post("/add", addHotel);


export default hotelRouter