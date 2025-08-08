import hotelModel from "../models/hotelModel.js";

import { v2 as cloudinary } from "cloudinary";


const addHotel = async (req, res) => {
    res.json({success: true, message: "Add workingg"})

}

const listHotel = async (req, res) => {
    
}

const removeHotel = async (req, res) => {
    
}

const singleHotel = async (req, res) => {
    
}

export {addHotel, listHotel, removeHotel, singleHotel}