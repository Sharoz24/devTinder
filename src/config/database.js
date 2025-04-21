const mongoose= require("mongoose");

const connectDB= async()=>{
    await mongoose.connect(
        "mongodb+srv://namastedev:Junaid123@namastenode.yrpu0.mongodb.net/devTinder"
    );
};

module.exports= connectDB;