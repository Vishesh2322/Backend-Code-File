const express = require("express");
const { m1, m2 } = require("../middleware/firstmiddleware");
const { m3 } = require("../middleware/pathlevel");

const app =express();
app.use(express.static(__dirname+"/public"))
app.use(express.json());
app.use(express.urlencoded({extented:true}))
app.use(m1)
// app.use(m2)
app.get("/health",m3,(req,res,next)=>{
    console.log("running controller function")
    res.json({
        status:"ok",
        message:"server running ok"
    })
    // console.log("after response")
})
app.use(m2)


app.get("/home",(req,res,next)=>{
    console.log("running home endpoint..");
    res.json({
        sucess:true,
        message:"welcome to home page"
    })
})



app.listen(5775,()=>{
    console.log("server started")
})