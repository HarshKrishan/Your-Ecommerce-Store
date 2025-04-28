import jwt from 'jsonwebtoken';


export default function getDataFromToken(req) {
    try {
        const token = req.cookies.get('token')?.value;
        
        if (!token) {
            return null;
        }
        // console.log("token", token);
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        return decodedToken.id;

    } catch (error) {
        console.error(error);   
        return null;
    }
}