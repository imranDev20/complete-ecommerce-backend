import mongoose from "mongoose";
import "dotenv/config";
mongoose.set("strictQuery", true);

mongoose
  .connect(
    process.env.ATLAS_URI ||
      "mongodb+srv://dbuser1:SQrDENOjTeB06dNy@cluster0.k8znc.mongodb.net/",
    {
      dbName: "ecommerce",
    }
  )
  .then(() => {
    console.log("Database connection successfull");
  });
