const mongoose= require("mongoose");

const connectDB= async()=>{
    await mongoose.connect(
        "mongodb+srv://namastedev:Sajid123@namastenode.yrpu0.mongodb.net/devTinder"
    );
};

module.exports= connectDB;

