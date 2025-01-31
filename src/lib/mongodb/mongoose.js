import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

let initialized = false;

export const connect = async () => {
  mongoose.set("strictQuery", true);

  if (initialized) {
    console.log("MongoDB already connected");
    return;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("MongoDB URI is not defined in the environment variables");
    return;
  }

  try {
    await mongoose.connect(uri, {
      dbName: "next-realtor",
      useUnifiedTopology: true,
    });
    initialized = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
