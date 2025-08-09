import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
            return res.json({success: false, message: "Unautorize user"})
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({success: false, message: "user are not authorize"})
        }

        next()
    } catch (error) {
        return res.json({success: false, message: "Auth not succ"})
    }
}

export default adminAuth