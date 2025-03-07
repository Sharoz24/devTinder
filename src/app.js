const express= require("express")

const app= express();   //creating the instance 

// app.use("/user", (req,res)=>{
//     res.send("HAHHAHAHHAHAHAH");
// });

//This will only handle the GET call to /user
app.get("/user", (req, res)=>{
    res.send({firstName: "Sharoz", lastName: "Khan"});
});

app.post("/user", (req, res)=>{
    // saving data to DB
    res.send("Data successfully saved to the database!");
});


app.delete("/user", (req,res)=>{
    res.send("Deleted Successfully")
})

app.patch("/user", (req,res)=>{
    res.send("Patch call taken place")
})


//This will match all the HTTP method API calls to /test
app.use("/test", (req, res)=>{
    res.send("Hello from the server")
});

app.listen(7777, ()=>{
    console.log("Server listening form the port 7777...")
});


