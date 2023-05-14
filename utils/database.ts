import mongoose from "mongoose";

// Track the connection status
let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB already connected.");
    return;
  }
  if (process.env.MONGODB_URI)
    try {
      await mongoose.connect(process.env.MONGODB_URI, { dbName: "moviesdb" });
      isConnected = true;
      console.log("MongoDB connected.");
    } catch (error) {
      console.log(error);
    }
};
