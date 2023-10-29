import mongoose from "mongoose";

const connectMongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Mongodb connected");
    } catch (error) {
        console.log(error);
    }
}

export default connectMongodb;