import mongoose from "mongoose";

// Track the connection status
let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB already connected.");
    return;
  }
  if (process.env.MONGODB_URI && process.env.MONGODB_DBNAME)
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        dbName: process.env.MONGODB_DBNAME,
      });
      isConnected = true;
      console.log("MongoDB connected.");
    } catch (error) {
      // TODO: error handling
      console.log(error);
    }
};
