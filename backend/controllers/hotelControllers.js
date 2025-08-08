import hotelModel from "../models/hotelModel.js";

import { v2 as cloudinary } from "cloudinary";


const addHotel = async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const image = req.file;
        let imageUrl = "";


        if (image) {
            let result = await cloudinary.uploader.upload(image.path, { resource_type: "image" });
            imageUrl = result.secure_url
        } else {
            imageUrl = "https://via.placeholde.com/150"
        }

        const hotelData = {
            name, description, price: Number(price),
            image: imageUrl,
            date: Date.now()
        }

        const hotel = new hotelModel(hotelData);
        await hotel.save()

        res.json({success: true, message: "Hotel room added successfully"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Hotel room NOT added successfully! ERROR"})
    }
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