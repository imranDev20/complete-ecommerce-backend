const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.ATLAS_URI, {
    dbName: "ecom",
  })
  .then(() => {
    console.log("Database connection successfull");
  });
