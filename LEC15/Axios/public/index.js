const express = require('express');
const app = express();

 app.use(express.static(__dirname + "/public"));


app.post('/blog', (req, res) => {
    console.log(req.body)
    let title=req.body.title;
    let description=req.body.description;
    console.log(title,description);
    
    res.json({
        success:true,
        message:"blog added"
});

// Start the server
app.listen(6665, () => {
    console.log(`🚀 Server is running`);
});
