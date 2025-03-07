const express= require("express")

const app= express();   //creating the instance 

app.get("/user/:userID/:name/:password", (req, res)=>{
    console.log(req.params)
    res.send({firstName: "Sharoz", lastName: "Khan"});
});

app.listen(7777, ()=>{
    console.log("Server listening form the port 7777...")
});


