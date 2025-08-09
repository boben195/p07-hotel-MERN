import reservModel from "../models/reservModel.js";


const createReserv = async (req, res) => {
    try {
        const { name, email, phone, checkin, checkout, guests, roomName, roomId } = req.body;
        if (!name || !email || !phone || !checkin || !checkout || !guests || !roomName || !roomId) {
            return res.json({ message: "All field are required" });
        }

        const newReserv = new reservModel({ name, email, phone, checkin, checkout, guests, roomName, roomId });
        await newReserv.save();

        res.json({message: "Reserv created successfully", reservation: newReserv})
    } catch (error) {
        console.log(error);
        res.json({message: "Error during reserv"})
        
    }

}

const getAllReserv = async (req, res) => {
    try {
        const reservations = await reservModel.find();
        res.json(reservations);
    } catch (error) {
        console.log(error);
        res.json({message: "Error during finding"})
    }
}

const deleteReserv = async (req, res) => {
    try {
        const { id } = req.params;
        await reservModel.findByIdAndDelete(id)
        res.json({message: "reserv deleted succ"})
    } catch (error) {
        console.log(error);
        res.json({message: "Error during delete"})
    }
    
}


export {createReserv, getAllReserv, deleteReserv}