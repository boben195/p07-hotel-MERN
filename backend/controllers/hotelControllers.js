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
     try {
         const hotels = await hotelModel.find({})
         res.json({success: true, hotels})
     } catch (error) {
        console.log(error);
        res.json({success: false, message: "ERROR!!! What da ?!"})
     }
}

const removeHotel = async (req, res) => {
    try {
        await hotelModel.findByIdAndDelete(req.body._id)
        res.json({success:true, message: "Hotel Room removed successfully!"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "ERROR!!! What da ?!"})
    }
}

const singleHotel = async (req, res) => {
    try {
        const hotel = await hotelModel.findById(req.params.id)
        if (!hotel) return res.json({ message: "Room not found" });
        res.json({hotel})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "ERROR!!! What da ?!"})
    }
}

export {addHotel, listHotel, removeHotel, singleHotel}