const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extented: true }));
const Blogs = require("./model/user")
app.post("/blogs",async (req, res) => {
    let { title, body } = req.body;
    let newBlog = new Blogs({
        title: title,
        body:body ,
        date: Date.now()
    })
    await newBlog.save()
     res.json({
        success:true,
        data:newBlog,
        message:"blog addded successfully"
     })
})
app.get("/blogs",async(req,res)=>{
    let allblog = await Blogs.find();
    res.json({
       sucess:true,
       data:allblog
    })
})
app.get("/blogs/:id",async(req,res)=>{
    let {id} =  req.params
    let blog =  await Blogs.findOne({_id:id});
    res.json({
        sucess:true,
        data:blog
    })
})

app.listen(4445, () => {
    console.log("server started")
})
mongoose.connect('mongodb://127.0.0.1:27017/g26DB')
    .then(() => console.log('Connected!'));