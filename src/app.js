const express= require("express");
const connectDB= require("./config/database");
const { applyTimestamps } = require("./models/user");
const app= express();
const User= require("./models/user")


app.post("/signup",async (req, res)=>{
    
    // Creating a new instance of the User model
    const user= new User({
        firstName: "Akshay",
        lastName: "Saini",
        emailId: "akshay@saini.com",
        password: "akshay@123",
    });
    await user.save();
    res.send("User Added Sucessfully");
});





connectDB()
.then(()=>{
    console.log("Databse connection establised")
    app.listen(7777, ()=>{
        console.log("Server is successfully listening on Port 7777")
    })
})
.catch((err)=>{
    console.log("Database can't connected", err.message)
});




