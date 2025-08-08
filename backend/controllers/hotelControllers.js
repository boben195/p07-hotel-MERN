import hotelModel from "../models/hotelModel.js";

import { v2 as cloudinary } from "cloudinary";


const addHotel = async (req, res) => {
    res.json({success: true, message: "Add workingg"})

}

const listHotel = async (req, res) => {
     res.json({success: true, message: "List workingg"})
}

const removeHotel = async (req, res) => {
    res.json({success: true, message: "Remove workingg"})
}

const singleHotel = async (req, res) => {
    res.json({success: true, message: "Single workingg"})
}

export {addHotel, listHotel, removeHotel, singleHotel}