const express= require("express");

const app= express();

app.use("/", (err, req, res, next)=>{
    if(err){
         //Log on error
        res.status(500).send("something went wrong")
    }
});

app.get("/getUserData", (req,res)=>{
    // try{
    //     //Logic of DB call and get user Data
    throw new Error(tcyvuio);
    res.send("User Data Sent")
    // } catch(err){
    //     res.status(500).send("Some Error contact support team");
    // }
});

//You should
app.use("/", (err, req, res, next)=>{
    if(err){
         //Log on error
        res.status(500).send("something went wrong1")
    }
});



app.listen(7777, ()=>{
    console.log("Server is successfully listening on Port 7777")
})

