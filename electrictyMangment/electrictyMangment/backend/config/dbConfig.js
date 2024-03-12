import mongoose from "mongoose";

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://aniketecsion:aniketecsion@cluster0.gucigbe.mongodb.net/electrictyBill?retryWrites=true&w=majority"
    );

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Connected to MongoDB");
    });

    connection.on("error", (error) => {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1); 
    });
  } catch (error) {
    console.error("Something went wrong while connecting to MongoDB:");
    console.error(error);
  }
}

export default main;
