const express= require("express")

const app= express()   //creating the instance 

app.get("/", (req, res)=>{
    res.send("Hi from the Dashboard")
})

app.get("/ok", (req, res)=>{
    res.send("Hello from the server44")
})

app.get("/done", (req, res)=>{
    res.send("Hi from the  with test")
})

app.listen(7777, ()=>{
    console.log("Server listening form the port 7777...")
})


