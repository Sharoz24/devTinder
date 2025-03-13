const express= require("express");
const connectDB= require("./config/database")
const app= express();


connectDB()
.then(()=>{
    console.log("Databse connection establised")
    app.listen(7777, ()=>{
        console.log("Server is successfully listening on Port 7777")
    })
})
.catch((err)=>{
    console.log("Database can't connected")
});




