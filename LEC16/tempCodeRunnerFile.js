app.get("/blogs",async(req,res)=>{
    let allblog = await Blogs.find();
    res.json({
       sucess:true,
       data:allblog
    })
})