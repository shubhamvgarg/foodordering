import mongoose, { ConnectOptions } from "mongoose";

const connection = async (): Promise<void> => {
    try {
       
        await mongoose.connect(process.env.MONGODB_URL as string);
        console.log("Connected to MongoDB");
    } catch (error: any) {
        console.error("Error connecting to MongoDB", error.message);
    }
};

export default connection;
